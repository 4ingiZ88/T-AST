import React from "react";
import css from "./Content.module.css";

const Content = () => {
  return (
    <div className={css.content}>
      <div>
        <img src="https://st2.depositphotos.com/1033349/6738/v/950/depositphotos_67387605-stock-illustration-amstaff-silhouettes.jpg" />
      </div>
      <div>ава+gklhsfmh</div>
      <div>
        My posts
        <div className={css.post}>
          <div className={css.item}>Post 1</div>
          <div className={css.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
