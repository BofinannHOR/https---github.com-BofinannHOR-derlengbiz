import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import nofound from "../public/nofound.svg";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Layout>
      {" "}
      <div className="flex flex-col h-auto m-auto text-slate-700 mt-5">
        <Image src={nofound} width={400} height={400}></Image>
        <div className="m-auto mt-5 text-center p-4">
          <h1 className="text-5xl my-3">សូមអភ័យទោស...</h1>
          <p className="mt-1">រកមិនឃើញទំព័រដែលអ្នកបានស្វែងរកទេ។</p>
        </div>
        <div className="flex flex-row m-auto">
          <Link href="/">
            <a>
              {" "}
              <button
                className=" p-2
           rounded-md mt- bg-pink-500 text-slate-50 hover:bg-pink-600"
              >
                ត្រលប់ទៅទំព័រដើម
              </button>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
