import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  let overlay;
  if (!props.product.inStock) {
    overlay = <div className="font-bold product-card-out-of-stock text-white text-sm tracking-wider">
      out of stock
    </div>
  } else {
    overlay = <div></div>
  }
  return (
    <div className="product-card shadow-md md:shadow-lg rounded-0">
      <Link aria-label={props.product.name} to={`/item/${props.product.id}`}>
        <div
          style={{
            'backgroundImage': `url('${props.product.image}')`,
          }}
          className="w-full h-64 md:h-lg bg-blue bg-center bg-cover bg-no-repeat"
        >
          {overlay}
        </div>
      </Link>
      <div className="px-3">
        <h3 className="font-bold text-left text-md xl:text-xl mb-2">
          <Link to={`/item/${props.product.id}`}>
            {props.product.name}
            <span className="float-right text-base">$ {props.product.price}</span>
          </Link>
        </h3>
        <div className="font-hairline text-gray-700 text-xs text-right pb-1">
          Photo by {props.product.credits}
        </div>
      </div>
    </div>
  )
}

export default ProductCard