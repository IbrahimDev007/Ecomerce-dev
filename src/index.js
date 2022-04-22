import React from "react";
import ReactDOM from "react-dom/client";
// import Store from "./Components/Store";
import "./index.css";
// import App from './App';
import Register from "./Components/Register";
// import Dashbord from "./Components/Dashbord";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Register />
    {/* <Dashbord/> */}
    {/* <Store/> */}
    {/* <App/> */}
	</React.StrictMode>
);
