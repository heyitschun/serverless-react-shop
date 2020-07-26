import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";
var faker = require('faker/locale/en');


function BasketItems(props) {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.cart.allItems);
  let basketTotal = 0;
  basket.forEach(item => {
    basketTotal += item.price;
  });
  let basketList = <li>Empty basket</li>
  if (basket.length !== 0) {
    basketList = 
      basket.map(item =>
        <li
          key={random.uuid().slice(-4)}
          className="flex-auto mt-1"
        >
          <div className="flex">
            <div className="text-sm md:text-base w-2/3">
              {item.name}
            </div>
            <div className="text-sm md:text-base flex-col w-1/3 text-right">
              $ {item.price} <button onClick={() => 
                dispatch(removeFromCart(item))}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus cursor-pointer" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="12" cy="12" r="9" />
                      <line x1="9" y1="12" x2="15" y2="12" />
                    </svg>
                  </button>
            </div>
          </div>
        </li>
      );
  }

  return (
    <div className="w-full">
      <ul className="flex-col justify-center">
        {basketList}
        <li className="flex justify-end mt-3">
          <div className="w-full md:w-1/3 float-right text-sm text-right border-t border-gray-400 pr-2">
            Total: $ {basketTotal}
          </div>
        </li>
        <li className="flex-col md:flex-auto mt-3">
          <input className="border border-gray-300 outline-none focus:shadow-md focus:bg-gray-100 text-xs w-full md:w-1/3 p-1" placeholder="Enter promo code..."></input>
          <button className="bg-black hover:opacity-75 text-white text-xs uppercase tracking-widest w-full md:w-16 py-1 px-2 my-2 md:m-2">Apply</button>
          <Link to="/checkout">
            <button
              className="bg-black hover:opacity-75 text-white text-xs uppercase tracking-widest w-full md:w-1/3 py-1 px-2 my-2 float-right"
              onClick={props.closeMenu}
            >Checkout</button>
          </Link>
        </li>
        <li className="flex-col md:flex-auto text-center mt-3">
          <div className="pt-4 flex justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={props.closeMenu} className="cursor-pointer icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default BasketItems;