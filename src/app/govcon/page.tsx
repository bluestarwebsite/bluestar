"use client";
import localFont from "next/font/local";
import Contact from "@/components/contact";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "@/components/footer";
import { useState } from "react";
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
export default function GovConPage() {
  const isMobile = useIsMobile();
  return (
    <main className={`flex w-screen flex-col overflow-x-clip ${tex.className}`}>
      <section className="h-screen w-screen bg-[url(/govcon.webp)] bg-cover bg-center">
        <div
          className={`flex h-screen w-screen flex-col bg-brand-bg bg-opacity-80 ${isMobile ? "gap-2 p-5" : "gap-8 p-20"}`}
        >
          <div
            className={`flex ${isMobile ? "mt-auto w-full" : "w-[70%]"} flex-col`}
          >
            <h1
              className={`mb-5 ${isMobile ? "text-4xl" : "text-7xl"} font-bold text-white`}
            >
              From Analysis to Execution {isMobile ? <br /> : "-"} Driving
              GovCon Project Success
            </h1>
            <p
              className={`${isMobile ? "text-lg" : "text-2xl"} font-semibold text-brand-gray`}
            >
              Winning government real estate contracts requires bulletproof
              underwriting and compliance. We ensure your financials stand up to
              institutional-level scrutiny—helping your projects cross the
              finish
            </p>
          </div>
          <div
            className={`ml-auto flex ${isMobile ? "mb-auto h-max w-full" : "h-full w-[40%]"} flex-col justify-center`}
          >
            <p className="mb-2 text-xl font-semibold text-white">
              Respond to RFPs with Confidence – Book a Free Consultation Today
            </p>
            <Button
              className={`rounded-lg bg-brand-blue px-8 py-2 text-2xl font-bold text-white ${tex.className}`}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
      <section className={`flex h-max w-screen flex-col bg-[url(/whybg.webp)]`}>
        <div
          className={`flex h-max w-full flex-col bg-brand-bg bg-opacity-80 ${isMobile ? "gap-2 p-5" : "gap-8 p-20"}`}
        >
          <div className="flex flex-col">
            <h1
              className={`mb-5 ${isMobile ? "text-2xl" : "text-center text-5xl"} font-bold text-white`}
            >
              Where Precision Meets Execution
            </h1>
            <h2
              className={`${isMobile ? "text-lg" : "text-center text-2xl"} font-bold text-brand-gray`}
            >
              Why Clients Choose BlueStar
            </h2>
            <p
              className={`${isMobile ? "text-sm" : "text-md mx-auto w-2/3 text-center"} font-semibold text-brand-gray`}
            >
              GovCon real estate demands compliance, intelligence, and strategic
              execution — we deliver all three. From feasibility studies to
              execution oversight, we blend industry expertise with a commitment
              to high standards — delivering insights and strategies that drive
              success.
            </p>
          </div>
          <div
            className={`${isMobile ? "w-full" : "mx-auto"} flex flex-col gap-y-2`}
          >
            <HiddenCard
              title="On-Demand GovCon Experts"
              subtext="We prepare the analysis & documentation you need before you ask."
              text="Bluestar Consulting delivers tailored, data-driven solutions that go beyond standardized reports, offering in-depth market analysis, financial modeling, and execution oversight that aligns with each project’s unique challenges."
            />
            <HiddenCard
              title="Government-Aligned Financial Models"
              subtext="RFP-ready underwriting & feasibility studies tailored for GovCon."
              text="Unlike larger firms that rely on templated solutions, we take a personalized, transparent approach, ensuring that every recommendation is customized to the nuances of your project."
            />
            <HiddenCard
              title="SAM.gov Accredited Partner"
              subtext="Certified to provide third-party validation agencies trust."
              text="Our team’s background spans real estate finance, analytics, and development, allowing us to provide institutional-grade insights while maintaining the flexibility and responsiveness needed. From identifying undervalued opportunities to ensuring regulatory compliance and execution efficiency, our goal is simple: help you make informed decisions, reduce uncertainty, and maximize project success."
            />
            <HiddenCard
              title="Risk Reduction Strategies"
              subtext="Pre-development assessments that flag financial & operational risks early."
              text="With a foundation built on integrity, precision, and collaboration, Bluestar Consulting serves as a trusted North Star, guiding our clients through complex real estate deals."
            />
          </div>
        </div>
      </section>
      <section
        className={`flex h-max w-screen ${isMobile ? "flex-col gap-2 p-5" : "flex-row gap-8 p-20"}`}
      >
        <div className={`flex ${isMobile ? "" : "w-1/2 gap-8"} flex-col`}>
          <div className="flex flex-col">
            <h1
              className={`${isMobile ? "text-2xl" : "mb-5 text-5xl"} font-bold text-white`}
            >
              Tailored GovCon Solutions
            </h1>
            <h2
              className={`${isMobile ? "mb-6 text-lg" : "text-2xl"} font-bold text-brand-gray`}
            >
              Precision & Compliance at Every Step
            </h2>
          </div>
          <div className="flex flex-col gap-y-2 text-brand-blue">
            <h1 className={`${isMobile ? "text-md" : "text-xl"} font-semibold`}>
              Market Analysis & Evaluation
            </h1>
            <p
              className={`ml-4 ${isMobile ? "text-sm" : "text-md"} text-brand-gray`}
            >
              Data-driven valuations and feasibility studies to strengthen RFP
              applications.
            </p>
            <h1 className={`${isMobile ? "text-md" : "text-xl"} font-semibold`}>
              Financial Modeling & Risk Assessment{" "}
            </h1>
            <p
              className={`ml-4 ${isMobile ? "text-sm" : "text-md"} text-brand-gray`}
            >
              Identify potential risks before agencies do.
            </p>
            <h1 className={`${isMobile ? "text-md" : "text-xl"} font-semibold`}>
              GovCon Compliance & Advisory{" "}
            </h1>
            <p
              className={`ml-4 ${isMobile ? "text-sm" : "text-md"} text-brand-gray`}
            >
              Ensure contracts meet federal regulations without financial
              surprises.
            </p>
          </div>
        </div>
        <div
          className={`my-auto flex h-max ${isMobile ? "w-full" : "w-1/2"} flex-col`}
        >
          <h1
            className={`${isMobile ? "mb-2 text-2xl" : "mb-7 text-4xl"} text-center font-bold text-brand-blue`}
          >
            Need GovCon Support?
            <br />
            Let’s Talk Today!
          </h1>
          <Button className="mx-auto bg-brand-blue">Contact Us!</Button>
        </div>
      </section>
      <section>
        <Contact title="Need Advisory for Your GovCon Deal? Let’s Talk!" />
      </section>
      <Footer />
    </main>
  );
}
//import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function HiddenCard({
  title,
  subtext,
  text,
}: {
  title: string;
  subtext: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);
  const [animate] = useAutoAnimate();
  return (
    <div
      className="w-[40vw] rounded-lg border border-white px-4 py-2"
      ref={animate}
    >
      <h1 className="text-lg font-bold text-white">{title}</h1>
      <p className="text-md font-medium text-brand-gray">{subtext}</p>
      {!open ? (
        <div
          className="flex cursor-pointer flex-row justify-self-end"
          onClick={() => setOpen(true)}
        >
          <p className="text-sm text-brand-blue">Read More</p>
          <ChevronDown color="#0e78bd" />
        </div>
      ) : (
        <>
          <p className="text-semibold text-white">{text}</p>
          <div
            className="flex cursor-pointer flex-row justify-self-end"
            onClick={() => setOpen(false)}
          >
            <p className="text-sm text-brand-blue">Close</p>
            <ChevronUp color="#0e78bd" />
          </div>
        </>
      )}
    </div>
  );
}
