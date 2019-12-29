import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Menu from "./listItems";
import InfoResumen from "./InfoResumen";
import "./Resumen.css";
import LesionActual from "./LesionActual";
import api from "../../api/api";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  const [state, setState] = useState([]);
  //obtener ID

  let id = window.location.pathname.substring(9, 33);
  // console.log('resuemen',id)

  //llamado Api
  useEffect(() => {
    let datos = api.getJugador({ player_id: id }).then(res => {
      setState(res.body.player);
    }).catch(err=>{
      console.log(err)
    });
  }, []);

  // console.log("estado", state);

  return (
    <Grid container spacing={1} style={{ maxWidth: "90%" }}>
      <Grid item xs={2}>
        <Menu />
      </Grid>

      <Grid item xs={10} align="center">
        <div className={classes.appBarSpacer} />

        <Grid>
          <Paper className={classes.paper}>
            <InfoResumen data={state} />
          </Paper>
        </Grid>

        <Grid>
          <Paper className={classes.paper}>
            <LesionActual />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}
