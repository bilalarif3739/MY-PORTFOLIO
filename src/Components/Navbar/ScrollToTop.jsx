import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // You can change to "auto" if you want no animation
  }, [pathname]);

  return null;
};

export default ScrollToTop;
