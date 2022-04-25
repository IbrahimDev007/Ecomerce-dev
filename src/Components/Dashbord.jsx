import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { User } from "./Json/Json";
import { Link } from "react-router-dom";
let user = User;
export default function Dashbord() {
	return (
		<div style={{ fontFamily: "roboto" }}>
			<nav className="font-lg w-full items-center text-white flex font-bold justify-start bg-blue-900 sticky">
				<h3 className="p-2 m-1">Ecomerce</h3>
				<h3 className="m-1 p-2">
					<Link to="/Dashbord">
						<DashboardIcon className="m-1" />
						Dashbord
					</Link>
				</h3>
				<h4 className="m-1 p-2">
					<Link to="/store">
						<LocalGroceryStoreIcon className="m-1" />
						Store
					</Link>
				</h4>
				<h3 className="m-1 p-2">
					{" "}
					<Link to="/">
						<AccountCircleOutlinedIcon/>
						Login</Link>
				</h3>
			</nav>
			<div
				className="font-2xl items-center flex w-full bg-gray-400 p-2 text-white"
				style={{ height: "38px" }}
			>
				<DashboardIcon />
				Dashboard
			</div>
			<div className="flex flex-row justify-center ">
				<div className="float-left  w-3/5 items-center flex flex-wrap  m-2  ">
					{User.Id[0].product.map((prod, index) => (
						<Card sx={{ maxWidth: 350 }} key={index} className="m-2">
							<CardActionArea>
								<CardMedia
									component="img"
									height="80"
									name={prod.Name}
									width="120"
									className="object-fit"
									image={prod.ProductImg}
									alt={prod.Name}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="div">
										{prod.Name}
									</Typography>
									<Typography variant="h8" color="text.secondary">
										<b>Brand:</b>
										{prod.Brand}
										<br />
									</Typography>
									<Typography variant="h8" color="text.secondary">
										<b>Ratting:{prod.Ratting}</b>
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</div>
				<div className=" w-2/5 items-center  justify-center flex flex-col m-1 ">
					{user.Id[0].cart.map((prod, index) => {
						return (
							<Card key={index} sx={{ maxWidth: 350 }} className="m-2">
								<CardActionArea>
									<CardMedia
										component="img"
										height="80"
										name={prod.Name}
										width="120"
										image={prod.ProductImg}
										alt={prod.Name}
									/>
									<CardContent>
										<Typography gutterBottom variant="h5" component="div">
											{prod.Name}
										</Typography>
										<Typography variant="h8" color="text.secondary">
											<b>Brand:</b>
											{prod.Brand}
											<br />
										</Typography>
										<Typography variant="h8" color="text.secondary">
											<b>Ratting:{prod.Ratting}</b>
										</Typography>
									</CardContent>
								</CardActionArea>
								<Button
									variant="text"
									onClick={() => {
										delete prod.Name;
										delete prod.ProductImg;
										console.log(prod);
									}}
								>
									Button
								</Button>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
}
