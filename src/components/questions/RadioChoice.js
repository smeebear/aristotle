import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export class RadioChoice extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
              primary: { main: '#000000' }, // Purple and green play nicely together.
              secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
            },
          });
        return (
            <div className={this.props.questionNum}>
                <Typography variant="h2" style={{fontFamily: "Source Sans Pro", fontSize: "25px", paddingTop: "30px", paddingLeft: '20px'}}>
                    {this.props.question}
                </Typography>
                <div style={{paddingLeft: "50px", paddingTop:"10px"}}>
                    <MuiThemeProvider theme={theme}>
                        <FormControl component="fieldset">
                        <RadioGroup aria-label="fruits" name="customized-radios">
                            <FormControlLabel value={this.props.answers.a1} control={<Radio />} label={this.props.answers.a1} />
                            <FormControlLabel value={this.props.answers.a2} control={<Radio />} label={this.props.answers.a2} />
                            <FormControlLabel value={this.props.answers.a3} control={<Radio />} label={this.props.answers.a3} />
                            <FormControlLabel value={this.props.answers.a4} control={<Radio />} label={this.props.answers.a4} />
                        </RadioGroup>
                        </FormControl>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default RadioChoice
