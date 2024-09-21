"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Services } from "~/components/services";
import { About } from "~/components/about";
import { ShiftingContactForm } from "~/components/contact";

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
        <Services />
      </div>
      <div className="h-[200vh] w-screen flex-row">
        <About />
      </div>
      <div className="flex h-screen w-screen flex-col">
        <ShiftingContactForm />
      </div>
    </div>
  );
}
