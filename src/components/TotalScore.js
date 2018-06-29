import Grid from "@material-ui/core/es/Grid/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";

class TotalScore extends React.Component {

    render() {
        return (
            <Grid container className="grid">
                <Grid item xs={6}>
                    <Paper className="grid__paper">
                        <Typography variant="display1" gutterBottom>
                            Total score
                        </Typography>
                        <Typography variant="display1" type="number" gutterBottom>
                            0
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default TotalScore;