import React, { Component } from 'react'
import ResultsTable from './visuals/ResultsTable'

export default class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <>
                <ResultsTable data={this.state.data} />
            </>
        )
    }
}
