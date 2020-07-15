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
            className="text-black hover:text-orange-500 font-bold text-center pt-3 block"
            onClick={props.closeMenu}
          >
            <i className="pt-4 material-icons cursor-pointer">cancel</i>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;