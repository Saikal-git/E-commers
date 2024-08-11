import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/addProductsSlice";
// import { GoPlus } from "react-icons/go";
import upload from "../../assets/upload.png";

const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productBrend, setProductBrend] = useState("");
  const [category, setCategory] = useState("");

  const { product } = useSelector((s) => s.create);
  console.log(product, "prod");

  const dispatch = useDispatch();
  const api = `https://api.elchocrud.pro/api/v1/103920f638ca6dcad6e71c8334b9b1fa/dssad`;
  console.log(api);

  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  async function createProduct1() {
    let newProduct = {
      url: productUrl,
      name: productName,
      price: productPrice,
      description: productDes,
      brand: productBrend,
      category: category,

      quantity: 1,
    };
    let { data } = await axios.post(api, newProduct);
    dispatch(createProduct(data));
    setProductUrl("");
    setProductName("");
    setProductPrice("");
    setProductDes("");
    setProductBrend("");
  }

  const getProd = () => {
    return async (dispatch) => {
      const res = await axios(api);
      const { data } = res;
      dispatch(createProduct(data));
    };
  };

  useEffect(() => {
    window.scrollTo(0, 10);
    dispatch(getProd());
  }, []);

  return (
    <div className="my-[50px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="w-[1075px] flex h-[400px]  bg-[#D9D9D9]">
            {/* <div className=""> */}
            <div className="w-[50%] py-[50px] ml-[40px] gap-[40px] flex  flex-col">
              <div className="flex justify-between ">
                <h1 className="text-[16px]">PRODUCT NAME:</h1>

                <input
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                  className="text-black font-bold bg-transparent  px-[30px] border-2 border-solid border-black text-[20px]"
                  type="text"
                />
              </div>
              <div className="flex justify-between">
                <h1 className="text-[16px]">PRODTUCT PRICE:</h1>
                <input
                  onChange={(e) => setProductPrice(e.target.value)}
                  value={productPrice}
                  className="text-black font-bold bg-transparent  px-[30px] border-2 border-solid border-black text-[20px]"
                  type="text"
                />
              </div>
              <div className="flex justify-between ">
                <h1 className="text-[16px]">PRODUCT DESCRIPTION:</h1>
                <input
                  onChange={(e) => setProductDes(e.target.value)}
                  value={productDes}
                  className="text-black font-bold bg-transparent  px-[30px] border-2 border-solid border-black text-[20px]"
                  type="text"
                />
              </div>
              <div className="flex justify-between ">
                <h1 className="text-[16px]">PRODUCT BRAND:</h1>
                <input
                  onChange={(e) => setProductBrend(e.target.value)}
                  value={productBrend}
                  className="text-black font-bold bg-transparent  px-[30px] border-2 border-solid border-black text-[20px]"
                  type="text"
                />
              </div>
              <div className="flex justify-between ">
                <h1 className="text-[16px]">PRODUCT CATEGORY:</h1>
                <select
                  className="w-[325px] h-[40px] px-[10px] text-black text-2xl font-medium bg-transparent border-2 border-solid border-gray-500 rounded-xl"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category</option>
                  <option value="MALE PERFUMES">MALE PERFUMES</option>
                  <option value="FEMALE PERFUMES">FEMALE PERFUMES</option>
                  <option value="UNISEX">UNISEX</option>
                </select>
              </div>
            </div>
            <div className="w-[40%]">
              <h1 className="text-[20px] flex flex-col items-center justify-center my-[40px] ">
                UPLOAD PRODUCT IMAGE:
              </h1>
              <div className="flex items-center justify-center w-[100%] ">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full"
                >
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={onChange}
                  />
                  <img src={upload} alt="img" width={80} />
                </label>
              </div>
              <button
                onClick={() => createProduct1()}
                className="py-[10px] ml-[70px] mt-[90px] text-[25px] px-[28px] rounded-[10px] text-white font-bold bg-[#ADB5BD]"
              >
                PREVIEW PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CreateProduct;
