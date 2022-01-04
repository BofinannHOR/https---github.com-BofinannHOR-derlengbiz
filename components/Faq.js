import React from "react";
import faq from "../public/faq.svg";
import Image from "next/image";

const Faq = () => {
  return (
    <div
      id="faq"
      className="section-four text-slate-700 mt-20 flex-col flex items-center lg:mx-38 mx-10 "
    >
      <h1>សំណួរ ចម្លើយ</h1>
      <div className="flex flex-col lg:flex-row lg:mx-32 mx-0 items-center">
        <div className="w-scren h-auto lg:w-2/4 lg:mt-0 mt-10">
          {/* image */}
          <div className="">
            <Image src={faq} width={500} height={500}></Image>
          </div>
        </div>
        <div className="lg:w-2/4 w-full h-auto">
          {/* /content */}
          <div className=" flex flex-col text-slate-700">
            <div className="my-5">
              <h3 className="mb-3">ទាញយកកម្មវិធី Derleng App?</h3>
              <p>
                ចូលទៅ App Store ឬ Play Store បន្ទាប់មកស្វែងរក Derleng App
                ហើយចុះឈ្មោះបង្កើតគណនីជាមួយ Email ឬ Facebook
                របស់លោកអ្នកយ៉ាងងាយស្រួល។
              </p>
            </div>
            <div className="my-5">
              <h3 className="mb-3">ចាប់ផ្តើមប្រើសេវា Derleng App?</h3>
              <p>
                បើកកម្មវិធី Derleng App នៅលើទូរសព្ទដៃអ្នក
                ហើយបន្ទាប់មកចាប់ផ្តើមកំណត់យកដំណើរកំសាន្តណាមួយ រួចហើយចុចពាក្យថា
                កក់ឥឡូវនេះ(Booking)។
              </p>
            </div>
            <div className="my-5">
              <h3 className="mb-3">
                តើខ្ញុំអាចដាក់ពាក្យធ្វើជាអ្នកសរសេរមាតិកា ឬ អ្នកផ្គត់ផ្គង់បានទេ?
              </h3>
              <p>
                បាទអ្នកអាចដាក់ពាក្យសុំពីគេហទំព័ររបស់យើងសម្រាប់ទាំងពីរជម្រើស
                និងកម្មវិធីទូរស័ព្ទចល័តរបស់យើងសម្រាប់អ្នកនិពន្ធមាតិកា។
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
