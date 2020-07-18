import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <ul>
        <li>
          <Link
            to="/user"
            className="text-black hover:text-orange-500 font-bold text-center py-3 block"
            onClick={props.closeMenu}
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/support"
            className="text-black hover:text-orange-500 font-bold text-center py-3 block"
            onClick={props.closeMenu}
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            to="/sustain"
            className="text-black hover:text-orange-500 font-bold text-center py-3 block"
            onClick={props.closeMenu}
          >
            Sustainability
          </Link>
        </li>
        <li>
          <div
            className="cursor-pointer text-black hover:text-orange-500 font-bold flex justify-center just pt-3"
            onClick={props.closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
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

export default Navigation;