import React from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { FaShoppingCart } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const CardHomeProduct = (props) => {
  return (
    <div className="container grow p-4 flex flex-col justify-between bg-white">
      <div className="align-middle">
        <img className="w-full h-40" src={props.imageItem ? props.imageItem : "https://via.placeholder.com/500?text=No+Image"} alt={props.imageItem} />
      </div>
      <div className="mt-2">
        <p className="text-[#040404] text-base font-semibold">{props.productTitle}</p>
        <p className="text-[#040404] text-base font-semibold ">{props.productPrice}</p>
        <div className="mt-4">
          <Button label="Add to Cart" onClick={props.onClickAddCart} />
        </div>
      </div>
    </div>
  );
};

const CardDetailProduct = (props) => {
  return (
    <div className="container grow p-4 lg:p-14 flex flex-col lg:flex-row justify-center bg-white w-full">
      {/* <div className=""> */}
      <div className="w-full mr-10">
        <img className="w-full h-96" src={props.imageItem ? props.imageItem : "https://via.placeholder.com/500?text=No+Image"} alt={props.imageItem} />
      </div>
      <div className="flex flex-col justify-between w-full mt-8 lg:mt-0">
        <div className="flex flex-col">
          <p className="text-[#040404] text-xl font-bold mb-1">{props.productTitle} Product Title</p>
          <p className="text-[#040404] text-xl font-bold mb-4">{props.productPrice} $45</p>
          <p className="text-[#040404] text-lg font-semibold">Deskripsi Produk</p>
          <p className="text-[#040404] text-base font-normal mb-8">{props.productDescription}</p>
        </div>
        <div className="w-1/2">
          <Button label="Add to Cart" onClick={props.onClickAddCart} />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

const CardDetailCart = (props) => {
  return (
    <div className="container grow p-8 flex bg-white border-b border-[#4F826F]">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3">
          <img className="w-56 h-56 self-center" src={props.imageItem ? props.imageItem : "https://via.placeholder.com/500?text=No+Image"} alt={props.imageItem} />
          <div className="flex flex-col ml-0 lg:ml-8 mt-4 lg:mt-0">
            <p className="text-[#040404] text-lg font-bold">{props.productTitle}</p>
            <p className="text-[#040404] text-lg font-bold">{props.productPrice}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full lg:w-1/3 mt-8 lg:mt-0">
          <div className="flex flex-col">
            <div className="flex justify-end">
              <p className="mr-4">Qty</p>
              <div className="w-1/3">
                <Input type="number" />
              </div>
            </div>
            <p className="text-right">Sub Total: {}</p>
          </div>
          <Button label="Remove" onClick={props.onClickRemove} />
        </div>
      </div>
    </div>
  );
};

const CardListProduct = (props) => {
  return (
    <div className="container grow p-2 lg:p-4 flex justify-center bg-white border-2 border-[#4F826F]">
      <div className="flex flex-col lg:flex-row p-2">
        <img className="w-full" src={props.imageItem ? props.imageItem : "https://via.placeholder.com/500?text=No+Image"} alt={props.imageItem} />
        <div className="flex flex-col justify-between ml-0 lg:ml-6">
          <div className="flex flex-col mt-4 lg:mt-0">
            <p className="text-[#040404] text-lg font-bold">{props.productTitle}</p>
            <p className="text-[#040404] text-lg font-bold">{props.productPrice}</p>
          </div>
          <div className="flex mt-8 lg:mt-0">
            <div className="mr-3">
              <Button onClick={props.onClickAddCart} label={<FaShoppingCart />}></Button>
            </div>
            <div className="mr-3">
              <Button onClick={props.onClickEditProduct} label={<FaPencilAlt />}></Button>
            </div>
            <div>
              <Button onClick={props.onClickDelProduct} label={<FaTrash />}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CardHomeProduct, CardDetailProduct, CardDetailCart, CardListProduct };
