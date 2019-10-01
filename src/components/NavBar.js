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
import Phone from '@material-ui/icons/Phone';
import Favorite from '@material-ui/icons/FavoriteBorderRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  }
}));

const MenuHead = styled.p`
  font-family: Gill Sans Extrabold, sans-serif;
  font-size: 20pt;
  padding: 0;
  margin-left: 20px
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
        <ListItem button component={Link} to='/about'>
          <ListItemIcon><AssignmentIcon /></ListItemIcon>
          <ListItemText primary={'Example Quiz'} />
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to='/contact'>
          <ListItemIcon><Phone /></ListItemIcon>
          <ListItemText primary={'Contact'} />
        </ListItem>
      </List>
    </div>
  );

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {/* { props.title } */}
          </Typography>
        </Toolbar>
        <Drawer open={state.left} onClose={toggleDrawer('left', false)} className={ classes.drawer }>
          {sideList('left')}
        </Drawer>
      </AppBar>
  );
}