"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Services } from "~/components/services";
import { About } from "~/components/about";
import { Contact } from "~/components/contact";

export default function HomePage() {
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div className="flex h-screen w-screen flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto my-auto flex flex-col gap-1"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center text-6xl font-bold text-[#035DB7]"
          >
            Bluestar Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            onClick={() => {
              serviceRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
            className="ml-2 cursor-pointer text-xl text-[#035DB7]"
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
            className="ml-2 cursor-pointer text-xl text-[#035DB7]"
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
            className="ml-2 cursor-pointer text-xl text-[#035DB7]"
          >
            Contact Us
          </motion.p>
        </motion.div>
      </div>
      <div ref={serviceRef} className="flex h-screen w-screen flex-col">
        <Services />
      </div>
      <div ref={aboutRef} className="h-[200vh] w-screen flex-row">
        <About />
      </div>
      <div ref={contactRef} className="flex h-screen w-screen flex-col">
        <Contact />
      </div>
    </div>
  );
}
