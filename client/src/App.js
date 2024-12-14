// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProvider";
import "./index.css";
import { SuiteCustomization } from "./pages/SuiteCustomization";
import CheckOut from "./pages/CheckOut";
import Welcome from "./pages/Welcome";
import Cart from "./pages/Cart";
import LoginPage from "./pages/Login";
import Layout from "./providers/layout";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const notAuthRoutes = [
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
];

const authRoutes = [
	{
		element: <Layout />,
		children: [
			{
				path: "/checkout",
				element: <CheckOut />,
			},
			{
				path: "/",
				element: <SuiteCustomization />,
			},
			{
				path: "/welcome",
				element: <Welcome />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/Dashboard",
				element: <Dashboard />,
			},
		],
	},
];

const routes = [
	{
		path: "/",
		children: [
			{
				children: notAuthRoutes,
			},
			{
				element: <AuthProviders />,
				children: authRoutes,
			},
		],
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
