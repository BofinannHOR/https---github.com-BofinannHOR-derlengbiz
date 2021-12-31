import React from "react";

const ContractUs = () => {
  return (
    <div
      id="sectionfive"
      className="section-six text-slate-700 lg:mx-38 mx-10 lg:p-20"
    >
      <div className="items-center flex flex-col">
        <h1 className="my-10">ទំនាក់ទំនងមកពួកយើង</h1>
      </div>
      <div className="flex flex-col lg:flex-row form-height">
        <div className="bg-white  md:w-2/3 lg:w-1/2 rounded">
          <form>
            <div className="flex items-center mb-10">
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="នាមត្រកូល និង ឈ្មោះ"
                className="border-b-2 border-slate-500 flex-1 py-2 placeholder-slate-500 outline-none focus:border-green-400"
              />
            </div>
            <div className="flex items-center mb-10">
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="អ៊ីមែល"
                className="border-b-2 border-slate-500 flex-1 py-2 placeholder-slate-500 outline-none focus:border-green-400"
              />
            </div>
            <div className="flex mb-10 flex-col">
              <label for="name" className="w-full text-slate-700">
                ប្រាប់យើងដោយសង្ខេប តើយើងអាចជួយអ្នកដោយរបៀបណា?
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder=""
                className="border-b-2 border-slate-500 flex-1 py-2 placeholder-slate-500 outline-none focus:border-green-400"
              />
            </div>
            <div className="text-left">
              <button className="py-3 px-8 bg-orange-300 text-white rounded hover:bg-orange-600">
                ផ្ញើ​សារ
              </button>
            </div>
          </form>
        </div>
        {/* ------------- */}
        <div className="bg-white lg:ml-10 lg:mt-0 mt-10 rounded">
          <h3 className="mb-3">ភ្ជាប់ទំនាក់ទំនង</h3>
          <p className="mb-1">
            ក្រុមហ៊ុន ដើរលេង ត្រាវែល តិចណូឡូជី ខូអិលធីឌី ​(Derleng Travel
            Technology Co., Ltd)
          </p>
          <p className="mb-5">
            ផ្ទះលេខ ០៦៧៧ ក្រុម ២៥ បន្ទាយចាស់ សង្កាត់ស្លរក្រាម ក្រុងសៀមរាប
            ខេត្តសៀមរាប កម្ពុជា ១៧២៥១
          </p>
          <div className="flex flex-row mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>ទូរស័ព្ទ៖ (+៨៥៥) ៦៩ ៩៥៥ ៥៤៥</span>
          </div>
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>ឬតាមអ៊ីមែល: support@derleng.biz</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractUs;
