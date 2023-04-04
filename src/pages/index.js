import React from 'react';
import '../css/styles.css';
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

const Home = () => {
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
				<section>
					<h2>Welcome to my website</h2>
					<p>Hello and welcome to my personal website!</p>
					<p>I'm excited to have you here and to share my passions, ideas, and experiences with you. This website is a space where I can express myself and connect with others who share similar interests.</p>
					<p>On this site, you'll find a variety of topics that I'm passionate about, including web development, machine learning, and investment. My hope is that my content will inspire you, entertain you, and provide you with valuable insights and information.</p>
					<p>Whether you're a long-time reader or a new visitor, I'm grateful for your support and interest in what I have to say. I encourage you to explore the site, leave comments, and connect with me on social media.</p>
					<p>Thank you for visiting, and I hope you enjoy your time here!</p>
				</section>
				<section>
					<h2>Working with me</h2>
					<p>Working as a freelancer, I am eager to work on projects in web development, data analysis, and machine learning. If you are interested, sign up and have a chat with me! I am very happy to discuss with you further!</p>
				</section>
			</div>
		</body>
	);
};

export default Home;
