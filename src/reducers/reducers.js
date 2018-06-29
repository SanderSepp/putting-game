import { combineReducers } from 'redux';
import {ADD_SCORE} from "../actions/actions";

function scores(state = [], action) {
    switch (action.type) {
        case ADD_SCORE:
            return [
                ...state,
                {
                    score: action.score,
                    id: action.id,
                }
            ];
        default:
            return state
    }
}

const scoresApp = combineReducers({
    scores
});

export default scoresApp;