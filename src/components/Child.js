import React, { Component } from 'react'
import ResultsTable from './visuals/ResultsTable'
import DonutChart from 'react-donut-chart';
import { Grid } from '@material-ui/core';

export default class Child extends Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Grid container spacing={2} style={{paddingTop: '25px'}} >
                    <Grid item xs='8'>
                    <ResultsTable data={this.props.data} />
                    </Grid>
                    <Grid item xs>
                    <Grid item xs>
                    <DonutChart 
                        height='225'
                        width='225'
                        legend={false}
                        data={[{
                            label: 'Child Average',
                            value: this.props.data.avg
                        },
                        {
                            label: '',
                            value: (100 - this.props.data.avg),
                            isEmpty: true
                        }]}
                        colors={['#7CFC00']}
                    />
                    </Grid>
                    <Grid item xs>
                    <DonutChart 
                        height='225'
                        width='225'
                        legend={false}
                        data={[{
                            label: 'Class Average',
                            value: 77
                        },
                        {
                            label: '',
                            value: 23,
                            isEmpty: true
                        }]}
                        colors={['#7CFC00']}
                    />
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
