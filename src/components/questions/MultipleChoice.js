import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { FormGroup, FormControlLabel, FormControl, Checkbox } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export class MultipleChoice extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
              primary: { main: '#000000' },
              secondary: { main: '#11cb5f' },
            },
          });
        return (
            <div>
                <Typography variant="h2" style={{fontFamily: "Source Sans Pro", fontSize: "25px", paddingTop: "30px", paddingLeft: '20px'}}>
                    {this.props.question}
                </Typography>
                <div style={{paddingLeft: "50px", paddingTop:"10px"}}>
                <MuiThemeProvider theme={theme}>
                <FormControl component="fieldset">
                    <FormGroup>
                    <FormControlLabel
                        control={<Checkbox value={this.props.answers.a1} />}
                        label={this.props.answers.a1}
                    />
                    <FormControlLabel
                        control={<Checkbox value={this.props.answers.a2} />}
                        label={this.props.answers.a2}
                    />
                    <FormControlLabel
                        control={<Checkbox value={this.props.answers.a3} />}
                        label={this.props.answers.a3}
                    />
                    <FormControlLabel
                        control={<Checkbox value={this.props.answers.a4} />}
                        label={this.props.answers.a4}
                    />
                    </FormGroup>
                </FormControl>
                </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default MultipleChoice
