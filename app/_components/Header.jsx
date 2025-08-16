"use client";

import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import useLanguage from "../_context/useLanguage";
import SwitchLanguage from "./SwitchLanguage";

const social = [
  {
    icon: <FiLinkedin className="text-white text-2xl" />,
    href: "https://www.linkedin.com/in/yossef-weal-39844b289/",
  },
  {
    icon: <FiGithub className="text-white text-2xl" />,
    href: "https://github.com/YOSSEF-WEAL",
  },
  {
    icon: <FaBehance className="text-white text-2xl" />,
    href: "https://www.behance.net/yossefweal",
  },
  {
    icon: <FaWhatsapp className="text-white text-2xl" />,
    href: "https://wa.link/u33dav",
  },
];

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const locale = useLanguage();
  const t = useTranslations();
  const nav = Object.values(t.raw("Header.nav"));

  useEffect(() => {
    function handleScroll() {
      setIsFixed(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath: "polygon(0% 0%, 30% 0%, 100% 80%, 0% 80%)",
          }}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-22 bg-linear-to-tr bg-primary/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>

      <header
        className={`px-3 md:px-10 py-5 fixed z-50 top-0 left-0 w-full h-[100px] flex flex-row items-center justify-center border-b-2 border-white/50 ${
          isFixed ? "bg-bg-body/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div className="max-w-full md:max-w-[1350px] h-full w-full flex flex-row items-center justify-between">
          <div className="w-[20%]">
            <Link href="/">
              <img
                src="/logo.png"
                alt="logo"
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="w-20 flex items-center justify-center"
              />
            </Link>
          </div>

          <ul className="hidden md:flex flex-row items-center gap-2 justify-between">
            {nav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay={index * 200}
                  className="px-4 py-2.5 rounded-full text-[16px] font-semibold text-white transition-colors hover:bg-primary cursor-pointer bg-white/20"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <SwitchLanguage />
          </ul>

          <div className="hidden md:flex flex-row items-center gap-2 justify-end w-[20%]">
            {social.map((item, index) => (
              <a
                data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay={index * 200}
                key={index}
                href={item.href}
                target="_blank"
                className="py-2.5 px-4 rounded-full flex items-center justify-center bg-white/20 text-base text-white transition-colors hover:bg-primary"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <button
            className={`md:hidden flex items-center justify-center w-12 h-12 text-white text-3xl p-2 rounded-full cursor-pointer hover:bg-primary transition-all bg-white/20 ${
              locale === "ar" ? "" : "ml-auto"
            }`}
            onClick={() => setSidebarOpen(true)}
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-bg-body/50 z-50 transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-bg-body z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-4 text-white p-2 rounded-full cursor-pointer hover:bg-primary transition-all bg-white/20 text-2xl"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <HiX />
        </button>

        <div
          className={`w-full px-6 mt-5 flex items-center ${
            locale === "ar" ? "justify-end" : "justify-start"
          }`}
        >
          <Link href="/" onClick={() => setSidebarOpen(false)}>
            <img
              src="/logo.png"
              alt="logo"
              className="w-20 rounded-full drop-shadow-2xl drop-shadow-primary/30"
            />
          </Link>
        </div>

        <ul className="flex flex-col gap-4 mt-10 px-6">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="block px-4 py-2 rounded-full text-white text-center text-lg cursor-pointer hover:bg-primary transition-colors w-full bg-white/10"
                onClick={() => setSidebarOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row flex-wrap items-center justify-center gap-3 px-6 mt-10 w-full">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              className="h-10 w-[47%] p-5 rounded-full flex items-center justify-center bg-white/15 text-white hover:bg-primary transition-colors"
            >
              {item.icon}
            </a>
          ))}
          <div onClick={() => setSidebarOpen(false)} className="mt-3">
            <SwitchLanguage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
