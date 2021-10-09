import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

 const PrivateRoute = ({ component: Component, ...rest }) =>  {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
}

export default PrivateRoute

// <div style={{ minHeight: "100vh", backgroundColor: "white" }}>
//             <Result
//               status="403"
//               title="403"
//               subTitle="У вас нет доступа"
//               extra={
//                 <Button type="primary">
//                   <Link to={"/auth"}>авторизироваться</Link>
//                 </Button>
//               }
//             />
//           </div>
