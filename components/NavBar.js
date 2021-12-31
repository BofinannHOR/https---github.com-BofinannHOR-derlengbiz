import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../public/derlenglogo2.png";

function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      id="navbar"
      className="py-2 relative flex flex-wrap items-center justify-between px-2 bg-white"
    >
      <div className="container px-2 flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="md:mx-20">
            <nav className="flex flex-row">
              <Link href="/">
                <a className="lg:w-5/6 w-2/4">
                  {/* <h1 className="text-8xl font-medium text-slate-700">
                    ដើរលេង
                  </h1> */}
                  <Image src={logo2} width={250} height={100}></Image>
                </a>
              </Link>
            </nav>
          </div>
          <button
            className="text-slate-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center xl:border-non lg:p-0 p-6" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {" "}
            <Link href="#navbar">
              <a>
                {" "}
                <li className="nav-item hover:scale-105">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className=" text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      ទំព័រដើម
                    </span>
                  </a>
                </li>
              </a>
            </Link>
            <Link href="#sectionone">
              <a>
                {" "}
                <li className="nav-item rounded-xl">
                  <a
                    className="px-3 py-2 flex items-center uppercase  leading-snug text-slate-700 hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      ដើរលេងជាអ្វី?
                    </span>
                  </a>
                </li>
              </a>
            </Link>
            <Link href="#sectiontwo" className="scroll-smooth">
              <a>
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className=" text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      សេវាកម្ម
                    </span>
                  </a>
                </li>
              </a>
            </Link>
            <Link href="#sectionthree">
              <a>
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      របៀបប្រើប្រាស់
                    </span>
                  </a>
                </li>
              </a>
            </Link>{" "}
            <Link href="#sectionfour">
              <a>
                {" "}
                <li className="nav-item rounded-xl">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      ព័ត៌មាន
                    </span>
                  </a>
                </li>
              </a>
            </Link>
            <Link href="#sectionfive">
              <a>
                {" "}
                <li className="nav-item rounded-xl">
                  <a className="px-3 py-2 flex items-center text-xs uppercase  leading-snug text-slate-700 hover:opacity-75">
                    <i className="text-slate-700 opacity-75"></i>
                    <span className="text-lg truncate p-1 text-slate-700 hover:text-blue-800 hover:-translate-y-1 transition ease-in-out delay-150 ">
                      {" "}
                      ទំនាក់ទំនង
                    </span>
                  </a>
                </li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
