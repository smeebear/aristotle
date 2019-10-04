import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react'

export default class Parent extends Component {
    render() {
        return (
            <div>
                <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                {"Hello, parent of Sam"}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                    {"This is how Sam has been doing..."}
                </Typography>
            </div>
        )
    }
}

