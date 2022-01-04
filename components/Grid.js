import React from "react";
import Image from "next/image";
import register from "../public/register.svg";
import search from "../public/search.svg";
import random from "../public/random.svg";
import feature1 from "../public/feature1.svg";

const Grid = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:mx-32 mx-0 p-10 20 mt-20">
      <div className="w-scren h-auto lg:w-2/4 lg:mt-0 mt-10">
        {/* image */}
        <div className="">
          <Image src={feature1} width={500} height={500}></Image>
        </div>
      </div>
      <div className="w-2/4 h-auto">
        {/* /content */}
        <div className=" flex flex-col text-gray-700 items-center">
          {/*---  */}
          <div className="mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50">
            <Image src={register}></Image>
            <h3 className="mt-2">ចុះឈ្មោះ</h3>
            <p className="text-center mt-3">
              វីធីងាយៗ គ្រាន់តែអ្នកចុះឈ្មោះតាមរយះបណ្តាញសង្គម រឺ
              តាមអ៊ីមែលដោយឥតគិតថ្លៃ
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className=" mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={search}></Image>
            <h3 className="mt-2">ស្វែងរក</h3>
            <p className="text-center mt-3">
              ជ្រើសរើសសេវាកម្មដ៏សម្បូរបែប ពីអ្នកផ្គត់ផ្គង់ដែលមានបទពិសោធន៍ និង
              ទុកចិត្តបាន
            </p>
          </div>
          {/* ---- */}
          {/*---  */}
          <div className="mt-6 flex flex-col items-center w-96 h-52 rounded-xl p-4 bg-gray-50 ">
            <Image src={random}></Image>
            <h3 className="mt-2">ប្រៀបធៀប</h3>
            <p className="text-center mt-3">
              ប្រៀបធៀប និង ជ្រើសរើស នូវសេវាកម្មដែលអ្នកពេញចិត្ត ទាំងតំលៃ និង
              គុណភាព
            </p>
          </div>
          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default Grid;
