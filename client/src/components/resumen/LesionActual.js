import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import api from "../../api/api";

export default function LesionActual(props) {
  const ref = React.createRef();
  const [lesionactual, setLesionactual] = useState([]);

  let url = window.location.pathname.substring(0, 33);
  let player_id = window.location.pathname.substring(9, 33);

  const alta  = {active : false}

  const DarAlta = (player_id,injury_id) => {
    api.altaLesion({player_id:player_id,injury_id:injury_id},alta).then(res =>{

      alert("Alta de lesion")
      window.location.reload()
    }).catch(err =>{
      console.log(err)
    })
  }

  useEffect(() => {
    let datos = api
      .getLesionesActivas({ player_id: player_id })
      .then(res => {
        setLesionactual(res.body);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <MaterialTable
        style={{ minWidth: "85%", fontSize: "2.0rem" }}
        title="Actualmente Lesionado de:"
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
            title: "Tiempo de Recuperación",
            field: "reintegroestimado",
            type: "date",

            render: rawData => {
              let inicio = new Date(rawData.reintegroestimado);
              let hoy = new Date();
              return ((inicio - hoy) / (1000 * 60 * 60 * 24)).toFixed(0);
            }
          }
        ]}
        data={lesionactual}
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
          })
        }}
        actions={[
          {
            icon: "more",
            tooltip: "Más Información",
            onClick: (e, rowData) => {DarAlta(player_id,rowData._id)}
          },
          {
            icon: "add",
            tooltip: "Agregar Lesion",
            isFreeAction: true,
            onClick: e => (window.location.href = url + "/nuevalesion")
          }
        ]}
      />
    </React.Fragment>
  );
}
