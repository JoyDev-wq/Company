import data from "../data";

const Resume = () => {
  return (
    <div className=" py-[40px] z-30 ">
      <div className="flex flex-col gap-[50px]">
        <div className="text-center flex flex-col gap-[26px]">
          <div className="flex justify-center">
            <p className="bg-[rgb(253,146,164,30%)] text-black py-[0.5rem] px-[1rem] font-semibold rounded-[5px]">
              What You Get
            </p>
          </div>
          <h1 className="text-[30px] lg:text-4xl sm:text-2xl xl:text-[44px] font-semibold">
            You're Not Just
            <span className="text-[#FA1239] leading-[1.5]">
              {" "}
              Another Applicant
            </span>{" "}
            And Your <br /> Resume Shouldn't Look Like One
          </h1>
        </div>

        <div className=" flex gap-[26px] sm:gap-[24px] flex-wrap justify-center">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex h-[450px] sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[18%] flex-wrap"
            >
              <div className="px-[20px] py-[20px] text-center flex gap-[18px] flex-col justify-center shadow-lg rounded-[20px]">
                <img
                  className="h-[149px] w-[200px] object-contain mx-auto"
                  src={item.img}
                  alt=""
                />
                <div className="flex flex-col gap-[24px]">
                  <h2 className="mx-[1.01rem] text-[20px] xl:text-xl font-medium">
                    {item.heading}
                  </h2>
                  <p className="text-[18px] font text-[#595959] ">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;
