"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { SiCalendly } from "react-icons/si";
import { useState } from "react";
import { useIsMobile } from "@/lib/hooks";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function Contact({ title }: { title: string }) {
  const [inquirySend, setInquirySend] = useState("SEND INQUIRY");
  interface FormData {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInquirySend("SENDING...");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = (await response.json()) as string;
        console.log("Response from server:", data);
        setInquirySend("Inquiry submitted successfully!");
        await delay(2000).then(() => {
          setInquirySend("SEND INQUIRY");
        });
      } else {
        setInquirySend("Failed to submit form");

        await delay(10000).then(() => {
          setInquirySend("SEND INQUIRY");
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen w-screen flex-col bg-[url(/contactbg.webp)] bg-cover bg-center">
      <form className="m-auto" onSubmit={handleSubmit}>
        <div className="flex h-min w-min flex-col rounded-3xl bg-brand-bg bg-opacity-80 p-16">
          <div className="mx-auto">
            <h1
              className={`${isMobile ? "pb-2 text-2xl" : "pb-10 text-5xl"} text-center font-bold text-white`}
            >
              {title}
            </h1>
          </div>
          <div
            className={`${isMobile ? "flex flex-col" : "grid h-max w-max grid-cols-2 grid-rows-2 gap-2"} text-nowrap`}
          >
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-row text-white">
              <p className="pt-2">First Name:</p>
              <Input
                name="fname"
                type="text"
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex flex-row text-white">
              <p className="pt-2">Last Name:</p>
              <Input
                name="lname"
                type="text"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 flex flex-row text-white">
              <p className="pt-2">Phone:</p>
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex flex-row text-white">
              <p className="pt-2">Email:</p>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <p className="mr-auto py-2 italic text-white">Message:</p>
          <Textarea
            className="text-white"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="mx-auto mt-2 w-max rounded-md bg-brand-blue px-4 py-2 text-white"
          >
            {inquirySend}
          </button>
          <p className="mx-auto text-white"> OR: </p>
          <Link
            href="https://calendly.com/admin-bsreconsulting/30min"
            className="mx-auto mt-2 flex w-max flex-row rounded-md bg-brand-blue px-4 py-2 text-white"
          >
            <SiCalendly className="my-auto mr-2" />
            <p>Book a Free Strategy Call</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
