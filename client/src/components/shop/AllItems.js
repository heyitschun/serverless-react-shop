import React, { useEffect } from "react";
import Loading from "./Loading";
import { useAxiosGet } from "../../hooks/HttpGetRequest";
import ProductCard from "./ProductCard";

function AllItems() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = "/api/get-all-products";
  let products = useAxiosGet(url);
  let content = null;
  if (products.error) {
    content = <div>
      <div className="bg-blue-300 mb-2 p-3">
        If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
      </div>
      <div className="bg-red-300 p-3">
        There was an error please refresh or try again later.
      </div>
    </div>
  }

  if (products.loading) {
    content = <Loading></Loading>
  }

  if (products.data) {
    content =
    products.data.map((product) =>
      <div key={product.id} className="flex-no-shrink w-full mb-10 md:p-3 md:w-1/2">
        <ProductCard product={product} />
      </div>
    );
  }
  return (
    <div className="container mx-auto m-10">
      <div className="justify-start md:flex flex-wrap md:p-3 md:-mx-3">
        <div className="md:text-xl font-bold tracking-wider my-5">Our collection</div>
      </div>
      <div className="md:flex flex-wrap md:-mx-3 justify-center">
        {content}
      </div>
    </div>
  );
}

export default AllItems;