import React from "react";
import ProductCard from "../shop/ProductCard";

function LatestItems(props) {
  let latest = props.latestItemsContent.data.slice(0, 3);
  let content = latest.map(product => 
    <div key={product.id} className="flex-no-shrink w-full my-10 md:p-3 md:w-1/3">
      <ProductCard product={product} />
    </div>
  );
  return (
    <div className="container mx-auto m-10">
      <div className="text-xl flex flex-wrap md:-mx-3 justify-center tracking-wider">
        - New Arrivals -
      </div>
      <div className="md:flex flex-wrap md:-mx-3 justify-center">
        {content}
      </div>
    </div>
  );
}

export default LatestItems;