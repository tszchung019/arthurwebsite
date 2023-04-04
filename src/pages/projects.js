import React from 'react';
import '../css/styles.css';
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

const AnnualReport = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<body>
			<div>
				{isMobile ? (
					<DrawerComponent />
				) : (
					<Navbar />
				)}
			</div>
			<div class="content">
				<h1>My Projects</h1>
				<p>Under Construction...</p>
			</div>
		</body>
	);
};

export default AnnualReport;
