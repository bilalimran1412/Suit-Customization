// App.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import { SuiteCustomization } from "./pages/SuiteCustomization";
import Welcome from "./pages/Welcome";
import AuthProviders from "./providers/AuthProvider";
import Layout from "./providers/layout";
import { ToastContainer } from "react-toastify";
import Suites from "./pages/Suites";
import "react-toastify/dist/ReactToastify.css";

const notAuthRoutes = [
	{
		path: "/Signin",
		element: <SignIn />,
	},

	{
		path: "/signup",
		element: <Signup />,
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

const publicRoutes = [
	{
		path: "/suites",
		element: <Suites />,
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
			{
				children: publicRoutes,
			},
		],
	},
];

const router = createBrowserRouter(routes);

const App = () => {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};

export default App;
