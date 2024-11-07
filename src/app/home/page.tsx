"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <div className="h-screen w-full bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="flex h-max w-full flex-row items-center justify-center gap-x-4 bg-brand-bg bg-opacity-60">
          <p className="pt-16 text-2xl font-semibold text-white">About</p>
          <p className="pt-16 text-2xl font-semibold text-white">Services</p>
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <p className="pt-16 text-2xl font-semibold text-white">Properties</p>
          <p className="pt-16 text-2xl font-semibold text-white">Contact</p>
        </div>
      </div>
      <div className="flex h-screen w-full flex-row bg-[url(/introbg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="flex w-2/3 flex-col items-center justify-center gap-y-2 bg-brand-bg p-20">
          <h1 className="text-4xl font-bold text-white">We Are Bluestar</h1>
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
          <button className="rounded-lg bg-brand-blue px-4 py-2 text-white">
            Get in Touch
          </button>
        </div>
        <div className="flex w-1/3 flex-col justify-center gap-y-4 bg-brand-bg bg-opacity-70 p-20">
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
            <h1 className="text-4xl font-semibold text-white">OUR TEAM</h1>
          </div>
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
            <h1 className="text-4xl font-semibold text-white">EXPERTISE</h1>
          </div>
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
            <h1 className="text-4xl font-semibold text-white">OUR MISSION</h1>
          </div>
        </div>
      </div>
      <div className="h-full w-full bg-brand-bg">
        <h1 className="mx-auto py-10 text-center text-5xl font-bold text-white">
          REAL ESTATE SERVICES
        </h1>
      </div>
      <div className="h-screen w-full bg-brand-bg">
        <div className="flex h-full w-screen flex-row">
          <div className="mx-auto w-1/3 bg-[url(/boutiquebg.webp)] bg-cover bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-70 p-8">
              <h1 className="text-semibold text-center text-5xl text-white">
                Boutique
              </h1>
            </div>
          </div>
          <div className="mx-auto w-1/3 bg-[url(/integrativebg.webp)] bg-cover bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-70 p-8">
              <h1 className="text-semibold text-center text-5xl text-white">
                Integritive
              </h1>
            </div>
          </div>

          <div className="mx-auto w-1/3 bg-[url(/bespokebg.webp)] bg-cover bg-center">
            <div className="h-full w-full bg-brand-bg bg-opacity-70 p-8">
              <h1 className="text-semibold text-center text-5xl text-white">
                Bespoke
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-row bg-brand-bg">
        <div className="w-2/3 bg-[url(/propertybg.webp)] bg-cover bg-center">
          <div className="bg-brand-bg bg-opacity-70"></div>
        </div>
        <div className="flex h-screen w-1/3 flex-col items-center justify-center gap-y-4">
          <h1 className="text-center text-5xl font-bold text-white">
            OUR PROPERTIES
          </h1>
          <p className="text-center text-white">
            The satisfaction and success of our past and current clients testify
            to our commitment and expertise.
          </p>
          <p className="text-center text-white">
            We invite you to review real examples of our case studies here that
            display our accomplishments and the outstanding results we have
            achieved.
          </p>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url(/contactbg.webp)] bg-cover bg-center">
        <div className="flex h-4/5 w-4/5 flex-col items-center justify-center rounded-md bg-brand-bg bg-opacity-90 p-4">
          <h1 className="text-center text-5xl font-bold text-white">
            SEND US A MESSAGE
          </h1>
          <div className="grid h-max w-max grid-cols-2 grid-rows-2">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 text-white">
              <p>First Name:</p>
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 text-white">
              <p>Last Name:</p>
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 text-white">
              <p>Phone:</p>
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 text-white">
              <p>Email:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-max w-screen flex-row justify-center bg-brand-bg">
        <Image src="/logo.png" alt="logo" width={200} height={200} />
        <div className="flex flex-col p-8">
          <h1 className="text-2xl font-semibold text-white">SITE MAP</h1>
          <p className="text-white">PROPERTIES</p>
          <p className="text-white">SERVICES</p>
          <p className="text-white">CONTACT</p>
        </div>
        <div className="flex flex-col p-8">
          <h1 className="text-2xl font-semibold text-white">CONTACT</h1>
          <div className="flex flex-row">
            <Phone color="#FFF" />
            <p className="text-white">+1 (234) 567-8910</p>
          </div>
          <div className="flex flex-row">
            <Mail color="#ffffff" />
            <p className="text-white">EMAIL@BLUESTAR.COM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// import {
//   motion,
//   useAnimate,
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";
// import { Services } from "~/components/services";
// import { About } from "~/components/about";
// import { Contact } from "~/components/contact";
//
// export default function HomePage() {
//   useEffect(() => {
//     if ("scrollRestoration" in history) {
//       history.scrollRestoration = "manual";
//     }
//   }, []);
//
//   const serviceRef = useRef<HTMLDivElement | null>(null);
//   const aboutRef = useRef<HTMLDivElement | null>(null);
//   const contactRef = useRef<HTMLDivElement | null>(null);
//
//   return (
//     <div className="flex h-full w-full flex-col">
//       <div className="flex h-screen w-screen flex-col items-center">
//         <div className="sticky top-0 z-10 flex h-min w-full flex-row items-center justify-center bg-gray-400 drop-shadow-lg">
//           <Image
//             src="/logo.png"
//             alt="logo"
//             width={50}
//             height={100}
//             className="cursor-pointer"
//             onClick={() => {
//               window.location.href = "/";
//             }}
//           />
//
//           <p
//             onClick={() => {
//               serviceRef.current?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className={`z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]`}
//           >
//             Our Services
//           </p>
//           <p
//             onClick={() => {
//               aboutRef.current?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]"
//           >
//             About us
//           </p>
//           <p
//             onClick={() => {
//               contactRef.current?.scrollIntoView({ behavior: "smooth" });
//             }}
//             className="z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]"
//           >
//             Contact Us
//           </p>
//         </div>
//         <div className="flex h-full w-screen flex-col items-center justify-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 2 }}
//             className="text-center text-6xl font-bold text-[#035DB7]"
//           >
//             Bluestar Consulting
//           </motion.h1>
//         </div>
//       </div>
//       <div ref={serviceRef} className="flex h-screen w-screen flex-col">
//         <Services />
//       </div>
//       <div ref={aboutRef} className="flex h-screen w-screen flex-col">
//         <About />
//       </div>
//       <div ref={contactRef} className="flex h-screen w-screen flex-col">
//         <Contact />
//       </div>
//     </div>
//   );
