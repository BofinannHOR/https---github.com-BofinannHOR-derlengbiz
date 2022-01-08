import React from "react";
import Grid from "./Grid";
import Gridthree from "./Gridthree";
import GridTwo from "./GridTwo";

const HowItWork = () => {
  return (
    <div
      id="how-it-work"
      className="section-three mx-3 p-0 text-slate-700 items-center"
    >
      <div className="items-center flex flex-col">
        {" "}
        <h1 className="mb-3 m-auto pt-32">របៀបប្រើប្រាស់</h1>{" "}
        <p className="text-center">
          ពេលនឹកចង់ដើរលេងម្តងៗ ពិតជាពិបាកក្នុងការសំរេចចិត្ត មែនទេ?
          លែងជាកង្វល់ទៀតហើយ ដើរលេងជួយអ្នកបាន
        </p>
      </div>
      <Grid />
      <GridTwo />
      <Gridthree />
    </div>
  );
};

export default HowItWork;
