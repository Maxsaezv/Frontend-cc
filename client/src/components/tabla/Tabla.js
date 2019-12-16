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
        style={{ minWidth: "85%", fontSize: "1.2rem" }}
        title=""
        tableRef={this.tableRef}
        columns={[
          { title: "Posición", field: "position" },
          { title: "Nombre", field: "nombre" },
          { title: "Edad", field: "edad", type: "numeric" },
          { title: "Ejemplo", field: "ejemplo"},
      

          {
            title: "status",
            field: "status"
          }
        ]}
        data={[
          { nombre: "Leo", position: "PO", edad: 24, ejemplo: "kappita", status: "Disponible" },
          { nombre: "Diego", position: "PO", edad: 24, ejemplo: "kappita", status: "Reintegro" },
          { nombre: "Yerson", position: "PO", edad: 24, ejemplo: "kappita", status: "Lesionado" },
          { nombre: "Maxi", position: "PO", edad: 24, ejemplo: "kappita", status: "Disponible" }
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
          })
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
