"use client";

import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { Services } from "~/components/services";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";

export default function HomePage() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const h1Ref = useRef<HTMLDivElement | null>(null);

  const divRef = useRef<HTMLDivElement | null>(null);
  const contactLink = useRef<HTMLParagraphElement | null>(null);
  const serviceLink = useRef<HTMLParagraphElement | null>(null);
  const aboutLink = useRef<HTMLParagraphElement | null>(null);
  const linkDivRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [h1Left, setH1Left] = useState(0);
  const [contact, setContact] = useState(0);
  const [serviceWidth, setServiceWidth] = useState(0);
  const [serviceHeight, setServiceHeight] = useState(0);
  const [aboutWidth, setAboutWidth] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [logoWidth, setLogoWidth] = useState(0);

  const [navHeight, setNavHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["end center", "start start"],
  });

  const serviceX = useTransform(scrollYProgress, [0, 0.25], [h1Left, 0]);
  const aboutX = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [h1Left - serviceWidth - 32, 0],
  );
  const contactX = useTransform(
    scrollYProgress,
    [0.5, 0.75],
    [h1Left - serviceWidth - aboutWidth - 64, 0],
  );
  const aboutY = useTransform(scrollYProgress, [0, 0.25], [serviceHeight, 0]);
  const contactY = useTransform(
    scrollYProgress,
    [0, 0.5],
    [serviceHeight + aboutHeight, 0],
  );
  const navBG = useTransform(scrollYProgress, [0, 1], [0, 0.9]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("x changed to", latest);
  });

  useEffect(() => {
    if (logoRef.current) {
      setLogoWidth(logoRef.current.getBoundingClientRect().right);
    }
    if (h1Ref.current) {
      setH1Left(h1Ref.current.getBoundingClientRect().left - logoWidth);
    }
    if (linkDivRef.current) {
      setContact(linkDivRef.current.getBoundingClientRect().bottom);
      setNavHeight(
        window.innerHeight - linkDivRef.current.getBoundingClientRect().height,
      );
    }
    if (serviceLink.current) {
      setServiceWidth(serviceLink.current.getBoundingClientRect().width);
      setServiceHeight(serviceLink.current.getBoundingClientRect().height);
    }
    if (aboutLink.current) {
      setAboutWidth(aboutLink.current.getBoundingClientRect().width);
      setAboutHeight(aboutLink.current.getBoundingClientRect().height);
    }
    console.log(serviceWidth, serviceHeight, aboutWidth, aboutHeight);
    console.log(scrollYProgress);
  }, [
    logoWidth,
    serviceWidth,
    serviceHeight,
    aboutWidth,
    aboutHeight,
    scrollYProgress,
  ]);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-screen w-screen flex-col items-center justify-end">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-center text-6xl font-bold text-[#035DB7]"
        >
          Bluestar Consulting
        </motion.h1>
      </div>
      <motion.div
        className="sticky top-0 z-10 flex h-min w-full flex-row justify-center bg-gray-400 drop-shadow-lg"
        ref={linkDivRef}
      >
        <motion.img
          src="/logo.png"
          alt="logo"
          width={50}
          height={100}
          className="sticky top-0 cursor-pointer"
          ref={logoRef}
          style={{ opacity: scrollYProgress }}
          onClick={() => {
            window.location.href = "/";
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          onClick={() => {
            serviceRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`sticky top-3 z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]`}
          style={{ x: serviceX }}
          ref={serviceLink}
        >
          Our Services
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          onClick={() => {
            aboutRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="sticky top-3 z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]"
          style={{ x: aboutX, y: aboutY }}
          ref={aboutLink}
        >
          About us
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          onClick={() => {
            contactRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="sticky top-3 z-20 mx-4 h-min w-max cursor-pointer text-xl text-[#035DB7]"
          style={{ x: contactX, y: contactY }}
          ref={contactLink}
        >
          Contact Us
        </motion.p>
      </motion.div>
      <div style={{ height: `calc(100vh - ${contact}px)` }} ref={divRef}></div>
      <div ref={serviceRef} className={`flex h-screen w-screen flex-col`}>
        <Services />
      </div>
      <div ref={aboutRef} className="h-screen w-screen flex-row">
        <About />
      </div>
      <div ref={contactRef} className="flex h-screen w-screen flex-col">
        <Contact />
      </div>
    </div>
  );
}
