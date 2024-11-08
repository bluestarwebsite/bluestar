"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { Phone, Mail, ArrowUp } from "lucide-react";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { useRef, useState, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Link from "next/link";

const tex = localFont({
  src: [
    {
      path: "./texgyrepagella-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./texgyrepagella-bolditalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./texgyrepagella-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./texgyrepagella-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function HomePage() {
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const propertyRef = useRef<HTMLDivElement | null>(null);
  const parent = useRef(null);

  const [about, setAbout] = useState("none");
  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  const [width, setWidth] = useState<number>(1080);

  useEffect(() => {
    // Set the initial width
    setWidth(window.innerWidth);

    // Define the resize handler
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }

    // Add event listener on mount
    window.addEventListener("resize", handleWindowSizeChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return isMobile ? (
    <div className="flex h-max w-screen flex-col">
      <div className="h-screen w-screen bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-brand-bg bg-opacity-60">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={200} />
          </Link>
          <p
            className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ABOUT
          </p>
          <p
            className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SERVICES
          </p>
          <p
            className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
            onClick={() => {
              propertyRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROPERTIES
          </p>
          <p
            className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </p>
        </div>
      </div>
      <div ref={aboutRef} className="flex h-[125vh] w-full flex-col">
        <div className="flex w-full flex-col items-center justify-center gap-y-2 bg-brand-bg p-8 text-center">
          <h1 className={`text-4xl font-bold text-white ${tex.className}`}>
            WE ARE BLUESTAR
          </h1>
          <p className="text-xl text-white">
            At BlueStar, we specialize in providing unparalleled real estate
            consultancy services, focusing on precise underwriting and valuation
            of assets. With cutting-edge software tools, we deliver maximum
            accuracy in evaluating both commercial and residential properties
            globally.
          </p>
          <p className="text-xl text-white">
            Our bespoke approach delivers tailored strategies aligned with your
            investment goals and timelines.
          </p>
          <button
            className="rounded-lg bg-brand-blue px-4 py-2 text-white"
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </button>
        </div>
        <div
          ref={parent}
          className="flex h-full w-full flex-col justify-center gap-y-4 bg-brand-bg bg-opacity-70 bg-[url(/introbg.webp)] bg-cover bg-center bg-no-repeat p-8"
        >
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("team")}
            >
              OUR TEAM
            </h1>
          </div>
          {about === "team" ? (
            <p className="text-white">
              Based in the vibrant city of Miami, Florida, BlueStar operates on
              a global scale, catering to clients with diverse needs. Our team
              is multilingual proficient, allowing us to effectively communicate
              and cater to clients worldwide.
            </p>
          ) : null}
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("expertise")}
            >
              EXPERTISE
            </h1>
          </div>
          {about === "expertise" ? (
            <p className="text-white">
              Our team boasts an exceptional academic background, almost all of
              our members holding specialized post-graduate degrees from
              top-five institutions such as the Florida International University
              College of Business. Well-rounded with our education and
              intentional with our mission, BlueStar infuses its innovative and
              unique perspectives into each project, proposal, and venture.
            </p>
          ) : null}
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("mission")}
            >
              OUR MISSION
            </h1>
          </div>
          {about === "mission" ? (
            <p className="text-white">
              At BlueStar, our mission is to set the gold standard in the
              industry by delivering a level of detail and accuracy that
              surpasses market expectations. We are committed to being the
              guiding &quot;North Star&quot; for your real estate aspirations
              and craft creative strategies that are as detailed and precise as
              they are innovative.
            </p>
          ) : null}
        </div>
      </div>
      <div className="h-full w-full bg-brand-bg">
        <h1
          className={`mx-auto py-10 text-center text-5xl font-bold text-white ${tex.className}`}
        >
          REAL ESTATE SERVICES
        </h1>
      </div>
      <div ref={serviceRef} className="h-max w-full bg-brand-bg">
        <div className="flex h-full w-screen flex-col">
          <div className="mx-auto h-max w-screen bg-[url(/boutiquebg.webp)] bg-cover bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-90 p-8">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Boutique
              </h1>
              <p className="pt-4 text-xl text-white">
                Where traditional brokers often rely on arbitrary comparisons,
                we conduct thorough, in-depth analyses, making sure you have all
                vital details about potential investments, from construction
                history to market dynamics. Our expertise extends to assisting
                with the nuanced tax treatment of real estate, covering every
                type and location. When you work with BlueStar, you gain access
                to comprehensive insights that empower you to make informed,
                strategic investment decisions.
              </p>
            </div>
          </div>
          <div className="h-max w-screen bg-[url(/integrativebg.webp)] bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-90 p-8">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Integrative
              </h1>
              <p className="pt-4 text-xl text-white">
                If you are an existing entity seeking to optimize your
                acquisition strategies and portfolio management, BlueStar
                seamlessly becomes part of your operations for a comprehensive
                analysis. Our full-spectrum support ensures your real estate
                investments align with broader business objectives and
                consistently deliver the sustained growth and success outlined
                in your unique strategy.
              </p>
            </div>
          </div>

          <div className="h-max w-screen bg-[url(/bespokebg.webp)] bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-90 p-8">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Bespoke
              </h1>
              <p className="pt-4 text-xl text-white">
                Our bespoke approach delivers tailored strategies aligned with
                your investment goals and timelines. We work closely with you to
                understand your unique needs and develop a customized investment
                plan that is both efficient and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-max w-screen bg-[url(/topsplashbg.webp)] bg-cover bg-[center_top_25%]">
        <div className="flex h-full w-full items-center justify-center bg-brand-bg bg-opacity-70 p-16">
          <button
            className={`rounded-lg bg-brand-blue px-8 py-2 text-2xl font-bold text-white ${tex.className}`}
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            WORK WITH US
          </button>
        </div>
      </div>
      <div
        ref={propertyRef}
        className="flex h-max w-screen flex-col bg-brand-bg"
      >
        <div className="flex h-max w-screen flex-col justify-center gap-y-4 p-8">
          <h1 className={`text-5xl font-bold text-white ${tex.className}`}>
            OUR PROPERTIES
          </h1>
          <p className="text-white">
            The satisfaction and success of our past and current clients testify
            to our commitment and expertise.
          </p>
          <p className="text-white">
            We invite you to review real examples of our case studies here that
            display our accomplishments and the outstanding results we have
            achieved.
          </p>
        </div>
        <div className="grid w-screen grid-cols-2 grid-rows-3">
          <Image
            src="/property1.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property2.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property3.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property4.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property5.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property6.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
        </div>
      </div>
      <div
        ref={contactRef}
        className="flex h-screen w-screen flex-col items-center justify-center bg-[url(/contactbg.webp)] bg-cover bg-center"
      >
        <div className="flex h-max w-screen flex-col rounded-3xl bg-brand-bg bg-opacity-80 p-16">
          <h1
            className={`pb-4 text-center text-4xl font-bold text-white ${tex.className}`}
          >
            SEND US A MESSAGE
          </h1>
          <div className="flex h-max w-max flex-col text-nowrap text-sm">
            <div className="flex flex-row text-white">
              <p className="pt-1">First Name:</p>
              <Input type="text" />
            </div>
            <div className="flex flex-row text-white">
              <p className="pt-1">Last Name:</p>
              <Input type="text" />
            </div>
            <div className="flex flex-row text-white">
              <p className="pt-1">Phone:</p>
              <Input type="text" />
            </div>
            <div className="flex flex-row text-white">
              <p className="pt-1">Email:</p>
              <Input type="email" />
            </div>
          </div>
          <p className="mr-auto py-2 italic text-white">Message:</p>
          <Textarea placeholder="Message" />
          <button className="mx-auto mt-2 w-max rounded-md bg-brand-blue px-4 py-2 text-white">
            Send
          </button>
        </div>
      </div>
      <ArrowUp
        className="fixed bottom-8 right-4 ml-auto mr-10 h-[40px] w-[40px] rounded-full bg-brand-blue p-2"
        color="#FFF"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <div className="flex h-max w-screen flex-row justify-center bg-brand-bg">
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 text-xl font-semibold text-white ${tex.className}`}
          >
            SITE MAP
          </h1>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ABOUT
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SERVICES
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              propertyRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROPERTIES
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </p>
        </div>
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 text-xl font-semibold text-white ${tex.className}`}
          >
            CONTACT
          </h1>
          <div className="flex flex-row">
            <Phone color="#FFF" />
            <p className="ml-2 text-sm text-white">+1 (234) 567-8910</p>
          </div>
          <div className="flex flex-row">
            <Mail color="#ffffff" />
            <p className="ml-2 text-sm text-white">EMAIL@BLUESTAR.COM</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="sticky top-0 z-10 flex h-[20vh] w-screen flex-row items-center justify-center gap-x-4 bg-brand-bg bg-opacity-60">
        <p
          className={`cursor-pointer pt-16 text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          ABOUT
        </p>
        <p
          className={`cursor-pointer pt-16 text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            serviceRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          SERVICES
        </p>
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </Link>
        <p
          className={`cursor-pointer pt-16 text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            propertyRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          PROPERTIES
        </p>
        <p
          className={`cursor-pointer pt-16 text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          CONTACT
        </p>
      </div>
      <div className="absolute top-0 h-screen w-full bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat"></div>
      <div className="h-[80vh] w-screen"></div>
      <div
        ref={aboutRef}
        className="flex h-screen w-full flex-row bg-[url(/introbg.webp)] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex w-2/3 flex-col items-center justify-center gap-y-2 bg-brand-bg p-20">
          <h1 className={`text-4xl font-bold text-white ${tex.className}`}>
            WE ARE BLUESTAR
          </h1>
          <p className="text-xl text-white">
            At BlueStar, we specialize in providing unparalleled real estate
            consultancy services, focusing on precise underwriting and valuation
            of assets. With cutting-edge software tools, we deliver maximum
            accuracy in evaluating both commercial and residential properties
            globally.
          </p>
          <p className="text-xl text-white">
            Our bespoke approach delivers tailored strategies aligned with your
            investment goals and timelines.
          </p>
          <button
            className="rounded-lg bg-brand-blue px-4 py-2 text-white"
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in Touch
          </button>
        </div>
        <div
          ref={parent}
          className="flex w-1/3 flex-col justify-center gap-y-4 bg-brand-bg bg-opacity-80 p-16"
        >
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("team")}
            >
              OUR TEAM
            </h1>
          </div>
          {about === "team" ? (
            <p className="text-white">
              Based in the vibrant city of Miami, Florida, BlueStar operates on
              a global scale, catering to clients with diverse needs. Our team
              is multilingual proficient, allowing us to effectively communicate
              and cater to clients worldwide.
            </p>
          ) : null}
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("expertise")}
            >
              EXPERTISE
            </h1>
          </div>
          {about === "expertise" ? (
            <p className="text-white">
              Our team boasts an exceptional academic background, almost all of
              our members holding specialized post-graduate degrees from
              top-five institutions such as the Florida International University
              College of Business. Well-rounded with our education and
              intentional with our mission, BlueStar infuses its innovative and
              unique perspectives into each project, proposal, and venture.
            </p>
          ) : null}
          <div className="flex flex-row gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#0E78BD"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
            </svg>
            <h1
              className={`cursor-pointer text-4xl font-semibold text-white ${tex.className}`}
              onClick={() => setAbout("mission")}
            >
              OUR MISSION
            </h1>
          </div>
          {about === "mission" ? (
            <p className="text-white">
              At BlueStar, our mission is to set the gold standard in the
              industry by delivering a level of detail and accuracy that
              surpasses market expectations. We are committed to being the
              guiding &quot;North Star&quot; for your real estate aspirations
              and craft creative strategies that are as detailed and precise as
              they are innovative.
            </p>
          ) : null}
        </div>
      </div>
      <div className="h-full w-full bg-brand-bg">
        <h1
          className={`mx-auto py-10 text-center text-5xl font-bold text-white ${tex.className}`}
        >
          REAL ESTATE SERVICES
        </h1>
      </div>
      <div ref={serviceRef} className="h-screen w-full bg-brand-bg">
        <div className="flex h-full w-screen flex-row">
          <div className="mx-auto w-1/3 bg-[url(/boutiquebg.webp)] bg-cover bg-center">
            <div className="group h-full w-full bg-brand-bg bg-opacity-70 p-8 hover:bg-opacity-90 hover:duration-500">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Boutique
              </h1>
              <p className="pt-16 text-xl text-white opacity-0 group-hover:opacity-100 group-hover:duration-500">
                Where traditional brokers often rely on arbitrary comparisons,
                we conduct thorough, in-depth analyses, making sure you have all
                vital details about potential investments, from construction
                history to market dynamics. Our expertise extends to assisting
                with the nuanced tax treatment of real estate, covering every
                type and location. When you work with BlueStar, you gain access
                to comprehensive insights that empower you to make informed,
                strategic investment decisions.
              </p>
            </div>
          </div>
          <div className="mx-auto w-1/3 bg-[url(/integrativebg.webp)] bg-cover bg-center">
            <div className="group h-full w-full bg-brand-bg bg-opacity-70 p-8 hover:bg-opacity-90 hover:duration-500">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Integrative
              </h1>
              <p className="pt-16 text-xl text-white opacity-0 group-hover:opacity-100 group-hover:duration-500">
                If you are an existing entity seeking to optimize your
                acquisition strategies and portfolio management, BlueStar
                seamlessly becomes part of your operations for a comprehensive
                analysis. Our full-spectrum support ensures your real estate
                investments align with broader business objectives and
                consistently deliver the sustained growth and success outlined
                in your unique strategy.
              </p>
            </div>
          </div>

          <div className="mx-auto w-1/3 bg-[url(/bespokebg.webp)] bg-cover bg-center">
            <div className="group h-full w-full bg-brand-bg bg-opacity-70 p-8 hover:bg-opacity-90 hover:duration-500">
              <h1
                className={`text-bold text-center text-5xl text-white ${tex.className}`}
              >
                Bespoke
              </h1>
              <p className="pt-16 text-xl text-white opacity-0 group-hover:opacity-100 group-hover:duration-500">
                Our bespoke approach delivers tailored strategies aligned with
                your investment goals and timelines. We work closely with you to
                understand your unique needs and develop a customized investment
                plan that is both efficient and profitable.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-max w-screen bg-[url(/topsplashbg.webp)] bg-cover bg-[center_top_25%]">
        <div className="flex h-full w-full items-center justify-center bg-brand-bg bg-opacity-70 p-16">
          <button
            className={`rounded-lg bg-brand-blue px-8 py-2 text-2xl font-bold text-white ${tex.className}`}
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            WORK WITH US
          </button>
        </div>
      </div>
      <div
        ref={propertyRef}
        className="flex h-screen w-screen flex-row bg-brand-bg"
      >
        <div className="grid w-2/3 grid-cols-2 grid-rows-3">
          <Image
            src="/property1.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property2.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property3.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property4.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property5.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
          <Image
            src="/property6.jpg"
            alt="propertybg"
            width={300}
            height={200}
            className="h-full w-full"
          />
        </div>
        <div className="flex h-screen w-1/3 flex-col justify-center gap-y-4 p-8">
          <h1 className={`text-5xl font-bold text-white ${tex.className}`}>
            OUR PROPERTIES
          </h1>
          <p className="text-white">
            The satisfaction and success of our past and current clients testify
            to our commitment and expertise.
          </p>
          <p className="text-white">
            We invite you to review real examples of our case studies here that
            display our accomplishments and the outstanding results we have
            achieved.
          </p>
        </div>
      </div>
      <div
        ref={contactRef}
        className="flex h-screen w-screen flex-col items-center justify-center bg-[url(/contactbg.webp)] bg-cover bg-center"
      >
        <div className="flex h-max w-max flex-col rounded-3xl bg-brand-bg bg-opacity-80 p-16">
          <h1
            className={`pb-10 text-center text-5xl font-bold text-white ${tex.className}`}
          >
            SEND US A MESSAGE
          </h1>
          <div className="grid h-max w-max grid-cols-2 grid-rows-2 gap-2 text-nowrap">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 flex flex-row text-white">
              <p className="pt-2">First Name:</p>
              <Input type="text" />
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 flex flex-row text-white">
              <p className="pt-2">Last Name:</p>
              <Input type="text" />
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 flex flex-row text-white">
              <p className="pt-2">Phone:</p>
              <Input type="text" />
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 flex flex-row text-white">
              <p className="pt-2">Email:</p>
              <Input type="email" />
            </div>
          </div>
          <p className="mr-auto py-2 italic text-white">Message:</p>
          <Textarea placeholder="Message" />
          <button className="mx-auto mt-2 w-max rounded-md bg-brand-blue px-4 py-2 text-white">
            Send
          </button>
        </div>
      </div>
      <div className="flex h-max w-screen flex-row justify-center bg-brand-bg">
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
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 text-xl font-semibold text-white ${tex.className}`}
          >
            SITE MAP
          </h1>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ABOUT
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SERVICES
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              propertyRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            PROPERTIES
          </p>
          <p
            className="cursor-pointer text-sm text-white"
            onClick={() => {
              contactRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            CONTACT
          </p>
        </div>
        <div className="flex flex-col p-8">
          <h1
            className={`pb-2 text-xl font-semibold text-white ${tex.className}`}
          >
            CONTACT
          </h1>
          <div className="flex flex-row">
            <Phone color="#FFF" />
            <p className="ml-2 text-sm text-white">+1 (234) 567-8910</p>
          </div>
          <div className="flex flex-row">
            <Mail color="#ffffff" />
            <p className="ml-2 text-sm text-white">EMAIL@BLUESTAR.COM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
