import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import RadioChoice from './questions/RadioChoice';
import MultipleChoice from './questions/MultipleChoice'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

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
                <Typography variant="h3" style={{ paddingTop: "50px", paddingLeft:"500px", paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                {"Example Quiz"}
                </Typography>
                <RadioChoice question={this.state.q1.question} answers={this.state.q1.answers} />
                <MultipleChoice question={this.state.q2.question} answers={this.state.q2.answers} />
                <RadioChoice question={this.state.q1.question} answers={this.state.q1.answers} />
                <MultipleChoice question={this.state.q2.question} answers={this.state.q2.answers} />
                <div style={{paddingLeft:"615px", paddingBottom: "30px", paddingTop: "30px"}}>
                    <Button variant="contained" component={Link} to='/results'>
                        Submit
                    </Button>
                </div>
            </>
        )
    }
}
