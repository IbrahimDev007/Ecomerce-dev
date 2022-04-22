import React, { useEffect, useState } from "react";
import data from './Components/Json';
export default function App() {
	const [data1, setData] = useState({
		name: "",
		password: "",
	});
	function handlechange(e) {
		let { name, value } = e.target;
		return setData({ ...data1, [name]: value }), console.log(data);
	}

	const onSubmithandeler = (e) => {
		e.preventDefault();
		let names =data1.filter()
		let passwords = data.password==data1.password;
		if (!names) {
			console.log("invalide name");
		} else if (!passwords) {
			console.log("password invalid");
		}
		if (!names || !passwords) {
			setData({ ...data, name: "", password: "" });
			console.log(data);
			console.log("all err");
		} else {
			console.log(data);
		}
	};

	return (
		<div style={{ fontFamily: "roboto" }}>
			<nav className="font-lg w-full text-white flex font-bold justify-start bg-blue-700 sticky">
				<h3 className="m-1 p-2">Ecomerce</h3>
				<h3 className="m-1 p-2">Login</h3>
				<h4 className="m-1 p-2">Register</h4>
			</nav>
			<div className="bg-gray-300">
				<div className="w-full h-screen flex items-center justify-center">
					<form
						onSubmit={onSubmithandeler}
						className="w-full md:w-1/3 bg-white rounded-lg"
					>
						<div className="flex font-bold justify-center mt-6">
							<img
								className="h-20 w-20"
								src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png"
							/>
						</div>
						<h2 className="text-3xl text-center text-gray-700 mb-4">
							Login Form
						</h2>
						<div className="px-12 pb-10">
							<div className="w-full mb-2">
								<div className="flex items-center">
									<input
										type="text"
										name="name"
										value={data.name}
										onChange={handlechange}
										placeholder="Username"
										className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-blue-400"
									/>
								</div>
							</div>
							<div className="w-full mb-2">
								<div className="flex items-center">
									<input
										type="text"
										placeholder="Password"
										value={data.password}
										name="password"
										onChange={handlechange}
										className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-blue-400"
									/>
								</div>
							</div>
							<div className="flex items-center ">
								<input
									type="checkbox"
									className=" m-2 p-2 float-right focus:outline-blue-400"
								/>
								<a
									href="#"
									className="text-xs m-2 p-2 text-gray-500 float-right "
								>
									Forgot Password?
								</a>
							</div>
							<button
								type="submit"
								value="Submit"
								className="w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-green-400"
							>
								Log In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
