import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import Buttons from "./Buttons";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];
const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const Clicker = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  const pathname = useLocation();
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6  lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7 5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="" width={190} height={40} />
        </a>
        <nav
          className={`fixed left-0 right-0 bottom-0 bg-n-8 lg:flex lg:static lg:mx-auto lg:bg-transparent top-[5rem] ${
            openNavigation ? "flex" : "hidden"
          }`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={Clicker}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } p px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1 "
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <div className="hidden lg:block">
          <Buttons href="#login">Sign In</Buttons>
        </div>
        <div className="ml-auto lg:hidden" px="px-3">
          <Buttons onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Header;
