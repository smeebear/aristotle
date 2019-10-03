import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Mr. O\'Heron'
        }
    }
    render() {
        return (
            <div>
                <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                    {"Hello, " + this.state.name}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                    {"This is how your students been doing..."}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "125px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "68px"}} >
                    {"you're a great teacher and they should give you a raise"}
                </Typography>
            </div>
        )
    }
}
