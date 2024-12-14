import { useNavigate } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import { useUserSession } from "../Hooks/useUserSession";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
	const navigate = useNavigate();
	const { user } = useUserSession();

	const handleSignOut = async () => {
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						localStorage.removeItem("user_session");
						navigate("/signup");
					},
					onError: () => console.log("Signout failed"),
				},
			});
		} catch (error) {
			console.error("Signout error:", error);
		}
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16 items-center">
					{/* Logo */}
					<div className="flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
						<img className="h-8 w-auto" src="/logo.png" alt="Logo" />
					</div>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							onClick={() => navigate("/")}
							className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
							Home
						</button>
						{user && (
							<>
								<button
									onClick={() => navigate("/Dashboard")}
									className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
									Dashboard
								</button>
								<button
									onClick={() => navigate("/cart")}
									className="relative text-gray-700 hover:text-gray-900 px-3 py-2">
									<ShoppingCart className="h-5 w-5" />
									<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
										0
									</span>
								</button>
							</>
						)}
					</div>

					{/* Auth Buttons */}
					<div className="flex items-center space-x-4">
						{user ? (
							<button
								onClick={handleSignOut}
								className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
								Sign Out
							</button>
						) : (
							<>
								<button
									onClick={() => navigate("/login")}
									className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
									Login
								</button>
								<button
									onClick={() => navigate("/signup")}
									className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
									Sign Up
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
