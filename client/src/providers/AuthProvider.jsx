import { useUserSession } from "../Hooks/useUserSession";
import { Navigate, Outlet } from "react-router";

const AuthProviders = ({}) => {
	// User is authenticated
	return <Outlet />;
};

export default AuthProviders;
