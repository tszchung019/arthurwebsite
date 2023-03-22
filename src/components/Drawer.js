import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
              backgroundColor: "#3f99bf",
              width: "250px"
            },
          }}
    >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/">Home</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/about">About</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/events">Events</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/projects">Projects</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/work">Services</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/blogs">Blogs</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link className="navBarItem" to="/signup">Sign Up / Log In</Link>
            </ListItemText>
        </ListItem>
        </List>
    </Drawer>
    <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
    </IconButton>
    </>
);
}
export default DrawerComponent;