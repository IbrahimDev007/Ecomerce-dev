import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function Dashbord() {
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
			<div className="font-xl h-cover w-full bg-gray-400 text-white">
				<DashboardIcon />
				Dashboard
			</div>
			<div className="flex flex-row ">
				<div className="float-left  w-3/5 items-center flex-col  m-2  ">
					<Card sx={{ maxWidth: 350 }} className="m-2">
						<CardActionArea>
							<CardMedia
								component="img"
								height="80"
								width="120"
								image="https://cdn.pixabay.com/photo/2019/05/07/09/29/chameleon-4185364_960_720.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<Card sx={{ maxWidth: 350 }} className="m-2">
						<CardActionArea>
							<CardMedia
								component="img"
								height="20"
								width="100"
								image="https://cdn.pixabay.com/photo/2019/05/07/09/29/chameleon-4185364_960_720.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
				<div className="float-right  w-2/5 items-center flex-col flex  m-2 ">
					<Card sx={{ maxWidth: 350 }} className="m-2">
						<CardActionArea>
							<CardMedia
								component="img"
								height="140"
								image="https://cdn.pixabay.com/photo/2019/05/07/09/29/chameleon-4185364_960_720.jpg"
								alt="green iguana"
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									Lizard
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
			</div>
		</div>
	);
}
