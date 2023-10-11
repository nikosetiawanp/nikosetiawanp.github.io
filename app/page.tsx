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

import ArrowDownTrayIcon from "@heroicons/react/20/solid";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <main className="flex h-scroll w-screen flex-col items-center justify-between px-8 gap-24 bg-[#151515]">
      {/* <div className="w-screen h-[80px]"> */}
      <nav
        className={`w-screen fixed top-0 bg-[#151515] flex justify-center lg:justify-between items-center gap-4 h-[80px] z-50 transition-opacity duration-1000 ease-linear lg:px-8`}
      >
        <div
          className={`flex justify-center lg:justify-between items-center gap-4 w-full ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image src={Signature} alt="" className="h-[50px]" />
          <div className="gap-6 hidden lg:flex">
            <a href="#about" className="hover:text-[#FFC727]">
              About
            </a>
            <a href="#skills" className="hover:text-[#FFC727]">
              Skills
            </a>
            <a href="#projects" className="hover:text-[#FFC727]">
              Projects
            </a>
            <a href="#education" className="hover:text-[#FFC727]">
              Education & Experiences
            </a>
          </div>
          <div className="hidden lg:flex gap-8">
            <a href="https://github.com/nikosetiawanp">
              <Image className="w-[40px] h-[40px]" src={GithubLogo} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/nikosetiawanp/">
              <Image className="w-[40px] h-[40px]" src={LinkedinLogo} alt="" />
            </a>
          </div>
        </div>
      </nav>
      {/* </div> */}

      {/* HERO SECTION */}
      <section
        id="about"
        className="flex flex-col lg:flex-row-reverse items-center w-full max-w-[1440px] mt-[100px] lg:px-12"
      >
        {/* IMAGE */}
        <div className="col-span-1 flex justify-center items-center w-full">
          <Image src={Hero} alt="" className="" />
        </div>
        {/* INFO */}
        <div
          className={`gap-4 flex flex-col justify-center items-center transition-opacity duration-1000 ease-linear lg:items-start ${
            loaded ? "opacity-100" : "opacity-0"
          } `}
        >
          <p className="text-[24px]">Hi I&apos;m Niko, a</p>
          <h1 className="text-[48px] text-white font-bold leading-tight text-center">
            <b className="text-[#FFC727]">Front End Developer</b>
          </h1>
          <p className="text-center lg:text-left">
            A frontend developer specializing in user-friendly websites. I
            transform designs into responsive web experiences. Let&apos;s
            connect and bring your web vision to life!
          </p>
          <a
            download="cv"
            href="/cv.pdf"
            className="border border-[#FFC727] text-[#FFC727] px-4 py-2 rounded-full hover:bg-[#FFC727] hover:text-[#151515] transition-all"
            // download={"cv.pdf"}
          >
            Download my CV
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className={`flex flex-col justify-center items-center w-full max-w-[1440px] transition-opacity duration-1000 ease-linear ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-[48px] text-[#FFC727] font-bold leading-tight mb-8">
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
          {/* <div className="w-full flex flex-wrap justify-center items-center gap-12 max-w-[768px]"> */}{" "}
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

        {/* </div> */}
      </section>

      {/* PROJECTS */}
      <section
        className={`flex flex-col justify-center items-center w-full min-h-screen max-w-[1440px] h-auto transition-opacity duration-1000 ease-linear ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 id="projects" className="text-[48px] text-[#FFC727] font-bold">
          Projects
        </h1>
        <span className="max-w-[768px] text-center mb-16">
          To view more of my projects, please visit my{" "}
          <a href="https://github.com/nikosetiawanp" className="text-[#FFC727]">
            Github
          </a>{" "}
          for details.
        </span>

        {/* KANBAN */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[1fr,1fr] w-full mb-16">
          <Image className="" src={Kanban} alt="" />
          <div className="flex flex-col items-center lg:items-start justify-center gap-8">
            <span className="text-[#C7C7C7] -mb-6 text-center">
              GROUP PROJECT
            </span>
            <h3 className="text-[30px] font-bold text-center">
              Kanban Task Management App
            </h3>
            <p className="text-center">
              This is group project about task management app, to manage project
              tasks.
            </p>
            <p className="text-center">
              <b>Role:</b> Lead Front End Developer
            </p>
            <p className="text-center">
              <b>Built with:</b> Next JS, Tailwind CSS, Supabase
            </p>
            <a
              className="text-[#FFC727] border border-[#FFC727] w-fit px-4 py-2 rounded-full hover:bg-[#FFC727] hover:text-[#151515] transition-colors duration-150 text-center"
              href="https://github.com/nikosetiawanp/kanban-web-app"
            >
              View Project Repository
            </a>
          </div>
        </div>

        {/* FEEDBACK APP */}
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[1fr,1fr] w-full">
          <Image src={Feedback} alt="" />
          <div className="flex flex-col items-center lg:items-start justify-center gap-8">
            <span className="text-[#C7C7C7] -mb-6">INDIVIDUAL PROJECT</span>
            <h3 className="text-[30px] font-bold">Product Review App</h3>
            <p className="text-center">
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
        {/* <h1>Edu</h1> */}
      </section>
      {/* EDUCATION */}
      <section className="min-h-screen flex flex-col justify-center items-center mb-16 lg:px-8">
        <h1
          id="education"
          className="text-[48px] text-[#FFC727] font-bold leading-tight mb-16 text-center"
        >
          Education & Experiences
        </h1>
        {/* GRID CONTAINER */}
        <div className="flex flex-col items-center lg:grid grid-cols-2 gap-28">
          {/* REVOU */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* LEFT */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-[#FFC727]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-start">
              <p>2023</p>
              <h2 className="text-[24px] text-center">
                Fullstack Software Engineering
              </h2>
              <p className="text-white/70">RevoU</p>
            </div>
          </div>

          {/* UNIKA */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* LEFT */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-[#FFC727]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-start">
              <p>2016-2020</p>
              <h2 className="text-[24px] text-center">Architecture & Design</h2>
              <p className="text-white/70">UNIKA Soegijapranata</p>
            </div>
          </div>

          {/* VIDE */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* LEFT */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-[#FFC727]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>

            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-start">
              <p>2021</p>
              <h2 className="text-[24px] text-center">Architect</h2>
              <p className="text-white/70 mb-4">Vide Architecture Studio</p>
              <p className="text-white/70 lg:text-left text-center">
                Handled 6 architecture and interior projects simultaneously with
                tight deadlines.
              </p>
            </div>
          </div>

          {/* FREELANCE */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* LEFT */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-[#FFC727]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>

            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-start">
              <p>2021-2023</p>
              <h2 className="text-[24px] text-center">
                Architect & Graphic Designer
              </h2>
              <p className="text-white/70 mb-4">Freelance</p>
              <p className="text-white/70 lg:text-left text-center">
                Handled 4 architecture and interior design projects and 3 brand
                guide projects with minimum supervision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
