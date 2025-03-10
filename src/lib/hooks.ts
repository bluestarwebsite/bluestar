import { useState, useEffect } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleWindowSizeChange);
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);
  const isMobile = width <= 768;
  return isMobile;
}
