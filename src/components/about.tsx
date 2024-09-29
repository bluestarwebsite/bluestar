import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
  useInView,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

const JustinSticky = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const position = useTransform(scrollYProgress, [0, 1], ["-100vh", "100vh"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  return (
    <div className="flex h-[200vh] flex-row overflow-hidden" ref={targetRef}>
      <div className="flex h-[200vh] w-1/2 flex-col">
        <div className="flex h-screen w-full">
          <div className="mx-auto my-auto p-4">
            <Image
              src="/justin.jpg"
              alt="About"
              width={300}
              height={400}
              className="w-min rounded-full"
            />
          </div>
        </div>
        <div className="flex h-screen w-full">
          <div className="mx-auto my-auto p-4">
            <p className="ml-8 text-[#035DB7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
              scelerisque vitae, consequat in, pretium a, enim. Pellentesque
              congue. Ut in risus volutpat libero pharetra tempor. Cras
              vestibulum bibendum augue. Praesent egestas leo in pede. Praesent
              blandit odio eu enim. Pellentesque sed dui ut augue blandit
              sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Aliquam nibh
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="flex h-[200vh] w-1/2 flex-col"
        style={{ y: position }}
      >
        <div className="flex h-screen w-full">
          <div className="mx-auto my-auto p-4">
            <Image
              src="/justin.jpg"
              alt="About"
              width={300}
              height={400}
              className="w-min rounded-full"
            />
          </div>
        </div>
        <div className="flex h-screen w-full items-center justify-center">
          <div className="mx-auto my-auto p-4">
            <p className="mr-8 text-[#035DB7]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
              ligula massa, varius a, semper congue, euismod non, mi. Proin
              porttitor, orci nec nonummy molestie, enim est eleifend mi, non
              fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
              scelerisque vitae, consequat in, pretium a, enim. Pellentesque
              congue. Ut in risus volutpat libero pharetra tempor. Cras
              vestibulum bibendum augue. Praesent egestas leo in pede. Praesent
              blandit odio eu enim. Pellentesque sed dui ut augue blandit
              sodales. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Aliquam nibh
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export function About() {
  return (
    <section className="flex h-screen w-full rounded-md p-8 drop-shadow-lg">
      <div className="my-auto">
        <Reveal>
          <Image
            src="/logo.png"
            alt="About"
            width={300}
            height={400}
            className="w-min rounded-full pb-4"
          />
        </Reveal>
        <Reveal>
          <h1 className="text-bold pb-4 text-4xl text-brand-blue">
            About Bluestar
          </h1>
        </Reveal>
        <Reveal>
          <p className="mx-auto w-1/2 pb-4 text-brand-blue">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim. Pellentesque
            congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum
            bibendum augue. Praesent egestas leo in pede. Praesent blandit odio
            eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia Curae; Aliquam nibh
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-col items-center justify-center sm:flex-row">
            <Stat
              num={45}
              suffix="%"
              subheading="Lorem ipsum dolor sit amet consectetur"
            />
            <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
            <Stat
              num={15.5}
              decimals={1}
              suffix="K+"
              subheading="Lorem ipsum dolor sit amet consectetur"
            />
            <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
            <Stat
              num={20}
              suffix="B+"
              subheading="Lorem ipsum dolor sit amet consectetur"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export const Reveal = ({ children }: { children: JSX.Element }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible").catch((e) => console.log(e));
      slideControls.start("visible").catch((e) => console.log(e));
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} className="relative mx-auto w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
      />
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 1,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="mx-auto flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold text-brand-blue sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center text-brand-blue">{subheading}</p>
    </div>
  );
};
