import React from "react";
import Score from "./Score";
import { connect } from "react-redux";

const ScoreList = ({ scores }) => {
    console.log(scores);
    return (
        <div>
            {
                scores.map((score, index) => (
                    <Score key={index} score={score} />
                ))
            }
        </div>
    )
};

const mapStateToProps = state => ({
    scores: state.scores
});

export default connect(
    mapStateToProps
)(ScoreList);

