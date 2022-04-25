import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { User } from "./Json/Json";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	display: "flex",
	[theme.breakpoints.down("md")]: {
		height: "100%",
	},
	flexDirection: "column",
	alignItems: "center",
	padding: theme.spacing(2),
	margin: theme.spacing(2),
	height: "100vh",
	color: theme.palette.text.secondary,
}));
export default function Store() {
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
			<div className="font-xl  h-full w-full justify-between items-center flex  bg-gray-400 text-white">
				<div className="w-1/12 sm:w-1/4">
					<LocalGroceryStoreIcon className="m-1" />
					Store
				</div>
				<div className=" flex-row flex h-full items-center justify-end w-11/12  ">
					<input
						type="search"
						name=""
						id=""
						placeholder="Search"
						className=" m-1 w-7/12 p-2 border rounded bg-gray-600 w-4/12  outline-none  focus:outline "
					/>
					<button className="bg-blue-400  w-fit h-full border rounded outline-blue-400 m-2 p-1 font-lg">
						<SearchIcon />
						Search
					</button>
				</div>
			</div>

			<div className="flex justify-center">
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={2} className="min-h-screen">
							<div p={1} m={1} bgcolor="background.paper">
								<Item>
									<form className="p-1">
										<h1 className="font-xl">
											<b>Catagory</b>
										</h1>
										<input
											type="checkbox"
											className="m-2"
											id=""
											name=""
											value=""
										/>
										<label>Mobile</label>
										<br />
										<input
											type="checkbox"
											className="m-2"
											id=""
											name=""
											value=""
										/>
										<label>Electronics</label>
										<br />
										<h1>
											<b>Brand</b>
										</h1>
										<input
											type="checkbox"
											className="m-2"
											id=""
											name=""
											value=""
										/>
										<label>Apple</label>
										<br />
										<input
											type="checkbox"
											className="m-2"
											id=""
											name=""
											value=""
										/>
										<label>Samsung</label>
										<br />
										<input
											type="checkbox"
											className="m-2"
											id=""
											name=""
											value=""
										/>
										<label>Xiomi</label>
										<br />

										<br />
									</form>
								</Item>
							</div>
						</Grid>
						<Grid xs={12} md={10}>
							<div
								className="m-8 p-2 h-full w-max-xl flex items-center justify-center flex-wrap"
								bgcolor="background.paper"
							>
								{User.Store.map((store, index) => (
									<Item style={{ height: "450px" }}>
										<img
											src={store.ProductImg}
											alt={store.Name}
											id={store.Id}
											name={store.Name}
											className="w-60 h-60 object-cover"
										/>

										<div className="flex flex-col w-full h-auto m-2 p-2 items-center">
											<h1 className="font-3xl ">{store.Name}</h1>
											<h3>
												<Typography gutterBottom variant="h5" component="div">
													{store.Name}
												</Typography>
												<Typography variant="h8" color="text.secondary">
													<b>Brand:</b>
													{store.Brand}
													<br />
												</Typography>
												<Typography variant="h8" color="text.secondary">
													<b>Ratting:{store.Ratting}</b>
												</Typography>
											</h3>
											<div className="flex justify-between ">
												<Button>Buy</Button>

												<Button>Cart</Button>
											</div>
										</div>
									</Item>
								))}
							</div>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
}
