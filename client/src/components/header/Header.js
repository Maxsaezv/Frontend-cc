import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Button color="inherit">
          <Link href="javascript:window.history.back()" color='inherit'>
          <ArrowBackIcon />
          </Link>
          </Button>
          <Typography variant="h6" className={classes.title}>
            Medical Management Reporter
          </Typography>
          <Button color="inherit">
            <Link href='/plantel' color="inherit">
            <GroupIcon />Plantel
              </Link>
          </Button>
          <Button color="inherit">
            <Link href='/dashboard' color="inherit">
            <HomeIcon />Inicio
              </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};