import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { mainListItems } from '../dashboard/listItems';
import InfoPerfil from './InfoPerfil';
import './PerfilJugador.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <Grid container spacing ={3} >
      <Grid item xs={2}>
        <List >{mainListItems}</List>
      </Grid>
      <Grid item xs = {4} align='center'>
         <img
                 src= "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10848016_1696057350621165_3676383896235917389_n.jpg?_nc_cat=106&_nc_ohc=utfjziSjXccAQmUdNhRQs9UTXZw33x6NFjo0tAph6D4WZb4KGUN1PIwJw&_nc_ht=scontent-sjc3-1.xx&oh=ca6a9594c111ee8b29f88c7007341bca&oe=5E6F3664"
                 alt="avatar"
                 className="img-avatar"
                 width= '320px'
                 height= '320px'
               />
      </Grid>
      <Grid item xs ={6}>
        <InfoPerfil />
      </Grid>
      

    </Grid>

);
}

   