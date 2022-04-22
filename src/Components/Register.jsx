import React from "react";
import  {User} from "../Components/Json/Json";
export default function Register() {
	return (
		<div>
			<nav className="font-lg w-full text-white flex font-bold justify-start bg-blue-700 sticky">
				<h3 className="m-1 p-2">Ecomerce</h3>
				<h3 className="m-1 p-2">Login</h3>
				<h4 className="m-1 p-2">Register</h4>
				{}
			</nav>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
					<h3 className="text-2xl font-bold text-center">Join us</h3>
					<form action="">
						<div className="mt-4">
							<div>
								<label className="block" for="Name">
									Name
								</label>
								<input
									type="text"
									placeholder="Name"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block" for="email">
									Email +{User.Id[0].name}
								</label>
								<input
									type="text"
									placeholder="Email"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block">Password</label>
								<input
									type="password"
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block">Confirm Password</label>
								<input
									type="password"
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<span className="text-xs text-red-400">
								Password must be same!
							</span>
							<div className="flex">
								<button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
									Create Account
								</button>
							</div>
							<div className="mt-6 text-grey-dark">
								Already have an account?
								<a className="text-blue-600 hover:underline" href="#">
									Log in
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
