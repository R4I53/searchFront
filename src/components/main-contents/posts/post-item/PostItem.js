import React from "react";
import { useActiveIcon } from "../../../../hooks/useActiveIcon";

import s from "./PostItem.module.scss";

import daria from "../../../../assets/img/Daria.jpg";
import alena from "../../../../assets/img/Alena.jpg";
import iconDefault from "../../../../assets/img/arrow-min.svg";
import iconActive from "../../../../assets/img/Vector.svg";

const PostItem = () => {
  const { icon, onMouseOver, onMouseOut } = useActiveIcon(
    false,
    iconDefault,
    iconActive
  );

  return (
    <div className={s.post} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div className={s.block_img}>
        <img src={alena} alt="фото" className={s.img} />
        <div className={s.img_mask}></div>
      </div>

      <h3 className={s.title}>Дарья Бульба</h3>
      <img src={icon} alt="посмотеть" className={s.icon} />
    </div>
  );
};

export default PostItem;
