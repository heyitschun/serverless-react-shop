import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import Navigation from "./Navigation";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-30%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-30%)" }
  });
  return (
    <nav>
      <div onClick={() => setShowMenu(!showMenu)}>
        <i className="bg-red-200 material-icons cursor-pointer">menu</i>
      </div>
      <div>
        {
          maskTransitions.map(({ item, key, props }) =>
            item &&
            <animated.div
              key={key}
              style={props}
              className="top-0 left-0 w-full h-screen z-50"
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
          className="flex justify-center fixed bg-white top-32 left-auto w-auto h-auto rounded-lg shadow-xl border border-gray-200 pt-8 pb-2 px-12 z-50"
          >
              <Navigation
                closeMenu={() => setShowMenu(false)}
                />
            </animated.div>
          )
        }
      </div>
    </nav>
  );
}

export default Menu;