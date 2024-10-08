import React, { useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/addProductsSlice";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el, deleteProduct }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s.create);
  const someBas = basket.some((item) => item._id === el._id);
  const nav = useNavigate();

  return (
    <div>
      <div className="relative w-[350px] h-[360px] bg-gray-200 rounded-[10px] flex items-center justify-start flex-col gap-[3px] pt-[20px]">
        <img src={el.url} alt={el.name} width={130} />
        <h1 className="font-bold">{el.name}</h1>
        <h1 className="font-bold text-2xl">{el.price} $</h1>
        <button
          onClick={() => (someBas ? nav(`/basket`) : dispatch(addToBasket(el)))}
          className="py-[8px] px-[25px] bg-gray-500 my-2 rounded-[10px] text-white font-bold"
        >
          {`${someBas ? "GO TO BASKET" : "ADD TO BASKET"}`}
        </button>
        <a
          onClick={deleteProduct}
          className="absolute top-7 right-7 text-2xl cursor-pointer"
        >
          <IoCloseCircleOutline />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
