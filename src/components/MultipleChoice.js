import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export class MultipleChoice extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
              primary: { main: '#000000' }, // Purple and green play nicely together.
              secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
            },
          });
        return (
            <div className={this.props.questionNum}>
                <Typography variant="h2" style={{fontFamily: "Source Sans Pro", fontSize: "25px", paddingTop: "20px", paddingLeft: '20px'}}>
                    {this.props.question}
                </Typography>
                <div style={{paddingLeft: "50px", paddingTop:"10px"}}>
                    <MuiThemeProvider theme={theme}>
                    <FormControl component="fieldset">
                    <RadioGroup aria-label="fruits" name="customized-radios">
                        <FormControlLabel value="lemons" control={<Radio />} label="Bananas" />
                        <FormControlLabel value="male" control={<Radio />} label="Oranges" />
                        <FormControlLabel value="other" control={<Radio />} label="Lemons" />
                        <FormControlLabel value="blah" control={<Radio />} label="Watermelons" />
                    </RadioGroup>
                    </FormControl>
                    </MuiThemeProvider>
                </div>
            </div>
        )
    }
}

export default MultipleChoice
