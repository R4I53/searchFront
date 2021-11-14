import React from "react";

import { Image } from "antd";

import ContainerLayout from "../../../layout/container-layout/ContainerLayout";

import s from "./PostView.module.scss";

import img from "../../../assets/img/Daria.jpg";
import img2 from "../../../assets/img/Alena.jpg";

const PostView = ({ post, images, changeText }) => {
  React.useEffect(() => console.log(post), [post]);

  return (
    <ContainerLayout>
      <div className={s.block}>
        <div className={s.container}>
          <div className={s.block_photo}>
            {/* <Image
          fallback="https://spearfishdesign.com/wp-content/uploads/2018/11/placeholder-image_-1.png"
          alt="alter"
          src={"http://localhost:49/" + titleImg}
          className={titleImg && s.block_photo__item}
        /> */}
            <a
              target="_blank"
              rel="noreferrer"
              href={`${process.env.REACT_APP_API_URL}/${post.titleImg}`}
            >
              <img
                className={s.block_photo__item}
                src={`${process.env.REACT_APP_API_URL}/${post.titleImg}`}
                alt="title img"
              />
            </a>
          </div>

          <h2 className={s.title}>{post.title}</h2>
          <div
            ref={(node) => {
              changeText(node, post.text);
            }}
            className={s.text}
          ></div>

          <Image.PreviewGroup>
            <div className={s.img_list}>
              <div className={s.img_list__item}>
                <Image width={135} src={img2} />
              </div>
              <div className={s.img_list__item}>
                <Image width={135} src={img2} />
              </div>
              <div className={s.img_list__item}>
                <Image width={135} src={img} />
              </div>
              <div className={s.img_list__item}>
                <Image width={135} src={img2} />
              </div>
              <div className={s.img_list__item}>
                <Image width={135} src={img} />
              </div>
              <div className={s.img_list__item}>
                <Image width={135} src={img2} />
              </div>
            </div>
          </Image.PreviewGroup>
        </div>
      </div>
    </ContainerLayout>
  );
};

//1280 - 166
//750 - 84

export default PostView;
