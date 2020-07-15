import React from "react";
import { Link } from "react-router-dom";
import BasketMenu from "./BasketMenu";
import Menu from "./Menu";

function Header() {
  return (
    <header className="fixed bg-white shadow-md top-0 w-full z-40">
      <div className="flex">
        <div className="flex justify-end w-1/3 p-4">
          <Menu/>
        </div>
        <div
          className="flex justify-center shop-logo w-1/3 md:text-2xl m-3 opacity-75 mt-4"
          >
          <Link to="/">
            Mock Fashion
          </Link>
        </div>
        <div className="flex w-1/3 justify-start p-4">
          <div>
            <BasketMenu/>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-bold uppercase text-sm tracking-widest pb-4">
        <Link to="/collection" className="mr-4 hover:text-gray-600">collection</Link>
        <Link to="/inspire" className="mr-4 hover:text-gray-600">community</Link>
      </div>
    </header>
  );
}

export default Header;