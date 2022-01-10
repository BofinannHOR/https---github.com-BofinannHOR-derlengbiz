import React from "react";
import Image from "next/image";
import share from "../public/share.svg";
import view from "../public/view.svg";
import coin from "../public/coin.svg";
import featuretwo from "../public/featuretwo.svg";

const Gridthree = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-32 mx-0 p-10 20 mt-20">
      <div className="w-scren h-auto lg:w-2/4 lg:mt-0 mt-10">
        {/* image */}
        <div className="">
          <Image src={featuretwo} width={500} height={500}></Image>
        </div>
      </div>
      <div className="w-2/4 h-auto">
        {/* /content */}
        <div className=" flex flex-col text-slate-700 items-center">
          {/*---  */}
          {/* ---- */}
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={share} width={80} height={80}></Image>
            <h3 className="mt-2">ចែករំលែក</h3>
            <p className="text-center mt-3 text-base md:text-base lg:text-lg">
              ចែករំលែកនូវ កន្លែងកំសាន្ត សេវាកម្ម រឺ បទពិសោធន៍ថ្មីៗ
              សំរាប់អ្នកទេសចរផ្សេងទៀត
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={coin} width={80} height={80}></Image>
            <h3 className="mt-2">សន្សំពិន្ទុ</h3>
            <p className="text-center mt-3 text-base md:text-base lg:text-lg">
              កក់កាន់តែច្រើន បានពិន្ទុកាន់តែច្រើន ដើរលេងដោយឥតគិតថ្លៃនៅពេលក្រោយ
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={view} width={80} height={80}></Image>
            <h3 className="mt-2">ចូលមើល</h3>
            <p className="text-center mt-3 text-base md:text-base lg:text-lg">
              ការមើលទំព័រគឺជាចំនួនដងដែលទម្រង់របស់ទំព័រត្រូវបានមើល{" "}
            </p>
          </div>
          {/* ---- */}
          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default Gridthree;
