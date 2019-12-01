import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import LesionIcon from '@material-ui/icons/LocalHospital';
import SearchIcon from '@material-ui/icons/Search';
import './listItems.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export const mainListItems = (
  <div className= 'NavBar'>
    <Link to="/jugador">
     <ListItem button >
       <ListItemIcon>
         <SearchIcon />
       </ListItemIcon>
       <ListItemText primary="Resumen Jugador" />
     </ListItem>
    </Link>
  
    <Link to="/plantel/informe">
     <ListItem button>
       <ListItemIcon>
         <ListIcon />
       </ListItemIcon>
       <ListItemText primary="Ficha Médica"/>
     </ListItem>
    </Link>

    <Link to="/historial">
     <ListItem button>
       <ListItemIcon>
         <LesionIcon />
       </ListItemIcon>
       <ListItemText primary="Historial Lesiones" />
     </ListItem>
    </Link>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );