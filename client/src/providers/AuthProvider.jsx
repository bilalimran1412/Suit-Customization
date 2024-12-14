import { useUserSession } from "../Hooks/useUserSession";
import { Navigate, Outlet } from "react-router";

const AuthProviders = ({}) => {
	const { user, error, loading } = useUserSession();

	if (loading) {
		return <div className="h-screen w-screen flex items-center justify-center">Loading...</div>;
	}

	if (error) {
		console.log("error", error);
		return <Navigate to="/signup" replace />;
	}

	if (!user) {
		return <Navigate to="/signup" replace />;
	}

	// User is authenticated
	return <Outlet />;
};

export default AuthProviders;
