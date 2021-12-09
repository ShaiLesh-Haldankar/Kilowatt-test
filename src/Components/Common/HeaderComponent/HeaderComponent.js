import React from "react";
import "./header-component.style.scss";
import { Images } from "./../../../Assets/0a-export";
import { Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <div className="header-component-main">
      <div>
        <Link to="/">
          <img src={Images.fullLogo} alt="kilowatt" />
        </Link>
      </div>
    </div>
  );
}
