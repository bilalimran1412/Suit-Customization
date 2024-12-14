import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import { Link } from "react-router-dom";

const InputField = ({ id, label, type, placeholder, register, validation, error }) => (
	<div>
		<label htmlFor={id} className="sr-only">
			{label}
		</label>
		<input
			id={id}
			{...register}
			type={type}
			className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			placeholder={placeholder}
		/>
		{error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
	</div>
);

const SignupPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (data) => {
		await authClient.signUp.email(
			{
				...data,
			},
			{
				onRequest: (ctx) => {
					setIsLoading(true);
				},
				onSuccess: (ctx) => {
					setIsLoading(false);
					navigate("/");
				},
				onError: (ctx) => {
					setIsLoading(false);
					alert(ctx.error.message);
				},
			},
		);
	};

	const password = watch("password");

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-6">
				<div className="text-center">
					<img className="mx-auto h-12 w-auto" src="/placeholder.svg?height=48&width=48" alt="Your Company" />
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
				</div>
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<InputField
						id="name"
						label="Name"
						type="text"
						placeholder="Full name"
						register={register("name", { required: "Name is required" })}
						error={errors.name}
					/>
					<InputField
						id="email-address"
						label="Email Address"
						type="email"
						placeholder="Email address"
						register={register("email", {
							required: "Email is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Invalid email format",
							},
						})}
						error={errors.email}
					/>
					<InputField
						id="password"
						label="Password"
						type="password"
						placeholder="Password"
						register={register("password", {
							required: "Password is required",
							minLength: {
								value: 8,
								message: "Password must be at least 8 characters",
							},
						})}
						error={errors.password}
					/>
					<InputField
						id="confirm-password"
						label="Confirm Password"
						type="password"
						placeholder="Confirm password"
						register={register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value) => value === password || "Passwords do not match",
						})}
						error={errors.confirmPassword}
					/>

					<button
						type="submit"
						disabled={isLoading}
						className={`group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md text-white ${
							isLoading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
						} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}>
						{isLoading ? "Signing up..." : "Sign up"}
					</button>
				</form>
				<div className="text-center">
					<p className="text-sm text-gray-600">
						Already have an account?{" "}
						<Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
