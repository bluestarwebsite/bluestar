"use client";
import Link from "next/link";
import { MagnetButton } from "@/components/button";

export default function HomePage() {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <Link href="/home">
        <MagnetButton />
      </Link>
    </div>
  );
}
