export const ADD_SCORE = 'ADD_SCORE';
export const UPDATE_TOTAL_SCORE = 'UPDATE_TOTAL_SCORE';
export const UPDATE_METERS= 'UPDATE_METERS';

let nextScoreId = 0;

export function addScore(currentScore, currentMeters) {
    return {
        'type': ADD_SCORE,
        currentScore,
        currentMeters,
        id: nextScoreId++,
    }
}

export function updateTotalScore(currentScore) {
    return {
        'type': UPDATE_TOTAL_SCORE,
        currentScore,
    }
}

export function updateMeters(meters) {
    return {
        'type': UPDATE_METERS,
        meters,
    }
}