import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import aboutus from "../public/aboutus.svg";
import vision from "../public/vision.svg";
import mission from "../public/mission.svg";

const About = () => {
  return (
    <Layout>
      <div className="about flex flex-col text-slate-700 mx-4 p-10 mt-10 leading-relaxed ">
        <div className="lg:border-none border-b-2 flex flex-col lg:flex-row lg:justify-between">
          <div div className="w-scren h-auto lg:w-2/4">
            <Image src={aboutus} width={1000} height={700}></Image>
          </div>
          <div className="p-4 ">
            <h1 className="mb-3">អំពីយើង</h1>
            <p className="mb-3">
              ដើរលេង ត្រូវបានបង្កើតឡើងដើម្បីជាមធ្យោបាយដ៏សាម្មញមួយតំបូងគេ
              ក្នុងការកក់ ដំនើរកំសាន្ត ទូទាំង ព្រះរាជាណាចក្រកម្ពុជា និង
              ជុំវិញពិភពលោក នៅទីកន្លែងតែមួយ តាមរយះប្រព័ន្ធអនឡាញ
              សំរាប់ប្រជាជនកម្ពុជា ដែលមានបំណងធ្វើដំនើរកំសាន្ត។
            </p>
            <p className="mb-3">
              យើងជឿជាក់ថា ការធ្វើដំនើរ និងនាំមកជាមួយនូវរាល់បទពិសោធន៏ និង
              ចំណង់ចំណូលចិត្តរបស់អ្នកទាំងគ្រប់គ្នា
              ដែលនិងទទួលបាននូវអត្ថប្រយោជន័ដូចជា៖
            </p>
            <li>ដើម្បីទទួលបានបទពិសោធន៍ថ្មីៗ</li>
            <li>
              ដើម្បីចែករំលែកពេលវេលាដែលមិនអាចកាត់ថ្លៃបានជាមួយមិត្តភក្តិឬមនុស្សជាទីស្រឡាញ់
            </li>
            <li>ដើម្បីពង្រឹងចំណងគ្រួសារ</li>
            <li>
              អប់រំប្រជាជនអំពីទិសដៅ សហគមន៍ និង តំបន់កំសាន្ត
              នានាក្នុងប្រទេសកម្ពុជា
            </li>
          </div>
        </div>
        {/* vision */}
        <div className="flex flex-col lg:flex-row lg:justify-between mt-10">
          <div className="p-4 ">
            <h1 className="mb-3">ចក្ខុវិស័យ</h1>
            <p className="mb-3">
              តភ្ជាប់អ្នកទេសចរកម្ពុជាទៅនឹងបទពិសោធន៍ធ្វើដំណើរដែលមានន័យសំរាប់ជីវិត។
            </p>
            <p className="mb-3">
              ដើរលេង បានប្តេជ្ញាថា នឹងចូលរួមផ្សព្វផ្សាយនូវវិស័យទេសចរកម្ពុជា
              ដោយជំរុញ និង ទាក់ទាញទេសចរកម្ពុជា ទៅទស្សនា
              នូវកន្លែងស្អាតៗជាច្រើនរបស់ព្រះរាជាណាចក្រកម្ពុជា និង លើ ពិភពលោក។
            </p>
            <p className="mb-3">
              យើងក៏បានប្តេជ្ញាដែរថា និង ក្លាយខ្លួនជាប្រព៏ន្ធអនឡាញមួយក្នុងប្រទេស
              ដែលបង្កើននូវ ចំនួននៃប្រតិបត្តិការ និង ការពេញចិត្តរបស់អតិថិជន ដៃគូ
              និង សហគមន៍ អោយកាន់តែខ្លាំង។
            </p>
          </div>
          <div div className="w-scren h-auto lg:w-2/4">
            <Image src={vision} width={1000} height={700}></Image>
          </div>
        </div>
        {/* mission */}
        <div className="flex flex-col lg:flex-row lg:justify-between mt-10">
          <div className="p-4 ">
            <h1 className="mb-3">បេសកម្ម</h1>
            <p className="mb-3">
              ដើម្បីក្លាយជាទីផ្សារអនឡាញមួយ សំរាប់សហគមន៍មូលដ្ឋាន និង
              ជួយជំរុញឱ្យអ្នកទេសចរកម្ពុជា ងាយក្នុងការ ស្វែងរក ការកក់
              និងទទួលបានបទពិសោធន៍សំរាប់វិស្សមកាលក្នុងក្តីសុបិនរបស់ពួកគេ។
            </p>
            <p className="mb-3">
              យើងផ្តល់ជូនអ្នកទេសចរកម្ពុជានូវអ្វីគ្រប់យ៉ាងដែលពួកគេត្រូវការដើម្បីរៀបចំផែនការនិងកក់
              សំរាប់ថ្ងៃ ឈប់សម្រាកខាងមុខរបស់ពួកគេនៅកន្លែងតែមួយ។​
              គ្មានក្តីកង្វល់សម្រាប់ការធ្វើផែនការធ្វើដំណើរជាមួយ ក្រុមគ្រួសារ
              មិត្តភក្តិ និង មិត្តរួមការងារ នៅគ្រប់ទីកន្លែង និង គ្រប់ពេលវេលា។
            </p>
          </div>
          <div div className="w-scren h-auto lg:w-2/4">
            <Image src={mission} width={1000} height={700}></Image>
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};

export default About;
