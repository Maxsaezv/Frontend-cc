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
function createData(id, enfermedadprevia, cirugia, hospitalizaciones, alergias, lesiones, medicamentos, DolorToracico
  , SincopeLipotimia, DisneaDesproporcionada, AntecedenteSoplo, AntecedenteHipertension) {
  return { id, enfermedadprevia, cirugia, hospitalizaciones, alergias, lesiones, medicamentos,
     DolorToracico, SincopeLipotimia, DisneaDesproporcionada, AntecedenteSoplo, AntecedenteHipertension  };
}

const rows = [
  createData(0, 'DataEnfermedad', 'DataCirugía','DataHospitalizaciones', 'DataAlergias', 'DataLesiones',
   'DataMedicamentos/Suplementos','Data DolorToracico', 'Data Sincope/lipotimia', 'Data Disnea Desproporcionada'
   , 'Data Antecedente Soplo Cardiaco', 'Data Antecedente Hipertensión Arterial'),

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
      <Title>Historia Médica Personal</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell> <b> Interrogante Médica</b></TableCell>
            {/* <TableCell ><b>Resultado</b></TableCell> */}
            <TableCell align ='center'><b>Resultado</b></TableCell>
          </TableRow>
          

          <TableRow>
            <TableCell>Enfermedades Previas:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.enfermedadprevia}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Cirugía:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.cirugia}</TableCell>
          ))}
            </TableRow>


          <TableRow>
            <TableCell>Hospitalizaciones:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.hospitalizaciones}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Alergias:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.alergias}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Lesiones graves previas (>1 mes sin jugar):</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.lesiones}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Medicamentos / Suplementos:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.medicamentos}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell> <b><p> HISTORIA CARDIOVASCULAR </p></b></TableCell>
          </TableRow>


          <TableRow>
            <TableCell>Dolor/disconfort torácico con ejercicio:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.DolorToracico}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Síncope/Lipotimia:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.SincopeLipotimia}</TableCell>
          ))}
          </TableRow>

          <TableRow>
            <TableCell>Disnea/Fatiga desproporcionada con ejercicio:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.DisneaDesproporcionada}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Antecedentes de soplo cardiaco:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.AntecedenteSoplo}</TableCell>
          ))}
          </TableRow>


          <TableRow>
            <TableCell>Antecedentes de Hipertensión Arterial:</TableCell>
            {rows.map(row => (
              <TableCell align= 'center'>{row.AntecedenteHipertension}</TableCell>
          ))}
          </TableRow>


        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.imedica}</TableCell>
              <TableCell>{row.resultado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
    </React.Fragment>
  );
}