/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/home'>Search</Link>
      &nbsp; &nbsp;
      <Link to='/about'>about</Link>
    </div>
  );
};

export default Header;
