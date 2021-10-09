import React from "react";
import s from "./Posts.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import actions from "../../../redux/posts/actions";

const Posts = () => {
  const dispatch = useDispatch();
  const { titleImg, title, text } = useSelector((state) => state.post.post);
  const images = useSelector((state) => state.post.post.images);

  const changeText = (node) => {
    if (node) return (node.innerHTML = text);
  };

  React.useEffect(() => {
    const id = localStorage.getItem("postId") || 1;
    return dispatch(actions.getPost(id));
  }, [dispatch]);

  return (
    <section className={s.section}>
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
              href={"http://localhost:49/" + titleImg}
            >
              <img
                className={titleImg && s.block_photo__item}
                src={"http://localhost:49/" + titleImg}
                alt="title img"
              />
            </a>
          </div>
          <h2 className={s.title}>{title}</h2>
          <div
            ref={(node) => {
              changeText(node);
            }}
            className={s.text}
          ></div>

          <Image.PreviewGroup>
            <div className={s.photo_container}>
              {images &&
                images.map(({ id, url }) => (
                  <div style={{ overflow: "hidden", maxHeight: "250px" }}>
                    <Image
                      width={200}
                      src={`${process.env.REACT_APP_API_URL}/${url}`}
                      key={id}
                    />
                  </div>
                ))}
            </div>
          </Image.PreviewGroup>
        </div>
      </div>
    </section>
  );
};

export default Posts;
