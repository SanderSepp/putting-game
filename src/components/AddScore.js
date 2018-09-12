import React from 'react';
import Grid from '@material-ui/core/es/Grid/Grid';
import Paper from '@material-ui/core/es/Paper/Paper';
import TextField from '@material-ui/core/es/TextField/TextField';
import Button from '@material-ui/core/es/Button/Button';
import { addScore, updateMeters, updateTotalScore } from "../actions/actions";
import { connect } from "react-redux";
import { calcMeters} from "../scripts/global";

class AddScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: '',
            currentMeters: 10,
        }
    }

    updateScore = (e) => {
        this.setState({
            currentScore: e.target.value,
        })
    };

    add = () => {
        const { dispatch } = this.props;
        const { currentScore, currentMeters } = this.state;
        const newMeters = calcMeters(this.state.currentScore);
        const roundScore = currentScore * currentMeters;
        dispatch(addScore(currentScore, currentMeters));
        dispatch(updateTotalScore(roundScore));
        dispatch(updateMeters(newMeters));
        this.calcNewMeters(newMeters);
        this.resetCurrentScore();
    };

    calcNewMeters(meters) {
        this.setState({
            currentMeters: meters,
        });
    }

    resetCurrentScore = () => {
        this.setState({
            currentScore: ''
        })
    };

    render() {
        return (
            <Grid container className="grid">
                <Grid item xs={6}>
                    <Paper className="grid__paper">
                        <TextField
                            label="Score"
                            id="score-input"
                            type="number"
                            value={this.state.currentScore}
                            onChange={this.updateScore}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className="button__margin"
                            onClick={this.add}
                        >
                            Submit
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default connect()(AddScore);
