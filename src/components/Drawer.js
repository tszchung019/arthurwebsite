import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import { Link } from "react-router-dom";

function DrawerComponent() {
const [openDrawer, setOpenDrawer] = useState(false);
return (
    <>
    <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
    >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/">Home</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/about">About</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/events">Events</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/projects">Projects</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/work">Services</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/blogs">Blogs</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/signup">Sign Up / Log In</Link>
            </ListItemText>
        </ListItem>
        </List>
    </Drawer>
    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
    </IconButton>
    </>
);
}
export default DrawerComponent;