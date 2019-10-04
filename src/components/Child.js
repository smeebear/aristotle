import React, { Component } from 'react'
import ResultsTable from './visuals/ResultsTable'

export default class Child extends Component {

    render() {
        return (
            <>
                <ResultsTable data={this.props.data} />
            </>
        )
    }
}
