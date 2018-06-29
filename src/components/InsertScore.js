/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/es/Grid/Grid';
import Paper from '@material-ui/core/es/Paper/Paper';
import TextField from '@material-ui/core/es/TextField/TextField';
import Button from '@material-ui/core/es/Button/Button';

class InsertScore extends React.Component {
    render() {
        return (
            <Grid container className="grid">
              <Grid item xs={6}>
                  <Paper className="grid__paper">
                        <TextField
                            label="Score"
                            id="score-input"
                            type="number"
                            value={this.props.currentScore}
                            onChange={this.props.updateScore}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.props.addScore}
                        >
                          Submit
                      </Button>
                  </Paper>
              </Grid>
          </Grid>
        );
    }
}

export default InsertScore;
