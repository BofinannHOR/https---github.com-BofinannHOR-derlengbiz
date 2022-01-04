import React from "react";
import Image from "next/image";
import ios from "../public/ios.svg";
import android from "../public/android.svg";
import Link from "next/link";

const Introduction = () => {
  return (
    <div
      id="sectionone"
      class="p-3 m-4 text-slate-700 lg:mx-38 mx-10 lg:p-16 justify-between mt-28"
    >
      <div className=" mb-5">
        <h1>ដើរលេងជាអ្វី?</h1>
      </div>
      <div>
        <p className="text-sm lg:text-lg tracking-wider lg:leading-loose leading-loose mb-20">
          ដើរលេង គឺជា កម្មវិធីចល័ត ឬ Mobile App ដែលមានទម្រង់ជាបណ្តុំទីផ្សារ ឬ
          Marketplace Platform ដំបូងគេ
          បង្កើតឡើងដើម្បីជាជំនួយការដ៏ឆ្លាតវៃក្នុងការរៀបចំផែនការទេសចរណ៍លក្ខណៈគ្រួសារ
          មិត្តភាព ឬ វិស្សមកាលក្រុមហ៊ុនរបស់លោកអ្នក
          ហើយទទួលការកក់ដំណើរកំសាន្តនិងសេវាកម្មទេសចរណ៍ទូទាំងព្រះរាជាណាចក្រកម្ពុជា
          និងជុំវិញពិភពលោក តាមរយៈប្រព័ន្ធអនឡាញ
          សម្រាប់ប្រជាជនកម្ពុជាដែលមានបំណងធ្វើដំណើរកំសាន្ត។
        </p>
      </div>
      {/* download section */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* ios */}
        <div className="p-10 ios-download bg-gray-100  rounded-xl flex flex-col items-center">
          <div className="h-auto mb-2">
            <span className="text-3xl font-bold ">iOS</span>
          </div>
          <div className="mb-10">
            <Link href="https://apps.apple.com/kh/app/derleng/id1527904771">
              <a target="_blank">
                <button className="coolBeans py-3 px-5 ">Download</button>
              </a>
            </Link>
          </div>
          {/* image */}
          <Image src={ios} />
        </div>
        {/* android */}
        <div className="p-10 ios-download bg-gray-100  rounded-xl flex flex-col items-center mt-28">
          <div className="h-auto mb-2">
            <span className="text-3xl font-bold">Android</span>
          </div>
          <div className="mb-10">
            <Link href="https://play.google.com/store/apps/details?id=biz.derleng.mobileapp">
              <a target="_blank">
                <button className="coolBeans py-3 px-5 ">Download</button>
              </a>
            </Link>
          </div>
          {/* image */}
          <Image src={android} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
