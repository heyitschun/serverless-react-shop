import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import BasketItems from "./BasketItems";

function BasketMenu() {
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
      <div onClick={() => setShowMenu(!showMenu)}>
        <i className="material-icons cursor-pointer">shopping_basket</i>
        <span>0</span>
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
              className="flex justify-center fixed bg-white top-32 left-auto w-4/5 md:w-2/3 xl:w-1/3 h-auto rounded-lg shadow-xl border border-gray-200 pt-8 pb-2 px-12 z-50"
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