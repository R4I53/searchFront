import React from "react";
import { Link } from "react-router-dom";
import { Table, Row, Col } from "antd";
import { useRouteMatch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/posts/actions";

function PostList() {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const names = useSelector((state) => state.post.names);
  const [newNames, setNewNames] = React.useState([]);

  React.useEffect(() => dispatch(actions.getNamePosts()), [dispatch]);
  React.useEffect(() => {
    let n = [];
    names.forEach((el, i, arr) => {
      const name = arr[i];
      name.key = i;
      return n.push(name);
    });
    return setNewNames(n);
  }, [names, dispatch]);

  const columns = [
    {
      title: "ID",
      width: 50,
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend"],
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 500,
      render: (title) => (
        <Link to={`${url}/${names.find((el) => el.title === title)?.id}`}>
          {title}
        </Link>
      ),
    },
  ];

  return (
    <Row justify="center" align="middle">
      <Col span={10}>
        <Table pagination={false} columns={columns} dataSource={newNames} />
      </Col>
    </Row>
  );
}

export default PostList;

//   const dispatch = useDispatch();
//   const { url } = useRouteMatch();

//   const names = useSelector((state) => state.post.names);

//   React.useEffect(() => dispatch(actions.getNamePosts()), []);

//   return (
//     <div style={{ width: "600px", margin: "0 auto" }}>
//       {names.map(({ id, title }) => {
//         return (
//           <div className="">
//             <Link key={id} to={`${url}/${id}`}>
//               {title}
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
