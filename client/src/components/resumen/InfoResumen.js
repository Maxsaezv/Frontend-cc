import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../resumen/Title";

// Generate Sales Data
function createData(
  id,
  Nombre,
  Posicion,
  Edad,
  Estatura,
  Peso,
  Pais,
  Pie,
  Isapre,
  Alergias,
  Sangre,
  Dorsal,
  Estado
) {
  return {
    id,
    Nombre,
    Posicion,
    Edad,
    Estatura,
    Peso,
    Pais,
    Pie,
    Isapre,
    Alergias,
    Sangre,
    Dorsal,
    Estado
  };
}

const rows = [
  createData(
    0,
    "DataNombre",
    "DataPosicion",
    "DataEdad",
    "DataEstatura",
    "DataPeso",
    "DataPais",
    "DataPie",
    "DataIsapre",
    "DataAlergias",
    "DataSangre",
    "DataCamiseta",
    "DataEstado"
  )
];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

//props vienen del componente global Resumen
export default function Orders(props) {
  //para no escribir tantas veces props.data => datos.<variable>
  let datos = props.data;

  let hoy = new Date();
  let inicio = new Date(datos.nacimiento);

  console.log(datos);

  return (
    <React.Fragment>
      <Title>Información General</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>NOMBRE:</b>{" "}
            </TableCell>

            <TableCell align="center">{datos.nombre}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>POSICIÓN:</b>
            </TableCell>

            <TableCell align="center">{datos.posicion}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>EDAD:</b>
            </TableCell>

            <TableCell align="center">
              {((hoy - inicio) / 86400000 / 365).toFixed(0)}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>ESTATURA:</b>
            </TableCell>

            <TableCell align="center">{datos.estatura} metros</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>PESO:</b>
            </TableCell>

            <TableCell align="center">{datos.peso} Kg</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>PAÍS:</b>
            </TableCell>

            <TableCell align="center">{datos.pais}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>PIE:</b>
            </TableCell>

            <TableCell align="center">{datos.pie}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>ISAPRE:</b>
            </TableCell>
            {rows.map(row => (
              <TableCell align="center">{datos.isapre}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell>
              <b>ALERGIAS:</b>
            </TableCell>

            <TableCell align="center">{datos.alergias}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>SANGRE:</b>
            </TableCell>

            <TableCell align="center">{datos.sangre}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>DORSAL:</b>
            </TableCell>

            <TableCell align="center">{datos.dorsal}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>ESTADO:</b>
            </TableCell>

            <TableCell align="center">{datos.status}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}></TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
