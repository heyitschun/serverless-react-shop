import React from "react";
import { Link } from "react-router-dom";

function Jumbo() {
  return (
    <div className="jumbo flex-column justify-center" alt="jumbo">
      <div className="jumbo-text text-center text-2xl md:text-6xl font-bold text-white uppercase opacity-75 tracking-widest h-64 p-5 m-10">
        Discover You
      </div>
      <div className="flex-col pb-8">
        <div className="flex justify-center">
          <div className="text-center jumbo-text text-sm text-white font-bold w-2/3 md:w-1/3">
            <p>
            Explore all the things you can't buy in this store, because it's <u>not</u> real.
            This webshop was built to test frontend development speed with React.js and Tailwind CSS. It's deployed on Netlify. 
            </p>
            <p className="mb-10">
            Here's the <a className="text-yellow-400 hover:text-red-300" href="https://github.com/heyitschun/serverless-react-shop" rel="noopener noreferrer" target="_blank">source code</a>.
            </p>
            <p>
            We asked you to tag us in your sassy summer pics. And you delivered big time!
            </p>
          </div>
        </div>  
        <div className="flex justify-center mt-1">
          <div className="flex-col w-64">
            <Link to="/inspire">
              <button className="opacity-100 hover:opacity-75 bg-black text-white tracking-widest uppercase text-xs py-2 w-full my-2 rounded-none">
                Summertime Sassiness
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="font-sans text-xs text-white text-right pr-2">
        Photo by Clarisse Meyer
      </div>
    </div>
  );
}

export default Jumbo;