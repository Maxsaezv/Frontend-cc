import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { mainListItems } from './listItems';
//import { secondaryListItems } from './listItems';
import HMPersonal from './HMPersonal';
import HMFamiliar from './HMFamiliar';
import ExFisico from './ExFisico';
/////

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
    <Grid container spacing ={1} >
      <Grid item xs={2}>
        
        <List>{mainListItems}</List>
      </Grid>
      <Grid item xs={10} align='center'>
        <div className={classes.appBarSpacer} />
      
            {/* HMPersonal */}
            <Grid>
              <Paper className={classes.paper}>
                <HMPersonal />
              </Paper>
            </Grid>
            {/* Historia Médica Familiar */}
            <Grid>
              <Paper className={classes.paper}>
                <HMFamiliar />
              </Paper>
            </Grid>
            {/* Examen Físico */}
            <Grid>
              <Paper className={classes.paper}>
                <ExFisico />
              </Paper>
            </Grid>
      </Grid>
    </Grid>

);
}
