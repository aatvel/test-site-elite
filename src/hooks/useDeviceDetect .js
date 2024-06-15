import { useState, useEffect } from "react";

const useDeviceDetect = () => {
  const [isTablet, setIsTablet] = useState(
    window.innerWidth <= 768 && window.innerWidth > 320
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 320);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 768 && window.innerWidth > 320);
      setIsMobile(window.innerWidth <= 320);
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isTablet, isMobile, isDesktop };
};

export default useDeviceDetect;
