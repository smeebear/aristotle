import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Sam'
        }
    }
    render() {
        return (
            <div>
                <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                    {"Hello, parent of " + this.state.name}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                    {"This is how " + this.state.name + " has been doing..."}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "175px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "72px"}} >
                    {"not well, he's an idiot"}
                </Typography>
            </div>
        )
    }
}
