import React from "react";
import data from "../data";

const Resume = () => {
  return (
    <div className="m-[2rem] md:m-[5rem] ">
      <div className="flex flex-col gap-[66px]">
        <div className="text-center flex flex-col gap-[2rem]">
          <div className="flex justify-center">
            <p className="bg-[rgb(253,146,164,30%)] text-black py-[0.5rem] px-[1rem] font-semibold rounded-[5px]">
              What You Get
            </p>
          </div>
          <h1 className="text-[24px] lg:text-4xl sm:text-2xl xl:text-6xl font-semibold">
            You're Not Just
            <span className="text-[#FA1239] leading-[1.5]">
              {" "}
              Another Applicant
            </span>{" "}
            And Your <br /> Resume Shouldn't Look Like One
          </h1>
        </div>

        <div className=" flex gap-[1rem] flex-wrap justify-center">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex w-full h-[450px] sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[18.4%] flex-wrap"
            >
              <div className=" px-[20px] py-[20px] text-center flex gap-[13.3px] flex-col justify-center shadow-lg rounded-[20px]">
                <img
                  className="h-[200px] w-auto object-contain mx-auto"
                  src={item.img}
                  alt=""
                />
                <h2 className="mx-[1.01rem] text-xl xl:text-xl">
                  {item.heading}
                </h2>
                <p className=" lg:text-lg xl:text-[17px] font text-[#595959] ">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
