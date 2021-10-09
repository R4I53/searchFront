import React from "react";
import { Select, Input, Row, Col, Divider } from "antd";
import DownloadImages from "./download/download-images/DownloadImages";
import DownloadTitleImg from "./download/download-title-img/DownloadTitleImg";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/admin/actions";
import "./Post.scss";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const { Option } = Select;

function Post() {
  const dispatch = useDispatch();
  const { title, text, category } = useSelector(({ admin }) => admin);

  const changeText = (e) => {
    dispatch(actions.setText(e));
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Col>
          <Divider orientation="left">Выберите роль:</Divider>
        </Col>
        <Col span={7}>
          <Select
            labelInValue
            style={{ width: 150 }}
            defaultValue={{ value: category }}
            //   value={category}
            onChange={(e) => dispatch(actions.setCategory(e.value))}
          >
            <Option value="1">Важный</Option>
            <Option value="2">Второстепенный</Option>
          </Select>
        </Col>
      </Row>
      <DownloadTitleImg />
      <Row style={{ marginBottom: "15px" }} justify="center" align="middle">
        <Col span={20}>
          <Input
            size="large"
            placeholder="Заголовок"
            allowClear
            value={title}
            onChange={(e) => dispatch(actions.setTitle(e.target.value))}
          />
        </Col>
      </Row>
      <Row style={{ marginBottom: "30px" }} justify="center" align="middle">
        <Col span={20}>
          <ReactQuill
            placeholder="Описание"
            theme="snow"
            value={text}
            onChange={changeText}
          />
        </Col>
      </Row>
      <DownloadImages />
    </>
  );
}

export default Post;
