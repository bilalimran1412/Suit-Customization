import { useUserSession } from "../Hooks/useUserSession";
import { Navigate, Outlet } from "react-router";

const AuthProviders = ({}) => {
	return <Outlet />;
};

export default AuthProviders;
