import React, { useState } from "react";
import {
  Box,
  Drawer,
  Avatar,
  List,
  ListItemButton,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";

export default function SideDrawer() {
  const [open, setOpen] = useState(false);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <Avatar sx={{ bgcolor: deepOrange[500], marginRight: 2 }}>
          {loggedInUser.user_name.charAt(0)}
        </Avatar>
        <Typography variant="h6">{loggedInUser.user_name}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        <ListItemButton href="/profile">Profile</ListItemButton>
        <ListItemButton href="/my-bookshelf">My Bookshelf</ListItemButton>
        <ListItemButton href="/logout">Logout</ListItemButton>
      </Box>
      <Divider />
      <List>
        <ListItemButton href="/">Home</ListItemButton>
        <ListItemButton href="/ranking">Ranking List</ListItemButton>
        <ListItemButton href="/boys-novel">Boys Novels</ListItemButton>
        <ListItemButton href="/girls-novel">Girls Novels</ListItemButton>
        <ListItemButton href="/full-novel">Complete Novels</ListItemButton>
        <ListItemButton href="/novel-category">Novel Categories</ListItemButton>
        <ListItemButton href="/my-bookshelf">My Bookshelf</ListItemButton>
        <ListItemButton href="/suggestions">Suggestions</ListItemButton>
        <ListItemButton href="/logout"><Logout /> Logout</ListItemButton>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
