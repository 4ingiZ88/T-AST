import React from "react";
import mod from "./Navbar.module.css";
console.log(mod);


const Navbar = () => {
  return (
    <nav className={mod.nav}>
      <div className={`${mod.item} ${mod.active}`}>
        <a>Profile</a>
      </div>
      <div className={mod.item}>
        <a>News Feed</a>
      </div>
      <div className={mod.item}>
        <a>Messages</a>
      </div>
      <div className={mod.item}>
        <a>Main content</a>
      </div>
    </nav>
  );
};

export default Navbar;

