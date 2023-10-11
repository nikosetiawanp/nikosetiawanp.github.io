import { Dialog } from "@headlessui/react";
import { useState } from "react";
import Signature from "../assets/signature.svg";
import Image from "next/image";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="lg:hidden" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* SIDEBAR */}
      {isOpen && (
        <div
          className={`bg-black/50 fixed right-0 top-0 h-screen flex transition-all duration-1000 ${
            isOpen ? "w-screen" : "w-0"
          }`}
        >
          <div
            className={`bg-[#151515] flex flex-col gap-4 py-8 ${
              isOpen ? "px-8 w-[70%]" : "py-0 w-0"
            } transition-all duration-500`}
          >
            {/* ARROW */}
            <button onClick={() => setIsOpen(false)} className="mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <a
              onClick={() => setIsOpen(false)}
              href="#about"
              className="hover:text-[#FFC727]"
            >
              About
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#skills"
              className="hover:text-[#FFC727]"
            >
              Skills
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#projects"
              className="hover:text-[#FFC727]"
            >
              Projects
            </a>
            <a
              onClick={() => setIsOpen(false)}
              href="#education"
              className="hover:text-[#FFC727]"
            >
              Education & Experiences
            </a>
            {/* <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="hover:text-[#FFC727]"
            >
              Contact
            </a> */}
            <Image
              src={Signature}
              alt=""
              className="h-[50px] lg:block mt-auto w-full"
            />
          </div>
        </div>
      )}
    </>
    // <div>
    //   {/* HAMBURGER */}
    //   <button>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={1.5}
    //       stroke="currentColor"
    //       className="w-6 h-6"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //       />
    //     </svg>
    //   </button>
    // </div>
  );
}
