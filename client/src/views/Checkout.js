var faker = require('faker/locale/en');
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions";
import { Link } from "react-router-dom";

function Checkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const basket = useSelector(state => state.cart.allItems);
  let content = <li>Empty</li>
  if (basket.length !== 0) {
    content = basket.map(item => 
      <li
        key={faker.random.uuid().slice(-4)}
        className="flex-auto mt-1 mb-10"
      >
        <div className="flex">
          <div className="text-sm md:text-base w-2/3">
            <Link to={`/item/${item.id}`}>
              {item.name}
            </Link>
          </div>
          <div className="text-sm md:text-base flex-col w-1/3 text-right">
            $ {item.price} <button onClick={() =>
              dispatch(removeFromCart(item))}>
                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer icon icon-tabler icon-tabler-circle-minus" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                </svg>
              </button>
          </div>
        </div>
        <div className="flex text-sm">
          {item.title}
        </div>
      </li>
    );
  }
  return(
    <div className="flex justify-center m-8">
      <div className="w-full md:w-2/5 md:m-0">
        <div className="md:text-xl font-bold tracking-wider my-5">Your basket</div>
          <ul>
            {content}
            <li className="flex-col md:flex-auto mt-3">
              <button
                className="bg-black hover:opacity-75 text-white text-xs uppercase tracking-widest w-full md:w-1/3 py-1 px-2 my-2 float-right"
              >Continue</button>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Checkout;