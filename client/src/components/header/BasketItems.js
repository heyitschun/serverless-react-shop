import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions";
import faker from "faker";

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
          key={faker.random.uuid().slice(-4)}
          className="flex-auto mt-1"
        >
          <div className="flex">
            <div className="text-sm md:text-base w-2/3">
              {item.name}
            </div>
            <div className="text-sm md:text-base flex-col w-1/3 text-right">
              $ {item.price} <button onClick={() => 
                dispatch(removeFromCart(item))}><i className="material-icons text-base text-gray-700 hover:text-red-400 focus:border-blue-500">remove_circle</i></button>
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
          <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs uppercase tracking-widest w-full md:w-16 py-1 px-2 my-2 md:m-2">Apply</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs uppercase tracking-widest w-full md:w-1/3 py-1 px-2 my-2 float-right">Checkout</button>
        </li>
        <li className="flex justify-center">
          <i
            className="pt-4 material-icons hover:text-orange-500 cursor-pointer mb-3"
            onClick={props.closeMenu}
          >cancel</i>
        </li>
      </ul>
    </div>
  )
}

export default BasketItems;