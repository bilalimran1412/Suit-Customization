import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { authClient } from "../lib/auth-client";
import { useState } from "react";

const LoginPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	async function onSubmit(values) {
		await authClient.signIn.email(
			{
				email: values.email,
				password: values.password,
			},
			{
				onRequest: () => {
					setIsLoading(true);
				},
				onSuccess: () => {
					setIsLoading(false);
					navigate("/");
				},
				onError: (error) => {
					setIsLoading(false);
				},
			},
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img className="mx-auto h-12 w-auto" src="/placeholder.svg?height=48&width=48" alt="Your Company" />
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								{...register("email", {
									required: "Email is required",
									pattern: {
										value: /\S+@\S+\.\S+/,
										message: "Entered value does not match email format",
									},
								})}
								type="email"
								autoComplete="email"
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
							/>
							{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								{...register("password", {
									required: "Password is required",
									minLength: {
										value: 8,
										message: "Password must have at least 8 characters",
									},
								})}
								type="password"
								autoComplete="current-password"
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								placeholder="Password"
							/>
							{errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
						</div>
					</div>

					<div>
						<button
							type="submit"
							disabled={isLoading}
							className={`group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white ${
								isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
							} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
							{isLoading ? "Signing in..." : "Sign in"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
