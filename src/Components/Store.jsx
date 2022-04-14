import React from 'react'

export default function Store() {
  return (
    <div style={{ fontFamily: "roboto" }}>
			<nav className="font-lg w-full items-center text-white flex font-bold justify-start bg-blue-700 sticky">
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
            </div>
  )
}
