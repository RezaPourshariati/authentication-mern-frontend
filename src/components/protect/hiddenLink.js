import {useSelector} from "react-redux";
import {selectIsLoggedIn, selectUser} from "../../redux/features/auth/authSlice";

export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) return <>{children}</>;
    return null;
};

export const ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) return <>{children}</>;
    return null;
};

export const AdminAuth = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    if (isLoggedIn && (user?.role === "admin" || user?.role === "author")) return <>{children}</>;
    return null;
};