"use client";
import localFont from "next/font/local";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";
import Link from "next/link";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useIsMobile } from "@/lib/hooks";
import NavBar from "@/components/navbar";
import { HoverButton, InactiveHover } from "@/components/button";

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
  const industryRef = useRef<HTMLDivElement | null>(null);
  const propertyRef = useRef<HTMLDivElement | null>(null);
  const bluestarRef = useRef<HTMLDivElement | null>(null);
  const parent = useRef(null);
  const [about, setAbout] = useState("none");

  useEffect(() => {
    if (parent.current) {
      autoAnimate(parent.current);
    }
  }, [parent]);

  const isMobile = useIsMobile();

  return (
    <div className={`flex w-screen flex-col overflow-x-clip ${tex.className}`}>
      <NavBar isMobile={isMobile}>
        {isMobile ? (
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={200} />
          </Link>
        ) : (
          ""
        )}
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
            industryRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          INDUSTRY
        </p>
        <p
          className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            serviceRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          SERVICES
        </p>
        {isMobile ? (
          ""
        ) : (
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={200} />
          </Link>
        )}
        <p
          className={`cursor-pointer text-2xl font-semibold text-white ${tex.className}`}
          onClick={() => {
            bluestarRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          BLUESTAR
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
      </NavBar>
      {isMobile ? (
        ""
      ) : (
        <div className="h-screen w-screen bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat" />
      )}
      <section
        ref={aboutRef}
        className={`${isMobile ? "h-max" : "h-screen"} w-screen bg-[url(/introbg.webp)] bg-cover bg-center bg-no-repeat`}
      >
        <div
          className={`flex h-full w-full ${isMobile ? "flex-col" : "flex-row"} bg-brand-bg bg-opacity-80`}
        >
          <div
            className={`flex ${isMobile ? "w-full p-8" : "w-2/3 p-20"} flex-col justify-center gap-y-2 bg-brand-bg`}
          >
            <h1
              className={`pb-4 text-4xl font-bold text-white ${tex.className}`}
            >
              WE ARE BLUESTAR
            </h1>
            <p className="pb-2 text-xl text-white">
              At BlueStar, we specialize in providing unparalleled real estate
              consultancy services, focusing on precise underwriting and
              valuation of assets. With cutting-edge software tools, we deliver
              maximum accuracy in evaluating both commercial and residential
              properties globally.
            </p>
            <p className="pb-2 text-xl text-white">
              Our bespoke approach delivers tailored strategies aligned with
              your investment goals and timelines.
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
            className={`flex ${isMobile ? "w-full" : "w-1/3"} h-full flex-col justify-center gap-y-4 p-16`}
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
                Based in the vibrant city of Miami, Florida, BlueStar operates
                on a global scale, catering to clients with diverse needs. Our
                team is multilingual proficient, allowing us to effectively
                communicate and cater to clients worldwide.
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
                Our team boasts an exceptional academic background, almost all
                of our members holding specialized post-graduate degrees from
                top-five institutions such as the Florida International
                University College of Business. Well-rounded with our education
                and intentional with our mission, BlueStar infuses its
                innovative and unique perspectives into each project, proposal,
                and venture.
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
                and craft creative strategies that are as detailed and precise
                as they are innovative.
              </p>
            ) : null}
          </div>
        </div>
      </section>
      <section
        ref={industryRef}
        className={`flex h-max w-screen flex-col ${isMobile ? "gap-2 p-5" : "gap-8 p-20"}`}
      >
        <div className={`flex flex-col`}>
          <h1 className={`mx-auto mb-5 text-5xl font-bold text-white`}>
            Find the Right Solution for Your Industry
          </h1>
          <p className={`mx-auto text-xl font-semibold text-brand-gray`}>
            Customized Strategies for Your Success
          </p>
        </div>
        <div
          className={`${isMobile ? "flex-col" : "h-[30vh] flex-row"} mx-auto flex justify-center`}
        >
          <InactiveHover
            title="Real Estate Developers"
            desc="Tailored insights, feasibility & financial modeling for your next project"
            link="/redev"
            img="boutiquebg.webp"
          />
          <HoverButton
            title="GovCon"
            desc="Compliant underwriting & execution support for government contracts"
            link="/govcon"
            img="bespokebg.webp"
          />
          <InactiveHover
            title="Commercial Brokers"
            desc="Market data & institutional-grade valuations for your clients’ deals"
            link="/commercial"
            img="integrativebg.webp"
          />
          <InactiveHover
            title="Private Equity Investors"
            desc="Optimized portfolio strategies & risk analysis for CRE investments"
            link="/privequi"
            img="topsplashbg.webp"
          />
        </div>
      </section>
      <section ref={serviceRef}>
        <div className="h-full w-full bg-brand-bg">
          <h1
            className={`mx-auto py-10 text-center text-5xl font-bold text-white`}
          >
            REAL ESTATE SERVICES
          </h1>
        </div>
        <div className="h-max w-full bg-brand-bg">
          <div
            className={`flex h-full w-screen ${isMobile ? "flex-col" : "flex-row"}`}
          >
            <div
              className={`${isMobile ? "" : "w-1/3"} bg-[url(/boutiquebg.webp)] bg-cover bg-center`}
            >
              <div
                className={`group h-full w-full bg-brand-bg ${isMobile ? "bg-opacity-90" : "bg-opacity-70"} p-8 hover:bg-opacity-90 hover:duration-500`}
              >
                <h1
                  className={`text-bold text-center text-5xl text-white ${tex.className}`}
                >
                  Boutique
                </h1>
                <p
                  className={`pt-16 text-xl text-white ${isMobile ? "opacity-100" : "opacity-0"} group-hover:opacity-100 group-hover:duration-500`}
                >
                  Where traditional brokers often rely on arbitrary comparisons,
                  we conduct thorough, in-depth analyses, making sure you have
                  all vital details about potential investments, from
                  construction history to market dynamics. Our expertise extends
                  to assisting with the nuanced tax treatment of real estate,
                  covering every type and location. When you work with BlueStar,
                  you gain access to comprehensive insights that empower you to
                  make informed, strategic investment decisions.
                </p>
              </div>
            </div>
            <div
              className={`${isMobile ? "" : "w-1/3"} bg-[url(/integrativebg.webp)] bg-center`}
            >
              <div
                className={`group h-full w-full bg-brand-bg ${isMobile ? "bg-opacity-90" : "bg-opacity-70"} p-8 hover:bg-opacity-90 hover:duration-500`}
              >
                <h1
                  className={`text-bold text-center text-5xl text-white ${tex.className}`}
                >
                  Integrative
                </h1>
                <p
                  className={`pt-16 text-xl text-white ${isMobile ? "opacity-100" : "opacity-0"} group-hover:opacity-100 group-hover:duration-500`}
                >
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

            <div
              className={`${isMobile ? "" : "w-1/3"} bg-[url(/bespokebg.webp)] bg-center`}
            >
              <div
                className={`group h-full w-full bg-brand-bg ${isMobile ? "bg-opacity-90" : "bg-opacity-70"} p-8 hover:bg-opacity-90 hover:duration-500`}
              >
                <h1
                  className={`text-bold text-center text-5xl text-white ${tex.className}`}
                >
                  Bespoke
                </h1>
                <p
                  className={`pt-16 text-xl text-white ${isMobile ? "opacity-100" : "opacity-0"} group-hover:opacity-100 group-hover:duration-500`}
                >
                  Our bespoke approach delivers tailored strategies aligned with
                  your investment goals and timelines. We work closely with you
                  to understand your unique needs and develop a customized
                  investment plan that is both efficient and profitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-max w-screen p-14" ref={bluestarRef}>
        <h1 className="mb-4 text-5xl text-white">Why Bluestar Consulting?</h1>
        <h2 className="mb-4 text-balance text-xl text-brand-gray">
          Collaborating with Bluestar Consulting means gaining a trusted partner
          that integrates academic rigor, detailed financial modeling, and
          hands-on support to push your projects across the finish line. We
          become an extension of your team—managing the analysis and tasks you’d
          rather delegate—so you can focus on shaping visionary deals and
          driving portfolio growth.
        </h2>
        <div
          className={` ${isMobile ? "flex-col" : "my-20 flex-row"} flex gap-4 text-pretty`}
        >
          <div className="flex flex-col">
            <h1 className="pb-4 text-center text-2xl text-brand-blue">
              Data-Driven Assurance
            </h1>
            <p className="text-center text-brand-gray">
              Monte Carlo simulations, sensitivity analyses, and precise
              underwriting highlight potential pitfalls and opportunities,
              giving you confidence in every decision.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pb-4 text-center text-2xl text-brand-blue">
              Tailored Solutions
            </h1>
            <p className="text-center text-brand-gray">
              We adapt our approach to your unique goals and “buy box,”
              delivering strategies that reflect your vision rather than fitting
              you into a generic template.
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="pb-4 text-center text-2xl text-brand-blue">
              Strategic Execution & Support
            </h1>
            <p className="text-center text-brand-gray">
              From transparent communication to consistent follow-through, we
              serve as a long-term partner, helping you streamline processes,
              reduce risk, and realize profitable outcomes.
            </p>
          </div>
        </div>
      </section>
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
      <section
        ref={propertyRef}
        className="flex h-max w-screen flex-row bg-brand-bg"
      >
        {isMobile ? (
          <></>
        ) : (
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
        )}
        <div
          className={`flex h-full ${isMobile ? "w-full" : "my-auto w-1/3"} flex-col gap-y-4 p-8`}
        >
          <h1
            className={`${isMobile ? "text-center" : ""} text-5xl font-bold text-white`}
          >
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
      </section>
      <section ref={contactRef}>
        <h1
          className={`mx-auto py-10 text-center text-5xl font-bold text-white`}
        >
          Contact Us
        </h1>
        <Contact title="Book a Free Strategic Call Today" />
      </section>
      <Footer />
    </div>
  );
}
