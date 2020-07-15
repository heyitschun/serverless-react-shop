import React from "react";
import Jumbo from "../components/shop/Jumbo";
import LatestItems from "../components/shop/LatestItems";
import CollabItems from "../components/shop/CollabItems";
import JumboSustain from "../components/shop/JumboSustain";
import Loading from "../components/shop/Loading";
import { useAxiosGet } from "../hooks/HttpGetRequest";

function Home() {
  const url = "/api/get-all-products";
  let products = useAxiosGet(url);
  let latestItemsContent = null;
  let collabItemsContent = null;
  if (products.error) {
    latestItemsContent = 
    <div>
      <div className="bg-red-300 p-3">
        There was an error please refresh or try again later.
      </div>
    </div>
  }
  if (products.loading) {
    latestItemsContent = <Loading></Loading>
    collabItemsContent = <Loading></Loading>
  }
  if (products.data) {
    latestItemsContent =
        <div className="flex-no-shrink w-full my-10 md:p-3">
          <LatestItems latestItemsContent={products}/>
        </div>
    collabItemsContent =
        <div className="flex-no-shrink w-full my-10 md:p-3">
          <CollabItems latestItemsContent={products}/>
        </div>
  }
  return (
    <div>
      <div>
        <Jumbo/>
      </div>
      <div>
        {latestItemsContent}
      </div>
      <div>
        <JumboSustain/>
      </div>
      <div>
        {collabItemsContent}
      </div>
    </div>
  );
}

export default Home;