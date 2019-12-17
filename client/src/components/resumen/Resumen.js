import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { mainListItems } from "../ficha/listItems";
import InfoPerfil from "./InfoResumen";
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

  let id = window.location.pathname.substring(9);

  // //llamado Api
  // useEffect(() => {
  //   let datos = api.getJugador({ player_id: id }).then(res => {
  //     // console.log("res", res.body.player);
  //     setState(res.body.player);
  //   });
  // }, []);

  // console.log("estado", state);

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <List>{mainListItems}</List>
      </Grid>

      <Grid item xs={10} align="center">
        <div className={classes.appBarSpacer} />

        <Grid>
          <Paper className={classes.paper}>
            <InfoPerfil data={state} />
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
