import React from "react";
import MaterialTable from "material-table";
import "./Tabla.css";

import CheckIcon from "@material-ui/icons/Check";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";


// import {connect} from "react-redux";

const Tabla = ({ data, ref = React.createRef() }) => (
  <MaterialTable
    style={{ minWidth: "85%" }}
    title=""
    tableRef={ref}
    columns={[
      {
        title: "Posición",
        field: "position",
        cellStyle: { fontSize: 18 },
        render: rawData => {
          if (rawData.position === 0) {
            return "PO";
          } else if (rawData.position === 1) {
            return "DF";
          } else if (rawData.position === 2) {
            return "MC";
          } else if (rawData.position === 3) {
            return "DC";
          }
        }
      },
      { title: "Nombre", field: "name" },
      { title: "Edad", field: "edad", type: "numeric" },
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
          if (rawData.status === 0) {
            return <CheckIcon />;
          } else {
            return <LocalHospitalIcon />;
          }
        }
      }
    ]}
    data={data}
    options={{
      actionsColumnIndex: -1,
      paging: false,
      rowStyle: rowData => ({
        backgroundColor:
          rowData.status === 0
            ? ""
            : rowData.status === 1
            ? "lightyellow"
            : "#FF5A55"
      }),
      headerStyle: { fontSize: 18 },
      sorting: true
    }}
    actions={[
      {
        icon: "add",
        tooltip: "Add User",
        isFreeAction: true,
        onClick: (e) => window.location.href = '/plantel/ingreso'
      },
      {
        icon: "refresh",
        tooltip: "Refresh Data",
        isFreeAction: true,
        onClick: () => ref.current
      }
    ]}
  />
);

// const mapStateToProps = state =>({
//           plantel : state.plantel
//         })

// const mapDispatchToProps = (dispatch) => ({})

export default Tabla;

// class Tabla extends Component {
//   constructor(props) {
//     super(props);
//     this.tableRef = React.createRef();
//   }

//   render() {
//     return (
//       <MaterialTable
//         style={{ minWidth: "85%" }}
//         title=""
//         tableRef={this.tableRef}
//         columns={[
//           {
//             title: "Posición",
//             field: "position",
//             cellStyle: { fontSize: 18 },
//             render: rawData => {
//               if (rawData.position === 0) {
//                 return "PO";
//               } else if (rawData.position === 1) {
//                 return "DF";
//               } else if (rawData.position === 2) {
//                 return "MC";
//               } else if (rawData.position === 3) {
//                 return "DC";
//               }
//             }
//           },
//           { title: "Nombre", field: "nombre" },
//           { title: "Edad", field: "edad", type: "numeric" },
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
//               if (rawData.status === 0) {
//                 return <CheckIcon />;
//               } else {
//                 return <LocalHospitalIcon />;
//               }
//             }
//           }
//         ]}

//         data={{plantel}}

//         options={{
//           actionsColumnIndex: -1,
//           paging: false,
//           rowStyle: rowData => ({
//             backgroundColor:
//               rowData.status === 0
//                 ? ""
//                 : rowData.status === 1
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
//             onClick: e => console.log(e)
//           },
//           {
//             icon: "refresh",
//             tooltip: "Refresh Data",
//             isFreeAction: true,
//             onClick: () => this.tableRef.current
//           }
//         ]}
//       />
//     );
//   }

// }

// data={[
//   {
//     id: 1,
//     nombre: "Leo",
//     position: 0, // 0 : PO / 1 : DF / 2 : MC / 3 : DC
//     // formato YYYY-MM-DD
//     edad: 18,
//     status: 0 // 0 : Disponible / 1 : Reintegro / 2 : Lesionado / 3 : Ausente
//   },
//   {
//     id: 2,
//     nombre: "Diego",
//     position: 1,
//     edad: 20,
//     lesion: "2019-8-8",
//     status: 1
//   },
//   {
//     id: 3,
//     nombre: "Yerson",
//     position: 3,
//     edad: 23,
//     lesion: "2019-9-8",
//     status: 3
//   },
//   {
//     id: 1,
//     nombre: "Maxi",
//     position: 3,
//     edad: 26,
//     status: 0
//   }
// ]}
