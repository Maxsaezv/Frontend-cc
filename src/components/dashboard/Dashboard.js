import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { mainListItems } from '../dashboard/listItems';
//import { secondaryListItems } from './listItems';
import HMPersonal from '../dashboard/HMPersonal';
import HMFamiliar from '../dashboard/HMFamiliar';
import ExFisico from '../dashboard/ExFisico';



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
    <Grid container spacing ={1} >
      <Grid item xs={2}>
        
        <List>{mainListItems}</List>
      </Grid>
      <Grid item xs={10} align='center'>
      
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