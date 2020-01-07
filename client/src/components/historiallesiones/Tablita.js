import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import api from "../../api/api"



export default function Tablita(props){
  const ref = React.createRef()
  const [historiallesiones, setHistoriallesiones] = useState([]);

  let player_id = window.location.pathname.substring(9, 33);

  useEffect(() => {
    let datos = api.getLesionesInactivas({ player_id: player_id }).then(res => {
      console.log("lesiones",res.body)
      setHistoriallesiones(res.body);
    }).catch(err=>{
      console.log(err)
    });
  }, []);
  
  return (
    <React.Fragment>
  
      <MaterialTable
        style={{ minWidth: "85%", fontSize: "2.0rem" }}
        title={"Historial de Lesiones"}
        tableRef={ref}
        columns={[
          {
            title: "Fecha",
            field: "fecha",
            type: "date",
            render: rawData => {
              let formatFecha = new Date(rawData.fecha);
              return (
                formatFecha.getDate() +
                "/" +
                (formatFecha.getMonth() + 1) +
                "/" +
                formatFecha.getFullYear()
              );
            }
          },
          { title: "Tipo", field: "tipo" },
          { title: "Zona", field: "zona" },
          { title: "Gravedad", field: "gravedad" },
          {
            title: "Dias lesionado",
            field: "reintegroestimado",
            type: "date",

            render: rawData => {
              let inicio = new Date(rawData.reintegroestimado);
              let hoy = new Date(rawData.fecha);
              return ((inicio - hoy) / (1000 * 60 * 60 * 24)).toFixed(0);
            }
          }
        ]}
        data={historiallesiones}
        
        options={{
          search: false,
          actionsColumnIndex: -1,
          paging: false,
          rowStyle: rowData => ({
            backgroundColor:
              rowData.gravedad === "Grave"
                ? "#FF5A55"
                : rowData.gravedad === "Mediana"
                ? "lightyellow"
                : ""
          }),
          headerStyle: { fontSize: 18 }
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
            onClick: () => window.location.reload()
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


