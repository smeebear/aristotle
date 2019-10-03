import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

export default function Learning() {
        return (
            <div style={{textAlign: 'center', alignContent: 'center'}}>
                <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
                    {"Welcome to the Learning Portal!"}
                </Typography>
                <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                    {"Select a style of learning to view..."}
                </Typography>
                <br />
                <Grid item alignContent='center' >
                    <ButtonGroup fullWidth aria-label="full width outlined button group">
                    <Button component={Link} to='/learning/visual' >Visual</Button>
                    <Button component={Link} to='/results' >Aural</Button>
                    <Button component={Link} to='/results' >Verbal</Button>
                    <Button component={Link} to='/results' >Physical</Button>
                    <Button component={Link} to='/results' >Logical</Button>
                    </ButtonGroup>
                </Grid>
            </div>
        )
    }

