import React from "react";
import Image from "next/image";
import money from "../public/money.svg";
import booking from "../public/booking.svg";
import feedback from "../public/feedback.svg";
import featureone from "../public/featureone.svg";

const GridTwo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-32 p-10 20 mt-20">
      <div className="w-scren h-auto lg:w-2/4 lg:mt-0 mt-10 ">
        {/* image */}
        <div className="">
          <Image src={featureone} width={500} height={500}></Image>
        </div>
      </div>
      <div className="w-2/4 h-auto">
        {/* /content */}
        <div className=" flex flex-col text-slate-700 items-center">
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={booking} width={80} height={80}></Image>
            <h3 className="mt-2">កក់</h3>
            <p className="text-center mt-3 text-sm md:text-base lg:text-lg">
              ធ្វើការបញ្ជារទិញប្រកបដោយទំនុកចិត្ត និង ងាយស្រួល
              ទទួលបានលទ្ធផលភ្លាមៗ
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={money} width={80} height={80}></Image>
            <h3 className="mt-2">បង់ប្រាក់</h3>
            <p className="text-center mt-3 text-sm md:text-base lg:text-lg">
              មានច្រើនជំរើសសំរាប់លោកអ្នក ដូចជា តាមធនាគារ ភ្នាក់ងារវេលុយ រឺ
              តាមអនឡាញ{" "}
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className="sizegrid mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={feedback} width={80} height={80}></Image>
            <h3 className="mt-2">ផ្តល់មតិ</h3>
            <p className="text-center mt-3 text-sm md:text-base lg:text-lg">
              វាយតំលៃលើសេវាកម្មរបស់អ្នកផ្គត់ផ្គង
              ដែលអ្នកបានទទួលបទពិសោធន៍ពិតប្រាកដ
            </p>
          </div>
          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default GridTwo;
