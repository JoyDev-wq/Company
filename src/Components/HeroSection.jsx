import React from "react";
import bg_girl from "../assets/bg-girl.png";
import bg_1 from "../assets/bg_land.png";
import bg_2 from "../assets/bg-mobile.png";
import review from "../assets/Frame.png";
import resume from "../assets/Frame2.png";
import underline from "../assets/underline.png";

const HeroSection = () => {
  return (
    <div className="relative flex overflow-hidden max-[390px]:h-[clamp[125vh,130vh,150vh]] sm:h-[clamp[100vh,110vh,115vh]] lg:h-[110vh] xl:h-screen flex-col lg:flex-row z-25">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${bg_2})` }} //mobile background
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${bg_1})` }} //desktop background
      ></div>
      <div className=" flex lg:flex-1 justify-center mt-[3rem] lg:mt-0 lg:ml-[50px] xl:ml-[100px] flex-col gap-[24px] sm:gap-[38px] z-20 ">
        <div className="text-center lg:text-left mt-[3rem] lg:mt-[5rem] text-4xl md:text-5xl xl:text-[64px] font-bold leading-[3rem] lg:leading-[5.5rem]">
          Your Resume <br />{" "}
          <span className="text-[#FA1239] relative">
            Deserves A Yes{" "}
            <img
              src={underline}
              className="hidden w-[20vw] lg:block lg:absolute left-0 top-[2.2rem] lg:top-[3rem] md:top-[4rem] xl:top-[5rem]"
              alt=""
            />
          </span>{" "}
          Let's <br /> Make It Happen
        </div>
        <div className="mx-auto lg:mx-0 ">
          <p className="w-[340px] sm:w-[485px] leading-[34px]  text-[16px] text-center lg:text-left ">
            If Your Resume Isn't Getting Responses, It's Time For An Upgrade.
            Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land
            More Interviews. Our Resumes Are Designed To Get Your Foot In The
            Door And Place Your Name At The Top Of The Shortlist.
          </p>
        </div>
        <div className="buttons flex gap-[24px] items-center justify-center lg:justify-normal flex-col sm:flex-row">
          <button className="py-[0.64rem] px-[1.54rem] border bg-white border-[#FA1239] text-[#FA1239] rounded-full font-medium cursor-pointer shadow-[0_8px_24px_rgba(250,18,57,0.4)]">
            RESUME PACKAGES
          </button>
          <button className="py-[0.69rem] px-[1.75rem] bg-[#FA1239] text-white rounded-full cursor-pointer shadow-[0_8px_24px_rgba(250,18,57,0.4)]">
            CONTACT US
          </button>
        </div>
      </div>

      <div className="relative w-full flex justify-center items-end md:flex-1 overflow-hidden">
        <img
          className=" h-[400px] sm:h-[600px] lg:h-[750px] object-contain mb-[0.5rem]"
          src={bg_girl}
          alt=""
        />
        <img
          src={resume}
          className="h-[67.26px] w-[153.28px] sm:h-[133px] sm:w-[271px] absolute z-3 bottom-[2rem] right-[1.5rem]     
            sm:bottom-[3rem] sm:right-[8rem] 
            md:bottom-[3.5rem] md:right-[6rem] 
            lg:bottom-[3rem] lg:right-[3rem] 
            xl:bottom-[4rem] xl:right-[4rem]   
            2xl:bottom-[4rem] 2xl:right-[8rem] 
            xl:w-[16rem]"
        />
        <img
          src={review}
          className="w-[179.87px] h-[64.4px] sm:h-[117px] sm:w-[350px] absolute z-3 bottom-[7rem] right-[11rem]   
            sm:bottom-[11rem] sm:right-[25rem] 
            md:bottom-[10rem] md:right-[24rem] 
            lg:bottom-[18rem] lg:right-[16rem] 
            xl:bottom-[18rem] xl:right-[20rem] 
            2xl:bottom-[16rem] 2xl:right-[28rem] 
              xl:w-[20rem]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
