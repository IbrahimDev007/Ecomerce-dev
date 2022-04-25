import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./Components/Store";
import "./index.css";
import App from "./App";
import Register from "./Components/Register";
import Dashbord from "./Components/Dashbord";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/register" element={<Register />} />
				<Route path="/Dashbord" element={<Dashbord />} />
				<Route path="/store" element={<Store />} />
				<Route path="/" element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
