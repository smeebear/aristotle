import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import MultipleChoice from './MultipleChoice'

export default class ExampleQuiz extends Component {
    render() {
        return (
            <>
                <Typography variant="h3" style={{ paddingTop: "50px", paddingLeft:"525px", paddingBottom: "50px", fontFamily: "Comfortaa", fontSize: "38px"}} >
                {"Example Quiz"}
                </Typography>
                <MultipleChoice question={"Which fruit is the best fruit? I personally like lemons."} />
            </>
        )
    }
}
