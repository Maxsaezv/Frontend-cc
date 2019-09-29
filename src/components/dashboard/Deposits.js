import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Sales Data
function createData(id, MuerteSubita, ECardiacaDisc, ECardiacaConoc) {
  return { id, MuerteSubita, ECardiacaDisc, ECardiacaConoc};
}

const rows = [
  createData(0, 'DataMuerteSubita Familiares', 'Data Enfermedad Cardiaca que genere discapacidad','Data Enfermedad Cardiaca conocida en familiares'),

];

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Historia Médica Familiar</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            <TableCell><b>Resultado</b></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Muerte súbita (cardiovascular) en familiares de primer grado (padres, hermanos, tíos): </TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.MuerteSubita}</TableCell>
            </TableRow>
          ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Enfermedad cardiaca que cause discapacidad en familiares de primer grado:</TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.ECardiacaDisc}</TableCell>
            </TableRow>
          ))}
            </TableCell>
            </TableRow>
          <TableRow>
            <TableCell>Enfermedad cardiaca conocida en familiares (miocardiopatía, arritmias, canalopatías, Sd Marfán): </TableCell>
            <TableCell>
            {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.ECardiacaConoc}</TableCell>
            </TableRow>
          ))}
      
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>

            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}