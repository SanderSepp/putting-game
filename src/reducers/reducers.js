import { combineReducers } from 'redux';
import { ADD_SCORE, UPDATE_TOTAL_SCORE, UPDATE_METERS } from "../actions/actions";

function totalScore(state = 0, action) {
    switch (action.type) {
        case UPDATE_TOTAL_SCORE:
            return state + parseInt(action.currentScore);
        default:
            return state;
    }
}

function meters(state = 10, action) {
    switch (action.type) {
        case UPDATE_METERS:
            return action.meters;
        default:
            return state;
    }
}

function currentScores(state = [], action) {
    switch (action.type) {
        case ADD_SCORE:
            return [
                ...state,
                {
                    score: action.currentScore,
                    id: action.id,
                    meters: action.currentMeters,
                }
            ];
        default:
            return state;
    }
}

const puttingApp = combineReducers({
    totalScore,
    meters,
    currentScores
});

export default puttingApp;