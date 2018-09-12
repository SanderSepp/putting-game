import React from "react";
import Score from "./Score";
import { connect } from "react-redux";

const ScoreList = ({ scores }) => {
    console.log(scores);
    return (
        <div>
            {
                scores.map((score, index) => {
                    console.log("Score" + score);
                    return <Score key={index} score={score} />
                })
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        scores: state.currentScores,
    }
};


export default connect(
    mapStateToProps
)(ScoreList);

