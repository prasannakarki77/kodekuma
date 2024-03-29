import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  var isAuth;
  if (sessionStorage.getItem("user")) {
    isAuth = true;
  } else {
    isAuth = false;
  }
  return isAuth ? children : <Navigate to="/notfound" />;
}

export default PrivateRoute;
