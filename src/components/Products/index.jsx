import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [categoryy, setCategoryy] = useState("");
  console.log(data);

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

  async function deleteProduct(id) {
    try {
      await axios.delete(`${api}/${id}`);
      setData((data) => data.filter((el) => el._id !== id));
    } catch (error) {
      console.log("Failed to delete product", error);
    }
  }

  function allFilter() {
    if (categoryy === "MALE PERFUMES") {
      let res = data.filter((el) => el.category === "MALE PERFUMES");
      setData(res);
    } else if (categoryy === "UNISEX") {
      let res = data.filter((el) => el.category === "UNISEX");
      setData(res);
    } else if (categoryy === "FEMALE PERFUMES") {
      let res = data.filter((el) => el.category === "FEMALE PERFUMES");
      setData(res);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(categoryy);

  return (
    <div>
      <div className="">
        <div className="w-[427px] h-[84vh] mt-[-44px] fixed bg-[#6C757D] border-r-[20px] border-solid border-[#D9D9D9] px-[30px]">
          <div className="my-[20px]">
            <h1 className="text-3xl text-white font-bold">CATEGORY</h1>
            <ul className="text-white my-[15px]">
              <li
                onClick={() => {
                  setCategoryy("MALE PERFUMES"), allFilter();
                }}
              >
                MALE PERFUMES
              </li>
              <li
                onClick={() => {
                  setCategoryy("FEMALE PERFUMES"), allFilter();
                }}
              >
                FEMALE PERFUMES
              </li>
              <li
                onClick={() => {
                  setCategoryy("UNISEX"), allFilter();
                }}
              >
                UNISEX
              </li>
            </ul>
          </div>
          <div className="my-[20px]">
            <h1 className="text-3xl text-white font-bold">BRAND</h1>
            <ul className="text-white my-[15px]">
              <li>DIOR</li>
              <li>VERSACE</li>
              <li>PRADA</li>
              <li>TOM FORD</li>
            </ul>
          </div>
          <div className="my-[20px]">
            <h1 className="text-3xl text-white font-bold">TYPE</h1>
            <ul className="text-white my-[15px]">
              <li>ELIXIR</li>
              <li>COLOGNE</li>
              <li>PERFUME</li>
              <li>EAU DE TOILETTE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex items-center flex-wrap gap-16 ml-[447px] mt-[40px] mb-[40px] ">
          {data?.map((el) => (
            <ProductCard
              el={el}
              key={el._id}
              deleteProduct={() => deleteProduct(el._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
