import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Home from '@material-ui/icons/Home';
import Favorite from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "#000000",
  },
  menuButton: {
    marginRight: theme.spacing(-3),
    color: "#e0e0e0",
  },
  title: {
    flexGrow: 1,
    color: "#e0e0e0",
  },
  list: {
    width: 250,
    color: "#000000",
  },
  bar: {
      color: "#212121",
  },
}));

const MenuHead = styled.p`
  font-family: Gill Sans Extrabold, sans-serif;
  font-size: 20pt;
  padding: 0;
  text-align: center;
`


export default function NavBar(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <MenuHead>
      <Favorite />  
        { " " + props.title } 
      </MenuHead>
      <Divider />
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary={'Example Quiz'} />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to='/contact'>
          <ListItemIcon><ChatBubbleOutline /></ListItemIcon>
          <ListItemText primary={'Contact'} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className={classes.bar} style={{ background: '#212121', textAlign: 'center' }}>
      <Toolbar style={{color: "#212121"}}>
        <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu" onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h2" style={{fontFamily: "Comfortaa", fontSize: "42px"}} className={classes.title}>
          {"Aristotle"}
        </Typography>
      </Toolbar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} className={ classes.drawer }>
        {sideList('left')}
      </Drawer>
    </AppBar>
  );
}