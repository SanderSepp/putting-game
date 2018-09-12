import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import { connect } from "react-redux";

const TotalScore = ({ totalScore, meters }) => {
    return (
        <Grid container className="grid">
            <Grid item xs={6}>
                <Paper className="grid__paper">
                    <Typography variant="display1" gutterBottom>
                        Total score
                    </Typography>
                    <Typography variant="display1" type="number" gutterBottom>
                        { totalScore }
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className="grid__paper">
                    <Typography variant="display1" gutterBottom>
                        Meters
                    </Typography>
                    <Typography variant="display1" type="number" gutterBottom>
                        { meters }
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

const mapStateToProps = state => {
    return {
        totalScore: state.totalScore,
        meters: state.meters,
    }
};

export default connect(
    mapStateToProps
)(TotalScore);