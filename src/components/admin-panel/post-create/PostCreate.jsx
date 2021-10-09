import React from "react";
import Post from "../Post";
import { Button, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/admin/actions";
import Scroll from "react-scroll";

const PostCreate = () => {
  const dispatch = useDispatch();
  const { titleImg, title, text, images, category, status } = useSelector(
    ({ admin }) => admin
  );

  React.useEffect(() => {
    dispatch(actions.setTitleImgPreview(""));
    dispatch(actions.setTitle(""));
    dispatch(actions.setText(""));
    dispatch(actions.deleteImagesPreview());
    dispatch(actions.setCategory("2"));
    dispatch(actions.setStatus(null));
  }, [dispatch]);

  const scroll = Scroll.animateScroll;

  const scrollOnStatus = () =>
    scroll.scrollToTop({
      duration: 400,
      smooth: true,
    });

  const onCreatePost = (titleImg, title, text, images, category) => {
    dispatch(actions.createPost(titleImg, title, text, images, category));
    return scrollOnStatus();
  };

  const onClose = () => dispatch(actions.setStatus(null));

  return (
    <section>
      {status === true && (
        <Alert
          style={{
            width: "500px",
            position: "absolute",
            zIndex: "10",
            right: 20,
            top: 50,
            backgroundColor: "rgba(43, 255, 0, 0.12)",
          }}
          message="Отправлено!"
          description="Ваш пост был отправлен на сервер"
          type="success"
          closable
          showIcon
          width="400px"
          onClose={onClose}
        />
      )}
      {status === false && (
        <Alert
          style={{
            width: "500px",
            position: "absolute",
            zIndex: "10",
            right: 20,
            top: 50,
            backgroundColor: "rgba(255, 0, 0, 0.12)",
          }}
          message="Ошибка!"
          description="Попробуйте еще раз"
          type="error"
          closable
          showIcon
          width="400px"
          onClose={onClose}
        />
      )}

      <div className="post">
        <div className="post__container">
          <Post />
          <Button
            style={{ position: "absolute", bottom: "30px", right: "50px" }}
            type="primary"
            size={"large"}
            onClick={() =>
              onCreatePost(titleImg, title, text, images, category)
            }
          >
            Отправить
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PostCreate;
