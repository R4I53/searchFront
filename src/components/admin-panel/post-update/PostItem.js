import React from "react";
import Post from "../Post";
import { Button, Modal, Alert } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import actions from "../../../redux/admin/actions";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import Scroll from "react-scroll";

const PostItem = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { titleImg, title, text, images, category, status } = useSelector(
    ({ admin }) => admin
  );
  React.useEffect(() => {
    dispatch(actions.getPost(id));
    dispatch(actions.setStatus(null));
  }, [dispatch, id]);

  const onDeletePost = (id) => {
    try {
      dispatch(actions.deletePost(id));
      return history.goBack();
    } catch (e) {
      return console.log(e);
    }
  };

  const scroll = Scroll.animateScroll;

  const scrollOnStatus = () =>
    scroll.scrollToTop({
      duration: 400,
      smooth: true,
    });

  const onUpdatePost = (id, titleImg, title, text, images, category) => {
    dispatch(actions.updatePost(id, titleImg, title, text, images, category));
    return scrollOnStatus();
  };

  const onClose = () => dispatch(actions.setStatus(null));

  const confirmDelete = () => {
    Modal.confirm({
      title: "Внимание!",
      icon: <ExclamationCircleOutlined />,
      onOk: () => onDeletePost(id),
      content: "Вы уверены, что хотите удалить пост?",
      okText: "Да",
      cancelText: "Нет",
    });
  };

  const confirmEdit = () => {
    Modal.confirm({
      title: "Внимание!",
      icon: <ExclamationCircleOutlined />,
      onOk: () => onUpdatePost(id, titleImg, title, text, images, category),
      content: "Вы уверены, что хотите изменить пост?",
      okText: "Да",
      cancelText: "Нет",
    });
  };

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
          <div style={{ position: "relative" }}>
            <Button
              style={{
                position: "absolute",
                bottom: "30px",
                right: "180px",
              }}
              type="primary"
              danger
              size={"large"}
              onClick={confirmDelete}
            >
              Удалить
            </Button>
            <Button
              style={{ position: "absolute", bottom: "30px", right: "50px" }}
              type="primary"
              size={"large"}
              onClick={confirmEdit}
            >
              изменить
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostItem;
