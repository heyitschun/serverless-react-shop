import React from "react";
import { Link } from "react-router-dom";

function JumboSustain() {
  return(
    <div className="jumbo-sustain flex-column justify-center" alt="jumbo-sustain">
      <div className="jumbo-sustain-text text-center text-xl md:text-5xl font-bold text-white uppercase tracking-widest h-64 p-5 m-10">
        Sustainable Fashion
      </div>
      <div className="flex-col pb-32 md:pb-8">
        <div className="flex justify-center md:justify-center">
          <div className="text-left jumbo-sustain-text text-sm text-white font-bold w-64 md:w-64">
            We are not a real company, so we don't actually contribute anything towards sustainability. But if we did, you could read about it here. 
          </div>
        </div>
        <div className="flex justify-center md:justify-center">
          <div className="flex-col w-64">
            <Link to="/sustain">
              <button className="hover:opacity-75 bg-black text-white tracking-widest uppercase text-xs py-2 w-full my-2 rounded-none">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="font-sans text-xs text-white text-right pr-2">
        Photo by Sarah Dorweiler
      </div>
    </div>
  );
}

export default JumboSustain;