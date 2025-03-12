"use client";
import Image from "next/image";
import Link from "next/link";
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
          <Link
            href={"TEL:+1 (718) 690-1914"}
            className="ml-2 text-sm text-blue-600 underline"
          >
            +1 (718) 690-1914
          </Link>
        </div>
        <div className="flex flex-row">
          <IoMdMail color="#ffffff" />
          <Link
            href={"mailto:team@bluestarholdingsinternational.com"}
            className="ml-2 text-sm text-blue-600 underline"
          >
            Email
          </Link>
        </div>
        <div className="flex flex-row">
          <FaInstagram color="#ffffff" />
          <Link
            href={"https://www.instagram.com/bsre_consulting/"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-hyperlink ml-2 text-sm"
          >
            Instagram
          </Link>
        </div>
        <div className="flex flex-row">
          <FaFacebook color="#ffffff" />
          <Link
            href={"https://www.facebook.com/61572853814002"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-hyperlink ml-2 text-sm"
          >
            Facebook
          </Link>
        </div>
        <div className="flex flex-row">
          <FaXTwitter color="#ffffff" />
          <Link
            href={"https://x.com/BSRE_Consulting"}
            rel="noopener noreferrer"
            target="_blank"
            className="text-hyperlink ml-2 text-sm"
          >
            X, formerly known as Twitter
          </Link>
        </div>
        <div className="flex flex-row">
          <FaLinkedin color="#ffffff" />
          <Link
            href={"https://www.linkedin.com/company/bluestar-consulting"}
            className="text-hyperlink ml-2 text-sm"
            rel="noopener noreferrer"
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}
