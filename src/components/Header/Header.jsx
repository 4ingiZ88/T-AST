import React from "react";
import mod from "./Header.module.css";

const Header = () => {
  return (
    <div className={mod.Header}>
      <div>
        <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkm989NUKQE-47d1hlt-fNmKaKTM5SRkZCeTgDn6uOyic"></img>
      </div>
    <div>
      <h className={mod.heading}>ТЕРРИТОРИЯ АМСТАФФА </h>
    </div>
    </div>
  );
};

export default Header;
