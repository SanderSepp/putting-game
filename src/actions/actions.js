export const ADD_SCORE = 'ADD_SCORE';
export const UPDATE_TOTAL_SCORE = 'UPDATE_TOTAL_SCORE';

let nextScoreId = 0;

export function addScore(score) {
    return {
        'type': ADD_SCORE,
        score,
        id: nextScoreId++,
    }
}

export function updateTotalScore(totalScore) {
    return {
        'type': UPDATE_TOTAL_SCORE,
        totalScore,
    }
}