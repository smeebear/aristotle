import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Child from './Child';

const formControl = {
    marginLeft: 'auto',
    marginRight: 'auto',
    minWidth: 120,
    paddingTop: '10px'
}  
export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Sam',
            data: {
                vi: Math.floor(Math.random() * 100),
                a: Math.floor(Math.random() * 100),
                ve: Math.floor(Math.random() * 100),
                p: Math.floor(Math.random() * 100),
                l: Math.floor(Math.random() * 100),
                soc: Math.floor(Math.random() * 100),
                sol: Math.floor(Math.random() * 100),
                avg: 97
            }
        }
    }

    handleChange = (event) => {
        var name = event;
        this.setState({
            name: name
        });
    };

    handleChild = (name) => {
        var data = {}
        if (name === 'Sam') {
            data = {
                vi: Math.floor(Math.random() * 100),
                a: Math.floor(Math.random() * 100),
                ve: Math.floor(Math.random() * 100),
                p: Math.floor(Math.random() * 100),
                l: Math.floor(Math.random() * 100),
                soc: Math.floor(Math.random() * 100),
                sol: Math.floor(Math.random() * 100),
                avg: 97
            }
        } else if (name === 'Matt') {
            data = {
                vi: Math.floor(Math.random() * 100),
                a: Math.floor(Math.random() * 100),
                ve: Math.floor(Math.random() * 100),
                p: Math.floor(Math.random() * 100),
                l: Math.floor(Math.random() * 100),
                soc: Math.floor(Math.random() * 100),
                sol: Math.floor(Math.random() * 100),
                avg: 60
            }
        } else if (name === 'Briana') {
            data = {
                vi: Math.floor(Math.random() * 100),
                a: Math.floor(Math.random() * 100),
                ve: Math.floor(Math.random() * 100),
                p: Math.floor(Math.random() * 100),
                l: Math.floor(Math.random() * 100),
                soc: Math.floor(Math.random() * 100),
                sol: Math.floor(Math.random() * 100),
                avg: 73
            }
        }
        return (
            <Child data={data} />
        )
    }

    render(){
        return (
            <div>
                <FormControl style={formControl}>
                    <Select
                    native
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event.target.value)}
                    inputProps={{
                        name: 'name',
                        id: 'outlined-name-native-simple',
                    }}
                    >
                    <option value={'Sam'}>Sam</option>
                    <option value={'Matt'}>Matt</option>
                    <option value={'Briana'}>Briana</option>
                    </Select>
                </FormControl>
                <Typography variant="h3" style={{ paddingTop: "20px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                {"Hello, parent of " + this.state.name}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                    {"This is how "+ this.state.name + " has been doing..."}
                </Typography>
                <>{this.handleChild(this.state.name)}</>
            </div>
        )
    }
}
