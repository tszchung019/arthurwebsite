import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
		<Nav className="navbar">
			{
				<>
				<Bars />
				<NavMenu>
					<NavLink to='/' activeStyle>Home</NavLink>
					<NavLink to='/about' activeStyle>About</NavLink>
					<NavLink to='/events' activeStyle>Events</NavLink>
					<NavLink to='/projects' activeStyle>My Projects</NavLink>
					<NavLink to='/work' activeStyle>Services</NavLink>
					<NavLink to='/blogs' activeStyle>Blogs</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signup'>Sign Up / Log In</NavBtnLink>
				</NavBtn>
				</>
			}
		</Nav>
		</>
	);
};

export default Navbar;
