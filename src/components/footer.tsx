"use client";
import Image from "next/image";
import { useIsMobile } from "@/lib/hooks";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";

export default function Footer() {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex h-max w-screen flex-row ${isMobile ? "" : "justify-center"} bg-brand-bg`}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer"
      />
      <div className="flex w-max flex-col p-2">
        <h1 className={`pb-2 text-xl font-semibold text-white`}>
          Connect With Us
        </h1>
        <div className="flex flex-row">
          <IoMdPhonePortrait color="#FFF" />
          <p className="ml-2 text-sm text-white">+1 (718) 690-1914</p>
        </div>
        <div className="flex flex-row">
          <IoMdMail color="#ffffff" />
          <p className="ml-2 text-sm text-white">Email</p>
        </div>
        <div className="flex flex-row">
          <FaInstagram color="#ffffff" />
          <p className="ml-2 text-sm text-white">Instagram</p>
        </div>
        <div className="flex flex-row">
          <FaFacebook color="#ffffff" />
          <p className="ml-2 text-sm text-white">Facebook</p>
        </div>
        <div className="flex flex-row">
          <FaXTwitter color="#ffffff" />
          <p className="ml-2 text-sm text-white">
            X, formerly known as Twitter
          </p>
        </div>
        <div className="flex flex-row">
          <FaLinkedin color="#ffffff" />
          <p className="ml-2 text-sm text-white">Linkedin</p>
        </div>
      </div>
    </div>
  );
}
