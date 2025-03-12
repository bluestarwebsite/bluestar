import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { type ReactNode, useState } from "react";

export default function NavBar({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile?: boolean;
}) {
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
  if (isMobile) {
    return (
      <section className="h-screen w-screen bg-[url(/topsplashbg.webp)] bg-cover bg-center bg-no-repeat">
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-brand-bg bg-opacity-60">
          {children}
        </div>
      </section>
    );
  } else
    return (
      <div className="sticky top-0 z-50">
        <motion.div
          className="absolute top-0 flex h-[20vh] w-screen flex-row items-center justify-center gap-x-4 bg-brand-bg bg-opacity-60"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          animate={{ y: show ? 0 : "-20vh" }}
        >
          {children}
        </motion.div>
      </div>
    );
}
