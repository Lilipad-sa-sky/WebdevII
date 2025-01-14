//IMPORTS
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  //SCROLL TO TOP SO THEY DONT LAND IN THE MIDDLE OF THE PAGE
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); //SCROLLS WHEN ROUTES CAHNGE
  }, [pathname]);

  return null; //USELESS
};

export default ScrollToTop;
//DONE 