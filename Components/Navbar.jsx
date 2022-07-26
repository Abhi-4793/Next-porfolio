import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navbg, setNavbg] = useState("#D3D3D3");
  const [linkcolor, setLinkcolor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Watchlist" || router.asPath === "/footballApp") {
      setNavbg("transparent");
      setLinkcolor("#D3D3D3");
    } else {
      setNavbg("#D3D3D3");
      setLinkcolor("#1f2937");
    }
  }, [router]);

  const controlNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleshadow);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${navbg}` }}
      className={
        shadow
          ? "fixed w-full h-30 shadow-xl z-[100]"
          : "fixed w-full h-30 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="https://i.imgur.com/wnOK5Ks.png"
            width="120"
            height="120"
            alt="/"
          />
        </Link>

        <div>
          <ul style={{ color: `${linkcolor}` }} className="hidden md:flex ">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={controlNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "  fixed left-0 top-0 w-[60%] sm:w-[45%] h-screen bg-[#D3D3D3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="https://i.imgur.com/wnOK5Ks.png"
                  width="100"
                  height="100"
                  alt="/"
                />
              </Link>
              <div
                onClick={controlNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's Build Something Awesome{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  HOME
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="py-20">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <a href="https://www.linkedin.com/in/abhinav-krishna-singh-0ab67a128/">
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <a href="https://github.com/Abhi-4793">
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <a href="mailto:abhinavkrishnapy2@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3 hover:scale-105 ease-in duration-300">
                  <a href="https://www.instagram.com/abhi_krish_singh/?hl=en">
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
