import Typography from '@material-ui/core/Typography';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function Parent () {
    const classes = useStyles();
    const [state, setState] = React.useState({
        name: 'Sam',
    });

    const handleChange = name => event => {
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="name-native-simple">Child</InputLabel>
                <Select
                native
                value={state.name}
                onChange={handleChange('name')}
                inputProps={{
                    name: 'name',
                    id: 'name-native-simple',
                }}
                >
                <option value={'Sam'}>Sam</option>
                <option value={'Matt'}>Matt</option>
                <option value={'Briana'}>Briana</option>
                </Select>
            </FormControl>
            <Typography variant="h3" style={{ paddingTop: "50px", textAlign: 'center', paddingBottom: "10px", fontFamily: "Comfortaa", fontSize: "48px"}} >
            {"Hello, parent of " + state.name}
            </Typography>
            <Typography variant="h3" style={{ paddingTop: "5px", textAlign: 'center', paddingBottom: "20px", fontFamily: "Comfortaa", fontSize: "20px"}} >
                {"This is how "+ state.name + " has been doing..."}
            </Typography>
        </div>
    )
}

