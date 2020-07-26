import React from "react";
import ProductCard from "../shop/ProductCard";

function CollabItems(props) {
  let latest = props.latestItemsContent.data.slice(3, 6);
  let content = latest.map(product =>
    <div key={product.id} className="flex-no-shrink w-full my-10 md:p-3 md:w-1/3">
      <ProductCard product={product}/>
    </div>
  );
  return (
    <div className="container mx-auto m-10">
      <div className="md:flex flex-col md:-mx-3 justify-center">
        <div className="text-center text-base md:text-xl tracking-wider">
          - <span className="shop-logo text-base md:text-3xl">Mock Fashion</span><span className="font-bold px-3">x</span>
          <span className="fakebrand-logo text-sm md:text-lg">FakeBrand</span> -
        </div>
        <div className="mt-3 text-center">
          We collaborated with FakeBrand to create this exclusive line. 
        </div>
      </div>
      <div className="md:flex flex-wrap md:-mx-3 justify-center">
        {content}
      </div>
    </div>
  );
}

export default CollabItems;