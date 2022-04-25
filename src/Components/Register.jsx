import React, { useState } from "react";
import { User } from "./Json/Json";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
export default function Register() {
	const [Registert, setRegistert] = useState({
		name: "",
		email: "",
		password: "",
		passerr: "",
	});
	const handaleChangerEvent = (e) => {
		let { name, value } = e.target;
		return (
			setRegistert({ ...Registert, [name]: value }), console.log(Registert)
		);
	};
	const handaleSubmit = (e) => {
		e.preventDefault();
		let nameErr = "";
		let passvalid = "";
		let emailErr = "";
		let emailRgex = RegExp(
			/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
		);
		let randomNum = Math.floor(Math.random() * 100) + 1;
		let passErr = "";
		let passRgex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
		if (!Registert.name) {
			nameErr = "Name Is Not Valid";
			console.log(nameErr);
		} else if (Registert.password !== Registert.passerr) {
			passvalid = "Password Not match";
			console.log(passvalid);
		} else if (!passRgex.test(Registert.password)) {
			passErr = "Password not valid at leat 8 character 1 latter and 1 digit";
			console.log(passErr);
		} else if (!emailRgex.test(Registert.email)) {
			emailErr = "email not valid";
			console.log(emailErr);
		}
		if (
			!emailRgex.test(Registert.email) ||
			!passRgex.test(Registert.password) ||
			Registert.password !== Registert.passerr ||
			!Registert.name
		) {
			console.log("Again try");
		} else {
			let newReg = Registert;
			User.Id.push({ ...newReg });
			console.log(User);
			console.log("every thing all right");
		}
	};

	return (
		<div>
			<nav className="font-lg w-full text-white flex font-bold justify-start bg-blue-700 sticky">
				<h3 className="m-1 p-2">
					<Link to="/store">Ecomerce </Link>
				</h3>
				<h3 className="m-1 p-2">
					{" "}
					<Link to="/">
						<AccountCircleOutlinedIcon />
						Login
					</Link>
				</h3>
				<h4 className="m-1 p-2">
					<Link to="/register">Register</Link>
				</h4>
			</nav>
			{/* {console.log(user)} */}
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
					<h3 className="text-2xl font-bold text-center">Join us</h3>
					<form action="post" onSubmit={handaleSubmit}>
						<div className="mt-4">
							<div>
								<label className="block">Name</label>
								<input
									type="text"
									name="name"
									value={Registert.name}
									onChange={handaleChangerEvent}
									placeholder="Name"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block">
									Email
									{/* {User.Id[0].name} */}
								</label>
								<input
									type="text"
									placeholder="Email"
									name="email"
									value={Registert.email}
									onChange={handaleChangerEvent}
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block">Password</label>
								<input
									type="password"
									name="password"
									value={Registert.password}
									onChange={handaleChangerEvent}
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<div className="mt-4">
								<label className="block">Confirm Password</label>
								<span className="text-xs text-red-400">{}</span>
								<input
									type="password"
									name="passerr"
									value={Registert.passerr}
									onChange={handaleChangerEvent}
									placeholder="Password"
									className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
								/>
							</div>
							<span className="text-xs text-red-400">
								Password must be same!
							</span>
							<div className="flex">
								<button
									type="submit"
									value="submit"
									className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
								>
									Create Account
								</button>
							</div>
							<div className="mt-6 text-grey-dark">
								Already have an account?
								<a className="text-blue-600 " >
									<h3 className="">
										{" "}
										<Link to="/">
											<AccountCircleOutlinedIcon />
											Login
										</Link>
									</h3>
								</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
