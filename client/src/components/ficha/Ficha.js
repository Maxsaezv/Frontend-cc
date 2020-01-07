import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu from '../resumen/listItems';
import HMPersonal from './HMPersonal';
import HMFamiliar from './HMFamiliar';
import ExFisico from './ExFisico';
import { useState, useEffect } from 'react';

import api from "../../api/api"
import { CircularProgress } from '@material-ui/core';


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

export default function Resumen(props) {
  const classes = useStyles();

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);

  let id = window.location.pathname.substring(9, 33);

  async function loadData() {
    try {
      setLoading(true);
      const datos = await api.getJugador({ player_id: id }).then(res => {
        setState(res.body.player.ficha);
        console.log("carga props ok")
      }).catch(err => {
        console.log(err)
      });
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {

    loadData()

  }, []);

  return (
    state.historiamedicapersonal === undefined ? <CircularProgress /> :
      <Grid container spacing={1} style={{ maxWidth: "90%" }}>
        <Grid item xs={2}>
          <Menu />

        </Grid>
        <Grid item xs={10} align='center'>
          <div className={classes.appBarSpacer} />

          {/* HMPersonal */}
          <Grid>
            <Paper className={classes.paper}>
              <HMPersonal data={state} />
            </Paper>
          </Grid>
          {/* Historia Médica Familiar */}
          <Grid>
            <Paper className={classes.paper}>
              <HMFamiliar data={state} />
            </Paper>
          </Grid>
          {/* Examen Físico */}
          <Grid>
            <Paper className={classes.paper}>
              <ExFisico data={state} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

  );
}
