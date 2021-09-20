import React from "react";
import css from "./Posts.modules.css";

const Posts = () => {
  return (
    <div className={css.posts}>
      My posts
      <div className={css.post}>
        <div className={css.item}>Post 1</div>
        <div className={css.item}>Post 2</div>
      </div>
    </div>
  );
};

export default Posts;
