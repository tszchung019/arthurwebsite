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
					<NavLink to='/' >Home</NavLink>
					<NavLink to='/about' >About</NavLink>
					<NavLink to='/events' >Events</NavLink>
					<NavLink to='/projects' >My Projects</NavLink>
					<NavLink to='/work' >Services</NavLink>
					<NavLink to='/blogs' >Blogs</NavLink>
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
				</NavMenu>
				<NavBtn>
					<NavBtnLink to='/signup'>Subscribe</NavBtnLink>
				</NavBtn>
				</>
			}
		</Nav>
		</>
	);
};

export default Navbar;
