import { useState, useEffect } from "react";

export function useIsMobile() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    function handleWindowSizeChange() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return isMobile;
}
