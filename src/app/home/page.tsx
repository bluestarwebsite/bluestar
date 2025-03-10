"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useIsMobile } from "@/lib/hooks";

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

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function HomePage() {
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const propertyRef = useRef<HTMLDivElement | null>(null);
  const parent = useRef(null);

  const [show, setShow] = useState(true);
  const [previousScrollY, setPreviousScrollY] = useState(0);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > previousScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setPreviousScrollY(latest);
  });

  const [about, setAbout] = useState("none");
  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  const isMobile = useIsMobile();

  return (
    <div className={`flex w-screen flex-col overflow-x-clip ${tex.className}`}>
      <motion.div
        className="sticky top-0 z-10 flex h-[20vh] w-screen flex-row items-center justify-center gap-x-4 bg-brand-bg bg-opacity-60"
        transition={{ duration: 0.3, ease: "easeInOut" }}
        animate={{ y: show ? 0 : "-20vh" }}
      >
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
      </motion.div>
      <div className="absolute top-0 h-screen w-full bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat"></div>
      <div className="h-[80vh] w-screen"></div>
      <div
        ref={aboutRef}
        className="flex h-screen w-full flex-row bg-[url(/introbg.webp)] bg-cover bg-center bg-no-repeat"
      >
        <div className="flex w-2/3 flex-col justify-center gap-y-2 bg-brand-bg p-20">
          <h1 className={`pb-4 text-4xl font-bold text-white ${tex.className}`}>
            WE ARE BLUESTAR
          </h1>
          <p className="pb-2 text-xl text-white">
            At BlueStar, we specialize in providing unparalleled real estate
            consultancy services, focusing on precise underwriting and valuation
            of assets. With cutting-edge software tools, we deliver maximum
            accuracy in evaluating both commercial and residential properties
            globally.
          </p>
          <p className="pb-2 text-xl text-white">
            Our bespoke approach delivers tailored strategies aligned with your
            investment goals and timelines.
          </p>
          <button
            className="mx-auto rounded-lg bg-brand-blue px-4 py-2 text-white"
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
      <section>
        <Contact title="SEND US A MESSAGE" ref={contactRef} />
      </section>
      <Footer />
    </div>
  );
}
