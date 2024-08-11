import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";
import Footer from "../Footer";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  const api =
    "https://api.elchocrud.pro/api/v1/103920f638ca6dcad6e71c8334b9b1fa/dssad";

  async function getProduct() {
    try {
      let { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.log("Invalid error API", error);
    }
  }
  const sortPro = data ? [...data].sort((a, b) => b._id - a._id) : [];
  useEffect(() => {
    getProduct();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="flex flex-col items-center mt-[50px] gap-[34px]">
        <div className="h-[4px] bg-[#ADB5BD]  w-full"></div>
        <h1 className="text-[40px] font-bold mt-[-70px] w-[400px] flex items-center flex-col justify-center bg-[#212529] text-white">
          NEW IN ENSCENT
        </h1>
      </div>
      <div className="h-[432px] w-[60%] bg-[#CED4DA] mt-[] mx-auto">
        <div className="slider-container">
          <Slider {...settings}>
            {sortPro.map((el) => (
              <div
                key={el._id}
                className="flex items-center justify-center text-center ml-[200px]"
              >
                <img src={el.url} alt="" className="w-[400px]" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="container"></div>
      <Footer />
    </div>
  );
}

export default Home;
