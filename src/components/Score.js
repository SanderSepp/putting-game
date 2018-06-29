import React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";

const Score = ({ score }) => {
    return (
        <Paper className="grid__paper">
            Round {score.id}<br/>
            Connected putts {score.score}
        </Paper>
    );
};

export default Score;