import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../public/derlenglogo2.png";

function NavFooter({ fixed }) {
  return (
    <div className="navbar shadow-xl fixed w-full z-10 top-0">
      <nav
        id="navbar"
        className="pt-4 relative flex flex-wrap items-center bg-white"
      >
        {" "}
        <div className="w-full relative flex">
          <nav className="m-auto">
            <Link href="/">
              <a className="">
                <Image src={logo2} width={150} height={55}></Image>
              </a>
            </Link>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default NavFooter;
