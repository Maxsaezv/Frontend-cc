import React, { Component } from "react";
import MaterialTable from "material-table";
import Title from '../ficha/Title.js';




export default class Tablita extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  render() {
    return (
     <React.Fragment>
       
       <MaterialTable
         style={{ minWidth: "85%", fontSize: "2.0rem" }}
         title={"Historial de Lesiones"}
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
            { date: "19/07/2018", tipo: "Fractura", zona: "Tibia", lado: "Izquierda", gravedad: "Grave", trec: "8 Meses" },
            { date: "22/10/2018", tipo: "Dislocación", zona: "Hombro", lado: "Derecho", gravedad: "Mediana", trec: "1 Semana" },
            { date: "17/03/2016", tipo: "Desgarro", zona: "Muslo", lado: "Derecho", gravedad: "Mediana", trec: "3 Semanas" },
            { date: "23/04/2013", tipo: "Corte de Ligamentos", zona: "Rodilla", lado: "Derecho", gravedad: "Grave", trec: "5 Meses" },
            { date: "29/08/2012", tipo: "Contractura", zona: "Muslo", lado: "Derecho", gravedad: "Baja", trec: "3 Semanas" },
            { date: "31/11/2012", tipo: "Fractura", zona: "Craneo", lado: "N.A.", gravedad: "Grave", trec: "5 Meses" },
            { date: "03/09/2011", tipo: "Contusión", zona: "Codo", lado: "Izquierdo", gravedad: "Mediana", trec: "1 Semana" },
            { date: "09/07/2011", tipo: "Contractura", zona: "Muslo", lado: "Izquierda", gravedad: "Baja", trec: "3 Semanas" },
            { date: "11/02/2010", tipo: "Esguince", zona: "Muñeca", lado: "Izquierda", gravedad: "Baja", trec: "3 Semanas" },
            
                 ]}
          options={{
            actionsColumnIndex: -1,
            paging: false,
              rowStyle: rowData => ({
            backgroundColor:
            rowData.gravedad === "Baja"
                ? ""
                : rowData.gravedad === "Mediana"
                ? "lightyellow"
                : "#FF5A55"
              }),
            headerStyle: { fontSize: 18  }
        }}
        actions={[
          {
            icon: "more",
            tooltip: "Más Información",
            onClick: (e, rowData) => console.log(e, rowData)
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
      </React.Fragment>
    );
  }
}
