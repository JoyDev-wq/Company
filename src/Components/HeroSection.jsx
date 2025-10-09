import React from "react";
import bg_girl from "../assets/bg-girl.png";
import bg_1 from "../assets/bg-land.png";
import bg_2 from "../assets/bg-mobile.png";
import review from "../assets/Frame.png";
import resume from "../assets/Frame2.png";

const HeroSection = () => {
  return (
    <div className="relative flex max-sm:h-[120vh] sm:h-[125vh] lg:h-screen flex-col lg:flex-row">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${bg_2})` }} //mobile
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden lg:block"
        style={{ backgroundImage: `url(${bg_1})` }} //desktop
      ></div>
      <div className=" flex flex-1 justify-center mt-[50px] lg:ml-[50px] xl:ml-[100px] flex-col gap-[20px] sm:gap-[38px] z-20">
        <div className="text-center lg:text-left mt-[3rem] lg:mt-[5rem] text-4xl lg:text-7xl font-bold leading-[3rem] lg:leading-[5.5rem]">
          Your Resume <br />{" "}
          <span className="text-[#FA1239]">Deserves A Yes</span> Let's <br />{" "}
          Make It Happen
        </div>
        <div className="mx-auto lg:mx-0  w-[80%] sm:w-2/3 lg:w-2/3 ">
          <p className="leading-[34px] text-[16px] text-center lg:text-left">
            If Your Resume Isn't Getting Responses, It's Time For An Upgrade.
            Get An ATS-Optimized Resume Crafted By HR Experts To Help You Land
            More Interviews. Our Resumes Are Designed To Get Your Foot In The
            Door And Place Your Name At The Top Of The Shortlist.
          </p>
        </div>
        <div className="buttons flex gap-[1.5rem] items-center justify-center lg:justify-normal flex-col sm:flex-row">
          <button className="py-[0.64rem] px-[1.54rem] border bg-white border-[#FA1239] text-[#FA1239] rounded-full cursor-pointer shadow-[0_8px_24px_rgba(250,18,57,0.4)]">
            RESUME PACKAGES
          </button>
          <button className="py-[0.69rem] px-[1.75rem] bg-[#FA1239] text-white rounded-full cursor-pointer shadow-[0_8px_24px_rgba(250,18,57,0.4)]">
            CONTACT US
          </button>
        </div>
      </div>

      <div className="flex justify-center items-end flex-1">
        <img
          className="h-[400px] sm:h-[600px] lg:h-[850px] relative mb-[1rem]"
          src={bg_girl}
          alt=""
        />
        <img
          src={resume}
          className="absolute z-3  bottom-[2rem] right-[3rem]      /* mobile */
            sm:bottom-[3rem] sm:right-[8rem] /* small screens */
            md:bottom-[3.5rem] md:right-[14rem] /* medium screens */
            lg:bottom-[3rem] lg:right-[3rem] /* large screens */
            xl:bottom-[4rem] xl:right-[4rem]   /* extra-large screens */
            2xl:bottom-[4rem] 2xl:right-[8rem] 
            w-[8rem] sm:w-[12rem] xl:w-[16rem]"
        />
        <img
          src={review}
          className="absolute z-3 bottom-[7rem] right-[13rem]    /* mobile */
      sm:bottom-[11rem] sm:right-[22rem] /* small screens */
      md:bottom-[11rem] md:right-[29rem] /* medium screens */
      lg:bottom-[18rem] lg:right-[16rem] /* large screens */
      xl:bottom-[18rem] xl:right-[20rem] /* extra-large screens */
      2xl:bottom-[16rem] 2xl:right-[28rem] 
      w-[10rem] sm:w-[15rem] xl:w-[20rem]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
