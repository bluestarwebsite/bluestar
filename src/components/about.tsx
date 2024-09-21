import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

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
            <p className="ml-8 text-white">
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
            <p className="mr-8 text-white">
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
  return <JustinSticky />;
}
