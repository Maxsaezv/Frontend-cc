import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Login from "./components/login/Login";
import Plantel from "./components/plantel/Plantel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Notfound from "./components/notfound/notFound";
import Jugador from "./components/jugador/Jugador";
import Informe from "./components/informe/Informe";
import Dashboard from "./components/dashboard/Dashboard";
import HistorialLesiones from "./components/historiallesiones/HistorialLesiones";
import PerfilJugador from "./components/perfil/PerfilJugador";
import testeo from "./components/test/testeo"

// ReactDOM.render( <App/> , document.getElementById('root'));

const routing = (
  <Router>
    <div className="body">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/plantel" component={Plantel} />
          <Route exact path="/test" component={testeo} />
          <Route path="/jugador" component={PerfilJugador} />
          <Route path="/informe" component={Dashboard} />
          <Route path="/historial" component={HistorialLesiones} />
          <Route component={Notfound} />
          
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
