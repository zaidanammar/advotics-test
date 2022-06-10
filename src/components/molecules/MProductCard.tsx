import React from "react";
import { product } from "../../assets/images";
import { formatCurrency } from "../../utils/common";

const MProductCard = () => {
  return (
    <div className="flex items-center bg-white rounded-md shadow-sm border">
      <div className="lg:w-1/4 sm:w-1/5 w-1/6">
        <img src={product} alt="product" className="w-full" />
      </div>
      <div className="w-auto lg:flex-1 px-3 text-textPrimary">
        <h1 className="text-sm">Nama Product</h1>
        <div className="lg:flex justify-between text-xs w-full">
          <p> {formatCurrency({ value: 22232 })}</p>
          <p>Sold: 10</p>
        </div>
      </div>
    </div>
  );
};

export default MProductCard;
