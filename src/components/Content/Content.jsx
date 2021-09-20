import React from "react";
import mod from "./Content.module.css";

const Content = () => {
  return ( 
    <div className={mod.Content}>
      <div>
        <img src="https://st2.depositphotos.com/1033349/6738/v/950/depositphotos_67387605-stock-illustration-amstaff-silhouettes.jpg" />
      </div>
      <div>ава+gklhsfmh</div>
      <div>
        My posts
        <div className={mod.post}>
          <div className={mod.item}>Post 1</div>
          <div className={mod.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
