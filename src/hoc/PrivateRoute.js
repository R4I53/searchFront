import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) =>
       
      2 < 3 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/autorization" />
        )
      }
    />
  );
}