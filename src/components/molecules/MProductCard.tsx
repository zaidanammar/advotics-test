import React from "react";
import { product as productImg } from "../../assets/images";
import { IProduct } from "../../core/product/entities";
import { formatCurrency } from "../../utils/common";

type Props = {
  product: IProduct;
};

const MProductCard = ({ product }: Props) => {
  return (
    <div className="flex items-center bg-white rounded-md shadow-sm border">
      <div className="lg:w-1/4 sm:w-1/5 w-1/6">
        <img src={productImg} alt="product" className="w-full" />
      </div>
      <div className="w-auto flex-1 px-3 py-1.5 text-textPrimary">
        <h1 className="text-sm font-semibold">{product.product_name}</h1>
        <div className="flex flex-wrap justify-between text-xs w-full">
          <p> {formatCurrency({ value: product.price })}</p>
          <p>Sold: {product.product_sold}</p>
        </div>
      </div>
    </div>
  );
};

export default MProductCard;
