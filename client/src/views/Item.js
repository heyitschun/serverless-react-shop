import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../hooks/HttpGetRequest";
import Loading from "../components/shop/Loading";
import { addToCart } from "../redux/actions";
import { useDispatch } from "react-redux";

function Item() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { id } = useParams();
  const url = `/api/get-single-product?id=${id}`;
  let product = useAxiosGet(url);
  let content = null;
  let inStockContent;
  if (product.error) {
    console.log(product);
    content = <div>
      <div className="error-message leading-loose font-bold text-center text-white mt-48 p-3">
        Product not found.<br/> Please contact support for more info.
      </div>
    </div>
  }
  if (product.loading) {
    content = <Loading/>
  }
  if (product.data) {
    if (!product.data.inStock) {
      inStockContent = <div>Out of stock</div>
    } else {
      inStockContent = <button
        onClick={() => dispatch(addToCart(product.data))}
        className="bg-black hover:opacity-75 text-white text-sm uppercase tracking-widest shadow-lg hover:shadow-xl py-1 px-2">
        Add to basket
      </button>
    }
    content =
    <div className="flex justify-center">
      <div className="flex-col w-4/5 md:w-1/3">
        <h1 className="text-2xl text-center font-bold mb-3">
          {product.data.name}
        </h1>
        <div className="">
          <img
            src={product.data.image}
            alt={product.data.name}
            />
        </div>
        <div className="p-4">
          {product.data.title}
        </div>
        <div className="font-bold text-xl p-4 mb-3">
          $ {product.data.price}
          <span className="float-right">
            {inStockContent}
          </span>
        </div>
        <div className="font-varela p-4 mb-3">
          {product.data.description}
        </div>
      </div>
    </div>
  }
  return (
    <div>
      {content}
    </div>
  );
}

export default Item;