import React from "react";
import faker from "faker";
import Masonry from "react-masonry-component";
import Loading from "../components/shop/Loading";
import { useAxiosGet } from "../hooks/HttpGetRequest";

const masonryOptions = {
  transitionDuration: 0
}

function Inspire() {
  const url = "/api/get-inspirations";
  let inspos = useAxiosGet(url);
  let masonryChildren;
  if (inspos.error) {
    masonryChildren = <div>
      <div className="bg-red-300 p-3">
        There was an error please refresh or try again later.
      </div>
    </div>
  }
  if (inspos.loading) {
    masonryChildren = <Loading></Loading>
  }
  if (inspos.data) {
    masonryChildren = inspos.data.map((elem, index) => {
      return (
        <li key={index}>
          <div>
            <img src={elem.src} alt={elem.credits} />
            <div className="font-varela inspire-img-text-top text-right p-0 text-xs md:text-base md:p-3">
              Submitted by: @{faker.internet.userName()}
            </div>
            <div className="inspire-img-text-bot">
              Credits: {elem.credits}
            </div>
          </div>
        </li>
      )
    });
  }
  return (
    <div className="flex-col justify-center">
      <div className="font-comfortaa font-bold text-center text-xl md:text-2xl m-4">
        ❤❤❤
      </div>
      <div className="font-comfortaa font-bold text-center text-lg md:text-2xl mb-2">
        This is how you inspire us!
      </div>
      <div className="flex justify-center">
        <Masonry className="w-2/3 xl:w-4/5" options={masonryOptions} elementType={"ul"}>
          {masonryChildren}
        </Masonry>
      </div>
      <div className="flex justify-center md:text-2xl mt-8">
        ❤❤❤
      </div>
      <div className="flex justify-center">
        <div className="text-center w-2/3 text-sm md:text-lg mt-3">
          Get your MockFashion looks featured on here by tagging <span className="social-tag">@MockFashion</span> on social media. <br></br>We'll make sure to find you 😉
        </div>
      </div>
    </div>
  );
}

export default Inspire;