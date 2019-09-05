import React, { Component } from "react";
import MaterialTable from "material-table";
import "./Tabla.css";

export default class Tabla extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  render() {
    return (
      <MaterialTable
        style={{ minWidth: "85%" }}
        title=""
        tableRef={this.tableRef}
        columns={[
          { title: "Posición", field: "position", cellStyle: { fontSize: 18 } },
          { title: "Nombre", field: "nombre" },
          { title: "Edad", field: "edad", type: "numeric" },
          { title: "Status", field: "status" }
        ]}
        data={[
          { nombre: "Leo", position: "PO", edad: 18, status: "Disponible" },
          { nombre: "Diego", position: "DF", edad: 20, status: "Reintegro" },
          { nombre: "Yerson", position: "MC", edad: 23, status: "Lesionado" },
          { nombre: "Maxi", position: "DL", edad: 26, status: "Disponible" }
        ]}
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
          headerStyle: { fontSize: 18 }
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit User",
            onClick: (e, rowData) => console.log(e, rowData)
          },
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: e => console.log(e)
          },
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => this.tableRef.current
          },
          {
            icon: "delete",
            tooltip: "Borrar",
            onClick: (e, rowData) => console.log(e, rowData)
          }
        ]}
      />
    );
  }
}
