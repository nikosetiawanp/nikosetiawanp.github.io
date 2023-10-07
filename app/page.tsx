"use client";

import Hero from "../assets/hero.svg";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

import HtmlLogo from "../assets/html.svg";
import TailwindLogo from "../assets/tailwind.svg";
import SassLogo from "../assets/sass.svg";
import JsLogo from "../assets/javascript.svg";
import TsLogo from "../assets/typescript.svg";
import ReactLogo from "../assets/react.svg";
import NextLogo from "../assets/next.svg";
import NodeLogo from "../assets/node.svg";
import GitLogo from "../assets/git.svg";
import VscodeLogo from "../assets/vscode.svg";
import MuiLogo from "../assets/mui.svg";
import FigmaLogo from "../assets/figma.svg";
import Signature from "../assets/signature.svg";

import GithubLogo from "../assets/github.svg";
import LinkedinLogo from "../assets/linkedin.svg";

import Kanban from "../images/kanban.png";
import Feedback from "../images/feedback.png";
import Tabs from "@/components/Tabs";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <main className="flex h-scroll w-screen flex-col items-center justify-between px-24 gap-24 bg-[#151515]">
      <nav
        className={`w-screen fixed top-0 bg-[#151515] flex justify-between items-center gap-4 h-[80px] py-16 px-24 z-50 transition-opacity duration-1000 ease-linear ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src={Signature} alt="" className="" />
        <div className="flex gap-8">
          <a href="https://github.com/nikosetiawanp">
            <Image className="w-[50px] h-[50px]" src={GithubLogo} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/nikosetiawanp/">
            <Image className="w-[50px] h-[50px]" src={LinkedinLogo} alt="" />
          </a>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="grid grid-cols-2 grid-rows-1 w-full max-w-[1440px] h-screen">
        {/* LEFT */}
        <div
          className={`col-span-1 flex flex-col justify-center items-start gap-8 transition-opacity duration-1000 ease-linear pr-8 ${
            loaded ? "opacity-100" : "opacity-0"
          } `}
        >
          <h1 className="text-[64px] text-white font-bold leading-tight">
            Hi, I&apos;m Niko,{" "}
            <b className="text-[#FFC727]">Front End Developer</b>
          </h1>
          <p className="text-[20px]">
            A frontend developer specializing in user-friendly websites. I
            transform designs into responsive web experiences. Let&apos;s
            connect and bring your web vision to life!
          </p>
          <span className="border border-[#FFC727] text-[#FFC727] px-4 py-2 rounded-full text-[18px] flex gap-4 items-center">
            <div className="w-3 h-3">
              <div className="bg-[#FFC727] w-3 h-3 rounded-full animate-ping absolute"></div>
              <div className="bg-[#FFC727] w-3 h-3 rounded-full absolute"></div>
            </div>
            Open for hire
          </span>
        </div>
        {/* RIGHT */}
        <div className="col-span-1 flex justify-center items-center">
          <Image src={Hero} alt="" className="" />
        </div>
      </section>

      {/* ABOUT */}
      {/* <section className="grid grid-cols-2 w-full max-w-[1440px] h-screen">
        <div className="flex items-center justify-center">
          <h1 className="text-[64px] text-white font-bold leading-tight">
            My <b className="text-[#FFC727]">Mission</b>
          </h1>
        </div>
        <div className="flex items-center">
          <p className="text-[20px]">
            My mission is to create digital spaces that not only look great but
            also function flawlessly on all devices, providing seamless user
            experiences. I&apos;m always exploring new web technologies and
            design trends to stay at the forefront of the ever-evolving web
            development landscape.
          </p>
        </div>
      </section> */}

      {/* SKILLS */}
      <section
        className={`flex flex-col justify-center items-center w-full max-w-[1440px] h-screen transition-opacity duration-1000 ease-linear ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-[64px] text-[#FFC727] font-bold leading-tight mb-8">
          Skills
        </h1>
        <p className="max-w-[768px] text-center mb-16">
          As a frontend developer, I possess a versatile skill set focused on
          creating visually appealing, user-friendly, and responsive web
          interfaces. Please visit my{" "}
          <a
            href="https://www.linkedin.com/in/nikosetiawanp/"
            className="text-[#FFC727]"
          >
            Linkedin
          </a>{" "}
          for details.
        </p>
        {/* SKILLS CONTAINER */}
        <div className="w-full flex flex-wrap justify-center items-center gap-12 max-w-[768px] mb-16">
          {/* HTML */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={HtmlLogo} alt="" className="" />
            <span className="font-medium text-[18px]">HTML5</span>
          </div>

          {/* Tailwind */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={TailwindLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Tailwind</span>
          </div>

          {/* Sass */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={SassLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Sass</span>
          </div>

          {/* Mui */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={MuiLogo} alt="" className="" />
            <span className="font-medium text-[18px]">MUI</span>
          </div>

          {/* Js */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={JsLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Javascript</span>
          </div>

          {/* Ts */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={TsLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Typescript</span>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-12 max-w-[768px]">
          {" "}
          {/* React */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={ReactLogo} alt="" className="" />
            <span className="font-medium text-[18px]">React JS</span>
          </div>
          {/* Node */}
          <div className="w-24 h-24 flex flex-col items-center gap-2">
            <Image src={NodeLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Node JS</span>
          </div>
          {/* Git */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={GitLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Git</span>
          </div>
          {/* Vscode */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={VscodeLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Vscode</span>
          </div>
          {/* Figma */}
          <div className="w-20 h-20 flex flex-col items-center gap-2">
            <Image src={FigmaLogo} alt="" className="" />
            <span className="font-medium text-[18px]">Figma</span>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section
        className={`flex flex-col justify-center items-center w-full min-h-screen max-w-[1440px] h-auto transition-opacity duration-1000 ease-linear ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-[64px] text-[#FFC727] font-bold">My Works</h1>
        <p className="max-w-[768px] text-center mb-16">
          To view more works of mine, please visit my{" "}
          <a href="https://github.com/nikosetiawanp" className="text-[#FFC727]">
            Github
          </a>{" "}
          for details.
        </p>
        <div className="grid grid-cols-[2fr,1fr] w-full">
          <Image className="" src={Kanban} alt="" />
          <div className="flex flex-col justify-center gap-8">
            <span className="text-[#C7C7C7] -mb-6">GROUP PROJECT</span>
            <h3 className="text-[36px] font-bold">
              Kanban Task Management App
            </h3>
            <p>
              This is group project about task management app, to manage project
              tasks.
            </p>
            <p>
              <b>Role:</b> Lead Front End
            </p>
            <p>
              <b>Built with:</b> Next JS, Tailwind CSS, Supabase
            </p>
            <a
              className="text-[#FFC727] border border-[#FFC727] w-fit px-4 py-2 rounded-full hover:bg-[#FFC727] hover:text-[#151515] transition-colors duration-150"
              href="https://github.com/nikosetiawanp/kanban-web-app"
            >
              View Project Repository
            </a>
          </div>
        </div>

        <div className="grid grid-cols-[2fr,1fr] w-full">
          <Image className="" src={Feedback} alt="" />
          <div className="flex flex-col justify-center gap-8">
            <span className="text-[#C7C7C7] -mb-6">INDIVIDUAL PROJECT</span>
            <h3 className="text-[36px] font-bold">Product Review App</h3>
            <p>
              Personal project about product review app, to create product
              review for ongoing project.
            </p>
            <p>
              <b>Role:</b> Front End Developer
            </p>
            <p>
              <b>Built with:</b> React JS, SASS, Supabase
            </p>
            <a
              className="text-[#FFC727] border border-[#FFC727] w-fit px-4 py-2 rounded-full hover:bg-[#FFC727] hover:text-[#151515] transition-colors duration-150"
              href="https://github.com/nikosetiawanp/product-feedback-app"
            >
              View Project Repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
