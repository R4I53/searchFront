import React from "react";
import { Link } from "react-router-dom";

import { useActive } from "../../../hooks/useActive";

import s from "./PostItem.module.scss";

import daria from "../../../assets/img/Daria.jpg";
import alena from "../../../assets/img/Alena.jpg";
import iconDefault from "../../../assets/img/arrow-min.svg";
import iconActive from "../../../assets/img/Vector.svg";
import Posts from "../Posts";

const PostItem = ({ post }) => {
  const { icon, onMouseOver, onMouseOut } = useActive(
    false,
    iconDefault,
    iconActive
  );

  React.useEffect(() => console.log(post), []);

  return (
    <div className={s.post} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <Link to={`/post/${post.id}`}>
        <div className={s.block_img}>
          <img
            src={`${process.env.REACT_APP_API_URL}/${post.titleImg}`}
            alt="фото"
            className={s.img}
          />
          <div className={s.img_mask}></div>
        </div>

        <h3 className={s.title}>{post.title} </h3>
        <img src={icon} alt="посмотеть" className={s.icon} />
      </Link>
    </div>
  );
};

export default PostItem;
