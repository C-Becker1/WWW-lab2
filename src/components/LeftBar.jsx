import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from '@mui/icons-material/Folder';
import CloudIcon from '@mui/icons-material/Cloud';
import HomeIcon from '@mui/icons-material/Home';

import { Link } from "gatsby";


export const mainListItems = (
  <div>
    <ListItem button key="home" component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button key="local" component={Link} to="/local">
      <ListItemIcon>
        <FolderIcon />
      </ListItemIcon>
      <ListItemText primary="Local Storage" />
    </ListItem>
    <ListItem button key="cloud" component={Link} to="/cloudinary">
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="Cloud Storage" />
    </ListItem>
  </div>
)