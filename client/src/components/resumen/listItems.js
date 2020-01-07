import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import LesionIcon from "@material-ui/icons/LocalHospital";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export default function Menu(props) {
  let url = window.location.pathname.substring(0, 33);

  return (
    <React.Fragment>
      <div className="NavBar" align="center">
        <img
          src = "https://i.pinimg.com/originals/d1/ea/63/d1ea63758ec65e6d6db3545ff6dff15f.png"
          // src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/10848016_1696057350621165_3676383896235917389_n.jpg?_nc_cat=106&_nc_ohc=utfjziSjXccAQmUdNhRQs9UTXZw33x6NFjo0tAph6D4WZb4KGUN1PIwJw&_nc_ht=scontent-sjc3-1.xx&oh=ca6a9594c111ee8b29f88c7007341bca&oe=5E6F3664"
          alt="avatar"
          className="img-avatar"
          width="90%"
          hspace="1"
        />

        <Link to={url + "/resumen"}>
          <ListItem button position="sticky">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Resumen Jugador" />
          </ListItem>
        </Link>

        <Link to={url + "/ficha"}>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Ficha Médica" />
          </ListItem>
        </Link>

        <Link to={url + "/historial"}>
          <ListItem button>
            <ListItemIcon>
              <LesionIcon />
            </ListItemIcon>
            <ListItemText primary="Historial Lesiones" />
          </ListItem>
        </Link>
      </div>
    </React.Fragment>
  );
}
