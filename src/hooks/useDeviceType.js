import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      if (width < 769) {
        setDeviceType("mobile");
      } else if (width > 769 && width < 1025) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    checkDeviceType();

    window.addEventListener("resize", checkDeviceType);

    // Cleanup
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return deviceType;
};

export default useDeviceType;
