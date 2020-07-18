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
      <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
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