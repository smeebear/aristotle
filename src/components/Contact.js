import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default class Contact extends Component {
    render() {
        const style = {
            paddingTop: "5px",
            textAlign: 'center'
        }
        const multi = {
            textAlign: 'center',
            width: '35%'
        }
        return (
            <>
                <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "38px"}} >
                    {"Contact Us!"}
                </Typography>
                <form noValidate autoComplete="off">
                    <div style={style}>
                        <TextField
                            id="standard-uncontrolled"
                            label="Name"
                            defaultValue=""
                            margin="normal"
                            autoComplete='name'
                            // variant="outlined"
                            // style={style}
                        />
                    </div>
                    <div style={style}> 
                        <TextField
                            required
                            id="standard-required"
                            label="Email"
                            defaultValue=""
                            margin="normal"
                            autoComplete='email'
                            // variant="outlined"
                            // style={style}
                        />
                    </div>
                    <div style={style}> 
                        <TextField
                            required
                            id="standard-uncontrolled"
                            label="Phone Number"
                            defaultValue=""
                            margin="normal"
                            autoComplete='tel'
                            // variant="outlined"
                            // style={style}
                        />
                    </div>
                    <div style={{width: '100%', textAlign: 'center', paddingBottom: '10px'}}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows="6"
                            defaultValue=""
                            margin="normal"
                            autoComplete='off'
                            variant="outlined"
                            style={multi}
                        />
                    </div>
                    <div style={style}>
                        <Button variant="contained" component={Link} to='/thanks' >
                            Submit
                        </Button>
                    </div>
                </form>
            </>
        )
    }
}
