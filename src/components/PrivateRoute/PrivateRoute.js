import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "../../store/authReducer";

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { loggedIn } = useSelector(getAuthState);

    return loggedIn ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
