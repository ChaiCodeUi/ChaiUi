import React from "react";
import Input01 from "./input-01";

const Sidebar01 = () => {
	return (
		<div id='sidebar' className='sidebar'>
			{
				<Input01/>
			}
			<div className='p-4 '>
				<h2 className='text-lg font-semibold mb-4'>Sidebar Menu</h2>
				<button className='block w-full text-left py-2 hover:bg-gray-100'>
					Home
				</button>
				<button className='block w-full text-left py-2 hover:bg-gray-100'>
					Dashboard
				</button>
				<button className='block w-full text-left py-2 hover:bg-gray-100'>
					Settings
				</button>
				<button className='block w-full text-left py-2 hover:bg-gray-100'>
					Profile
				</button>
			</div>
		</div>
	);
};

export default Sidebar01;
