import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DashboardIcon from "@mui/icons-material/Dashboard";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
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
					<DashboardIcon className="m-1" />
					Dashbord
				</h3>
				<h4 className="m-1 p-2">
					<LocalGroceryStoreIcon className="m-1" />
					Store
				</h4>
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

			<div className="flex flex-row justify-center">
				<Box sx={{ flexGrow: 1 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={2}>
							<div p={1} m={1} bgcolor="background.paper">
								<Item>
									<form className="p-1">
										<h1 className="font-xl">
											<b>Catagory</b>
										</h1>
										<input type="checkbox" id="" name="" value="" />
										<label>Mobile</label>
										<br />
										<input type="checkbox" id="" name="" value="" />
										<label>Electronics</label>
										<br />
										<h1>
											<b>Brand</b>
										</h1>
										<input type="checkbox" id="" name="" value="" />
										<label>Apple</label>
										<br />
										<br />
									</form>
								</Item>
							</div>
						</Grid>
						<Grid  xs={12} md={10}>
							<div
								display="flex"
								p={1}
								m={1}
								bgcolor="background.paper"
								className="flex flex-row flex-wrap"
							>
								<div className="m-8 p-2 h-full w-56 flex flex-col items-center">
									<img
										src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
										alt=""
										className="w-48 h-auto"
									/>

									<div className="flex flex-col w-full h-auto m-2 p-2 items-center">
										<h1 className="font-3xl">Card Title</h1>
										<h3>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Natus doloribus hic quasi veniam quos suscipit dolore,
											quae quis minima libero est earum similique, fuga placeat
											omnis eius voluptas reprehenderit eum.
										</h3>
									</div>
								</div>
								<div className="m-8 p-2 h-full w-56 flex flex-col items-center">
									<img
										src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
										alt=""
										className="w-48 h-auto"
									/>

									<div className="flex flex-col w-full h-auto m-2 p-2 items-center">
										<h1 className="font-3xl">Card Title</h1>
										<h3>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Natus doloribus hic quasi veniam quos suscipit dolore,
											quae quis minima libero est earum similique, fuga placeat
											omnis eius voluptas reprehenderit eum.
										</h3>
									</div>
								</div>
								<div className="m-8 p-2 h-full w-56 flex flex-col items-center">
									<img
										src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
										alt=""
										className="w-48 h-auto"
									/>

									<div className="flex flex-col w-full h-auto m-2 p-2 items-center">
										<h1 className="font-3xl">Card Title</h1>
										<h3>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Natus doloribus hic quasi veniam quos suscipit dolore,
											quae quis minima libero est earum similique, fuga placeat
											omnis eius voluptas reprehenderit eum.
										</h3>
									</div>
								</div>
								<div className="m-8 p-2 h-full w-56 flex flex-col items-center">
									<img
										src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
										alt=""
										className="w-48 h-auto"
									/>

									<div className="flex flex-col w-full h-auto m-2 p-2 items-center">
										<h1 className="font-3xl">Card Title</h1>
										<h3>
											Lorem ipsum dolor, sit amet consectetur adipisicing elit.
											Natus doloribus hic quasi veniam quos suscipit dolore,
											quae quis minima libero est earum similique, fuga placeat
											omnis eius voluptas reprehenderit eum.
										</h3>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</Box>
			</div>
		</div>
	);
}
