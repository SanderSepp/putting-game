import React from 'react';
import Grid from '@material-ui/core/es/Grid/Grid';
import Paper from '@material-ui/core/es/Paper/Paper';
import TextField from '@material-ui/core/es/TextField/TextField';
import Button from '@material-ui/core/es/Button/Button';
import { addScore } from "../actions/actions";
import { connect } from "react-redux";

class AddScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScore: ''
        }
    }

    updateScore = (e) => {
        this.setState({
            currentScore: e.target.value,
        })
    };

    add = () => {
        const { dispatch } = this.props;
        dispatch(addScore(this.state.currentScore));
        this.resetCurrentScore();
    };

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
