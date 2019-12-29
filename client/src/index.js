import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
///
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";


import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Landing from "./components/layout/Landing";
import PrivateRoute from "./components/private-route/PrivateRoute";
//////
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Plantel from "./components/plantel/Plantel";
import Dashboard from "./components/dashboard/Dashboard";
import Notfound from "./components/notfound/notFound";
///LEO CULIAO///
import HistorialLesiones from "./components/historiallesiones/HistorialLesiones";
import Resumen from "./components/resumen/Resumen";
import Ficha from "./components/ficha/Ficha";///EX-DASHBOARD.LP
////URLEY CULIAO/////
import AddPlayer from "./components/ingreso/AddPlayer";

// ReactDOM.render( <App/> , document.getElementById('root'));




// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const routing = (
  <Provider store={store}>
  <Router>
    <div className="body">
      <div className="header">
        <Header />
      </div>

      <div className="content">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <PrivateRoute exact path="/plantel" component={Plantel} />
          <PrivateRoute path="/plantel/ingreso" component={AddPlayer} />
          <PrivateRoute exact path="/plantel/:jugador/resumen" component={Resumen} />
          <PrivateRoute path="/plantel/:jugador/ficha" component={Ficha} />
          <PrivateRoute path="/plantel/:jugador/historial" component={HistorialLesiones} />

          
          <Route component={Notfound} />
          
        </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  </Router>
  </Provider>
);


ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
