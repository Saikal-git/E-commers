import React from "react";
// import instagram from "../../../src/assets/image/Vector (11).png";
// import facebook from "../../../src/assets/image/Vector (12).png";
function Footer() {
  return (
    <div className="bg-[#212529] h-[331px]">
      <div className="container">
        <div className="flex justify-between items-start">
          <div className="mt-[48px]">
            <h1 className="text-[24px] font-bold text-white">
              OFFERS AND TRENDS
            </h1>
            <h1 className="text-[40px] font-bold text-white">
              Newsletter Application
            </h1>
            <h1 className="text-[14px] font-bold mt-[6px] text-white">
              Enter your email address and let us notify you <br /> about news
              and discounts...
            </h1>
            <div className="flex items-center gap-[12px] mt-[18px]">
              <input
                className="w-[385px] rounded-[5px] h-[36px] px-[18px] text-[20px]"
                type="text"
              />
              <button className="py-[6.5px] font-bold px-[31px] rounded-[7px] bg-[#ADB5BD]">
                SIGN UP
              </button>
            </div>
          </div>
          <div className="mt-[48px] text-end">
            <h1 className="text-[24px] font-bold text-white">
              STAY UP TO DATE
            </h1>
            <h1 className="text-[40px] text-white font-bold">Follow Us</h1>
            <h1 className="text-white font-bold text-end text-[14px] mt-[6px]">
              Become part of our friends on social networks and <br /> find out
              first about the discounts and novelties that <br /> we announce...
            </h1>
            <div className="flex items-end justify-end gap-[100px] mt-[18px]">
              {/* <img className="w-[46px] h-[46px]" src={instagram} alt="img" />
              <img className="w-[46px] h-[46px]" src={facebook} alt="img" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
