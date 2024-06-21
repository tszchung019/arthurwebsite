import React from 'react';
import '../css/styles.css';
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	return (
		<div>
			<div>
				{isMobile ? (
					<DrawerComponent />
				) : (
					<Navbar />
				)}
			</div>
			<div className="content">
				<h1>About Me</h1>
				<IconButton href="https://www.linkedin.com/in/tsz-chung-chan-59964616b" target="_blank">
					<LinkedInIcon className="muiIcon"/>
				</IconButton>
				<IconButton href="https://github.com/tszchung019" target="_blank">
					<GitHubIcon className="muiIcon"/>
				</IconButton>
				<p>
					As a graduate of Hong Kong University of Science and Technology, I honed my skills as a software solution developer at one of Hong Kong's largest IT services providers. Since relocating to the United Kingdom, I have been freelancing and specializing in web development, machine learning, and data science. With proficiency in multiple programming languages, I have created diverse applications, including Content Management Systems and contextual chatbots.
				</p>
				<p>	
					My versatility as a developer shines in various settings. I have ample experience collaborating with stakeholders, leading junior developers, and driving self-motivated projects. As a problem-solver, I am confident in delivering innovative solutions to industry challenges. I am proactive in keeping up with market trends and the latest technologies, effectively integrating them to excel in my work.
				</p>
				<p>
					Passionate about technology's transformative potential, I enjoy sharing my knowledge and experience in this rapidly evolving field. Engaging in discussions on the latest technologies and economic trends, I explore how technology can enrich our lives. Every day, I am driven by the opportunity to help others achieve their goals through technology.
				</p>
				<p>
					Currently, I am actively seeking opportunities to collaborate with like-minded individuals who share my vision. I believe that together, we can contribute to a more beautiful world through our collective knowledge and efforts. Thank you for your time, and I look forward to connecting with all of you.
				</p>
			</div>
		</div>
	);
};

export default About;
