import React, { Component } from "react";
import MaterialTable from "material-table";




export default class LesionActual extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  render() {
    return (
     <React.Fragment>
       <MaterialTable
         style={{ minWidth: "85%", fontSize: "2.0rem" }}
         title="Actualmente Lesionado de:"
         tableRef={this.tableRef}
         columns={[
           { title: "Fecha", field: "date", type: "date"},
           { title: "Tipo", field: "tipo" },
           { title: "Zona", field: "zona" },
           { title: "Der/Izq", field: "lado"},
           { title: "Gravedad", field: "gravedad"},
           { title: "Tiempo de Recuperación", field: "trec"},
      

           ]}
            data={[
            { date: "01/12/2019", tipo: "Desgarro", zona: "Muslo", lado: "Derecho", gravedad: "Grave", trec: "2 Meses" },
            
                 ]}
          options={{
            search:false,
            actionsColumnIndex: -1,
            paging: false,
              rowStyle: rowData => ({
            backgroundColor:
            rowData.gravedad === "Baja"
                ? ""
                : rowData.gravedad === "Mediana"
                ? "lightyellow"
                : "#FF5A55"
          })
        }}
        actions={[
          {
            icon: "more",
            tooltip: "Más Información",
            onClick: (e, rowData) => console.log(e, rowData)
          },
        ]}
      />
      </React.Fragment>
    );
  }
}
