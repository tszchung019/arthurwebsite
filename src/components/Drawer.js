import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import FolderIcon from '@mui/icons-material/Folder';
import WorkIcon from '@mui/icons-material/Work';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import "../css/styles.css"

function DrawerComponent() {
const [openDrawer, setOpenDrawer] = useState(false);
return (
    <>
    <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: {
              backgroundColor: "#02c2bb",
              width: "250px"
            },
          }}
    >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <HomeIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/">Home</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <InfoIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/about">About</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <EventIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/events">Events</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <FolderIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/projects">Projects</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <WorkIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/work">Services</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ArticleIcon className="navBarIcon"/>
            <ListItemText>
            <Link className="navBarItem" to="/blogs">Blogs</Link>
            </ListItemText>
        </ListItem>
        <ListItem id="signupButton" onClick={() => setOpenDrawer(false)}>
            <PeopleIcon className="navBarIcon"/>
            <ListItemButton>
            <Link className="navBarButton" to="/signup">Subscribe</Link>
            </ListItemButton>
        </ListItem>
        </List>
    </Drawer>
    <IconButton id="menuIcon" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
    </IconButton>
    </>
);
}
export default DrawerComponent;