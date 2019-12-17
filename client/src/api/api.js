import { buildApi, get, post, patch, destroy } from 'redux-bees';

//Env
// require('custom-env').env('development')

const apiEndpoints = {
    ////Jugador
    crearJugador: {method: post, path: '/players'},//ex-createPlayers
    getActivos: {method: get, path: '/players'}, //ex-getPlayers
    getInactivos: {method: get, path: '/players/inactivos'},
    getJugador: {method: get, path: '/players/:player_id'},//ex-getView
    desvincularJugador: {method: destroy, path: '/players/:player_id'},
    editarJugador: {method: patch, path: '/players/:player_id'},//ex-updatePlayers
    recontratarJugador: {method: patch, path:'/players/recontratacion/:player_id'},
    eliminarJugador: {method: destroy, path:'/players/recontratacion/:player_id'},//ex-destroyPlayers
    ////Lesiones
    crearLesion: { method: post, path: '/players/:player_id/injuries' },
    getLesionesActivas: { method: get, path: '/players/:player_id/injuries' },
    getLesionesInactivas: { method: get, path: '/players/:player_id/historial' },
    editarLesion: { method: patch, path: '/players/:player_id/injuries/:injury_id' },
    altaLesion: { method: destroy, path: '/players/:player_id/injuries/:injury_id' },
    getLesion: { method: get, path: '/players/:player_id/injuries/:injury_id' },
    elimarLesion: {method: destroy, path: '/players/:player_id/historial/:injury_id'},
    //Observaciones
    getObservaciones: {method: get, path: '/players/players_id/injuries/:injury_id/observations'},
    crearObservaciones: {method: post, path: '/players/players_id/injuries/:injury_id/observations'},
    detalleObservacion: {method: get, path: '/players/:player_id/injuries/:injury_id/observations/:observation_id'},
    eliminarObservacion: {method: destroy, path: '/players/:player_id/injuries/:injury_id/observations/:observation_id'},
    editarObservacion: {method: patch, path: '/players/:player_id/injuries/:injury_id/observations/:observation_id'}
};

const config = {
    // baseUrl: process.env.BASE_URL
    // baseUrl: 'https://colocolodevelopment.herokuapp.com/api',
    baseUrl: 'http://localhost:5000/api',

    configureHeaders() {
        return {
            "Content-Type": "application/json"
        }
    }
};

export default buildApi(apiEndpoints, config);