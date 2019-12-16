import { buildApi, get, post, patch, destroy } from 'redux-bees';

//Env
// require('custom-env').env('development')

const apiEndpoints = {
    getView: { method: get, path: '/players/:player_id' },
    getAll: { method: get, path: '/players' },
    updatePlayer: { method: patch, path: '/players/:player_id' },
    destroyPlayer: { method: destroy, path: '/players' },
    createPlayer: { method: post, path: '/players' },

    createInjuries: { method: post, path: '/players/:player_id/injuries' },
    getInjuries: { method: get, path: '/players/:player_id/injuries' },
    updateInjury: { method: patch, path: '/players/:player_id/injuries/:injury_id' },
    destroyInjury: { method: destroy, path: '/players/:player_id/injuries/:injury_id' },
    getInjury: { method: get, path: '/players/:player_id/injuries/:injury_id' }


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