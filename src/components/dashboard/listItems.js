import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListIcon from '@material-ui/icons/List';
import LesionIcon from '@material-ui/icons/LocalHospital';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Ficha Médica" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LesionIcon />
      </ListItemIcon>
      <ListItemText primary="Historial Lesiones" />
    </ListItem>
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