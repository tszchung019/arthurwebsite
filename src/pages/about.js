import React from 'react';
import '../css/styles.css';
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

const About = () => {
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
				<h1>About Me</h1>
				<p>
					As a graduate of Hong Kong University of Science and Technology, I spent three years honing my skills as a software solution developer for one of the largest IT services providers in Hong Kong. Since relocating to the United Kingdom, I have been freelancing and specializing in web development, machine learning, and data science. I have a wide range of programming language proficiency and have developed various applications, from Content Management Systems to contextual chatbots.
				</p>
				<p>	
					I consider myself a well-rounded developer, thriving in a variety of settings. I have extensive experience working on projects that require stakeholder communication, leading junior developers, and self-motivated projects. As a problem-solver, I am confident in my ability to develop innovative solutions for industry challenges.
				</p>
				<p>
					I am passionate about technology's ability to change the world, and I enjoy sharing my knowledge and experience in this rapidly evolving field. I love discussing the latest technologies and economic trends and exploring the benefits technology can bring to our lives. Helping people achieve their goals through technology is something that drives me every day.
				</p>
				<p>
					At the moment, I am actively seeking opportunities to collaborate with like-minded individuals who share my vision. I believe that together, we can create a more beautiful world through our collective knowledge and efforts. Thank you for taking the time to listen, and I am excited to connect with all of you.
				</p>
			</div>
		</body>
	);
};

export default About;
