import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu  from "../resumen/listItems"
// import { mainListItems } from '../ficha/listItems';
//import { secondaryListItems } from './listItems';
import Tablita from '../historiallesiones/Tablita';

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

export default function Resumen() {
  const classes = useStyles();

  return (
    <Grid container spacing ={1} style={{ maxWidth: "90%" }} >
      <Grid item xs={2}>
        <Menu />
      </Grid>

      <Grid item xs = {10} align='center'>
         <div className={classes.appBarSpacer} />
           <Grid>
                 <Paper className={classes.paper}>
                   <Tablita />
                 </Paper>
               </Grid>
      </Grid>
    </Grid>
);
}