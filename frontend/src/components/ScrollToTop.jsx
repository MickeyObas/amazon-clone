import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
    window.scrollTo(0, 0); // Scroll to top when location changes
  }, [location]);

  return null;
};

export default ScrollToTop;
