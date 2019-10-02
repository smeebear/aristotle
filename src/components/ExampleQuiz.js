import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import MultipleChoice from './MultipleChoice'

export default class ExampleQuiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            q1: {
                question: "Which fruit is the best fruit? I personally like lemons.",
                answers: {
                    a1: "Lemons",
                    a2: "Pineapple",
                    a3: "Apples",
                    a4: "Oranges"
                }
            }, 
            q2: {
                question: "Which of the following are fools and rapscallions?",
                answers: {
                    a1: "Mike",
                    a2: "Chris",
                    a3: "Briana",
                    a4: "Garrett"
                }
            }
        }
    }
    render() {
        return (
            <>
                <Typography variant="h3" style={{ paddingTop: "50px", paddingLeft:"500px", paddingBottom: "35px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                {"Example Quiz"}
                </Typography>
                <MultipleChoice question={this.state.q1.question} answers={this.state.q1.answers} />
            </>
        )
    }
}
