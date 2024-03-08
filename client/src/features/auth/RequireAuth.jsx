import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";


const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  console.log(token);
  
  if (token === null) {
    // Token is not yet available, display a loading indicator or wait for the token
    return <p>Loading...</p>;
  }

  return token ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />;
}

export default RequireAuth
