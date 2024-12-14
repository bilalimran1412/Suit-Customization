import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default layout;
