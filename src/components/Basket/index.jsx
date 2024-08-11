import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";
import { removeAll } from "../../redux/addProductsSlice";
import empty from "../../assets/empty.png";

const Basket = () => {
  const { basket } = useSelector((s) => s.create);
  const dispatch = useDispatch();
  console.log(basket, "bas");
  const nav = useNavigate();
  let totalPrice = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);
  return (
    <div className="my-[40px]">
      <div className="container">
        {basket.length ? (
          <div className="">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[400px] overflow-y-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-1xl text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((el) => (
                    <BasketCard el={el} key={el._id} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between my-[30px]">
              <h1 className="text-white text-2xl font-bold">
                TOTAL PRICE: {totalPrice} $
              </h1>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => nav(`/products`)}
                  className="py-[7px] px-[20px] bg-gray-400 rounded-md font-bold"
                >
                  CONTINUE SHOPING
                </button>
                <button
                  onClick={() => dispatch(removeAll())}
                  className="py-[7px] px-[20px] bg-gray-400 rounded-md font-bold"
                >
                  REMOVE ALL
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <img
              src={empty}
              alt=""
              width={500}
              className="mx-auto fixed left-[30%]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
