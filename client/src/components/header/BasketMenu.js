import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { useSelector } from "react-redux";
import BasketItems from "./BasketItems";

function BasketMenu() {
  const basket = useSelector(state => state.cart.allItems);
  const [showMenu, setShowMenu] = useState(false);
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(-80%)" },
    leave: { opacity: 0, transform: "translateX(-50%)" }
  });
  return (
    <div>
      <div className="flex cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-basket" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="7 10 12 4 17 10" />
          <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8Z" />
          <circle cx="12" cy="15" r="2" />
        </svg>
        <span className="font-sans">
          {basket.length}
        </span>
      </div>
      <div>
        {
          maskTransitions.map(({ item, key, props }) =>
            item &&
            <animated.div
              key={key}
              style={props}
              className="top-0 left-0 w-full h-screen z-50" // no transparent bg set yet
              onClick={() => setShowMenu(false)}
            >
            </animated.div>
          )
        }
        {
          menuTransitions.map(({ item, key, props }) =>
            item &&
            <animated.div
              key={key}
              style={props}
              className="flex justify-center fixed bg-white top-32 left-auto w-4/5 md:w-2/3 xl:w-1/3 h-auto rounded-lg shadow-xl border border-gray-200 pt-8 pb-2 px-6 md:px-12 z-50"
            >
              <BasketItems
                closeMenu={() => setShowMenu(false)}
              />
            </animated.div>
          )
        }
      </div>
    </div>
  );
}

export default BasketMenu;