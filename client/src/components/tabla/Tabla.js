import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import "./Tabla.css";

import CheckIcon from "@material-ui/icons/Check";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import api from "../../api/api";

export default function Tabla(props) {
  const ref = React.createRef()
  const [players, setPlayers] = useState([]);

  let url = window.location.pathname;
  console.log("URL TABLA", url);

  useEffect(() => {
    let lista = api
      .getActivos()
      .then(res => {
        setPlayers(res.body);
        console.log(res.body)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <MaterialTable
      onRowClick={(evt, selectedRow) => {
        let id = selectedRow._id;
        window.location.href = url + "/" + id + "/resumen";
      }}
      style={{ minWidth: "85%" }}
      title={"Plantel Oficial Colo Colo " + new Date().getFullYear()}
      tableRef={ref}
      columns={[
        {
          title: "Posición",
          field: "posicion",
          cellStyle: { fontSize: 18 }
        },
        { title: "Nombre", field: "nombre", cellStyle: { fontSize: 18 } },
        {
          title: "Edad",
          field: "nacimiento",
          type: "date",
          render: rawData => {
            let hoy = new Date();
            let inicio = new Date(rawData.nacimiento);
            if (rawData.nacimiento === undefined) {
              return "-";
            } else {
              return (((hoy - inicio) / 86400000) / 365).toFixed(2).slice(0, 2) + " Años";
            }
          }
        },
        {
          title: "Dias Fuera",
          field: "lesion",
          type: "date",
          render: rawData => {
            let hoy = new Date();
            let inicio = new Date(rawData.lesion);
            if (rawData.lesion === undefined) {
              return "-";
            } else {
              return ((hoy - inicio) / 86400000).toFixed(0);
            }
          }
        },
        {
          title: "Status",
          field: "status",
          render: rawData => {
            if (rawData.status === "Disponible") {
              return <CheckIcon />;
            } else {
              return <LocalHospitalIcon />;
            }
          }
        }
      ]}
      data={players}
      options={{
        actionsColumnIndex: -1,
        paging: false,
        rowStyle: rowData => ({
          backgroundColor:
            rowData.status === "Disponible"
              ? ""
              : rowData.status === "Reintegro"
                ? "lightyellow"
                : "#FF5A55"
        }),
        headerStyle: { fontSize: 18 },
        sorting: true,

      }}
      actions={[
        {
          icon: "add",
          tooltip: "Add User",
          isFreeAction: true,
          onClick: e => (window.location.href = "/plantel/ingreso")
        },
        {
          icon: "refresh",
          tooltip: "Refresh Data",
          isFreeAction: true,
          onClick: () => window.location.reload()
        }
      ]}
    />
  );
}




// class Tabla extends Component {
//   constructor(props) {
//     super(props);
//     this.tableRef = React.createRef();
//     this.state = {
//       players: []
//     };
//   }

// getPlayers = () => {
//   console.log("Hello, get all players from API");
//   api
//     .getAll()
//     .then(res => {
//       let data = res.body;
//       this.setState({
//         players: data
//       });
//       console.log("Api");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// render() {
// console.log("state", this.state);
// let url = window.location.pathname;
// console.log("URL TABLA", url);
//     return (
//       <MaterialTable
//         onRowClick={(evt, selectedRow) => {
//           let id = selectedRow._id;
//           window.location.href = url + "/" + id + "/resumen";
//         }}
//         style={{ minWidth: "85%" }}
//         title={"Plantel Oficial Colo Colo " + new Date().getFullYear()}
//         tableRef={this.tableRef}
//         columns={[
//           {
//             title: "Posición",
//             field: "posicion",
//             cellStyle: { fontSize: 18 }
//           },
//           { title: "Nombre", field: "nombre" },
//           {
//             title: "Edad",
//             field: "nacimiento",
//             type: "date",
//             render: rawData => {
//               let hoy = new Date();
//               let inicio = new Date(rawData.nacimiento);
//               if (rawData.nacimiento === undefined) {
//                 return "-";
//               } else {
//                 return ((hoy - inicio) / 86400000 / 365).toFixed(1) + " Años";
//               }
//             }
//           },
//           {
//             title: "Dias Fuera",
//             field: "lesion",
//             type: "date",
//             render: rawData => {
//               let hoy = new Date();
//               let inicio = new Date(rawData.lesion);
//               if (rawData.lesion === undefined) {
//                 return "-";
//               } else {
//                 return ((hoy - inicio) / 86400000).toFixed(0);
//               }
//             }
//           },
//           {
//             title: "Status",
//             field: "status",
//             render: rawData => {
//               if (rawData.status === "Disponible") {
//                 return <CheckIcon />;
//               } else {
//                 return <LocalHospitalIcon />;
//               }
//             }
//           }
//         ]}
//         data={this.state.players}
//         options={{
//           actionsColumnIndex: -1,
//           paging: false,
//           rowStyle: rowData => ({
//             backgroundColor:
//               rowData.status === "Disponible"
//                 ? ""
//                 : rowData.status === "Reintegro"
//                 ? "lightyellow"
//                 : "#FF5A55"
//           }),
//           headerStyle: { fontSize: 18 },
//           sorting: true
//         }}
//         actions={[
//           {
//             icon: "add",
//             tooltip: "Add User",
//             isFreeAction: true,
//             onClick: e => (window.location.href = "/plantel/ingreso")
//           },
//           {
//             icon: "refresh",
//             tooltip: "Refresh Data",
//             isFreeAction: true,
//             onClick: () => this.getPlayers()
//           }
//         ]}
//       />
//     );
//   }
// }

// export default Tabla;

// const Tabla = ({ data, ref = React.createRef() }) => (
//   <MaterialTable
//     style={{ minWidth: "85%" }}
//     title=""
//     tableRef={ref}
//     columns={[
//       {
//         title: "Posición",
//         field: "position",
//         cellStyle: { fontSize: 18 },
//         render: rawData => {
//           if (rawData.position === 0) {
//             return "PO";
//           } else if (rawData.position === 1) {
//             return "DF";
//           } else if (rawData.position === 2) {
//             return "MC";
//           } else if (rawData.position === 3) {
//             return "DC";
//           }
//         }
//       },
//       { title: "Nombre", field: "nombre" },
//       { title: "Edad", field: "edad", type: "numeric" },
//       {
//         title: "Dias Fuera",
//         field: "lesion",
//         type: "date",
//         render: rawData => {
//           let hoy = new Date();
//           let inicio = new Date(rawData.lesion);
//           if (rawData.lesion === undefined) {
//             return "-";
//           } else {
//             return ((hoy - inicio) / 86400000).toFixed(0);
//           }
//         }
//       },
//       {
//         title: "Status",
//         field: "status",
//         render: rawData => {
//           if (rawData.status === 0) {
//             return <CheckIcon />;
//           } else {
//             return <LocalHospitalIcon />;
//           }
//         }
//       }
//     ]}
//     data={data}
//     options={{
//       actionsColumnIndex: -1,
//       paging: false,
//       rowStyle: rowData => ({
//         backgroundColor:
//           rowData.status === 0
//             ? ""
//             : rowData.status === 1
//             ? "lightyellow"
//             : "#FF5A55"
//       }),
//       headerStyle: { fontSize: 18 },
//       sorting: true
//     }}
//     actions={[
//       {
//         icon: "add",
//         tooltip: "Add User",
//         isFreeAction: true,
//         onClick: (e) => window.location.href = '/plantel/ingreso'
//       },
//       {
//         icon: "refresh",
//         tooltip: "Refresh Data",
//         isFreeAction: true,
//         onClick: () => ref.current
//       }
//     ]}
//   />
// );
