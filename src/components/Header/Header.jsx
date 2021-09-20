import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.header}>
      <div>
        <img src="https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rkm989NUKQE-47d1hlt-fNmKaKTM5SRkZCeTgDn6uOyic"></img>
      </div>
      <div>
        <h1 className={css.heading}>ТЕРРИТОРИЯ АМСТАФФА</h1>
      </div>
    </div>
  );
};

export default Header;
