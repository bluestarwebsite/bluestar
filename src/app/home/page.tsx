"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { About } from "~/components/about";

export default function HomePage() {
  return (
    <div>
      <div className="flex h-screen w-screen flex-col">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="mx-auto my-auto text-6xl font-bold text-white"
        >
          Welcome to Bluestar
        </motion.h1>
      </div>
      <div className="flex h-screen w-screen flex-col">
        <h1 className="mx-auto my-auto text-6xl font-bold text-white">
          Services
        </h1>
      </div>
      <div className="h-[200vh] w-screen flex-row">
        <About />
      </div>
      <div className="flex h-screen w-screen flex-col">
        <h1 className="mx-auto my-auto text-6xl font-bold text-white">
          Contact Us
        </h1>
      </div>
    </div>
  );
}
