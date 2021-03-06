import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  table: {
    width: '100%'
  },
  cell: {
      width: '50%'
  }
}));

export default function ResultsPage(props) {
    const classes = useStyles();
    return (
        <div style={{paddingTop: '25px'}}>
            <Grid alignContent='center'>
            <Paper className={classes.root}>
                <div style={{textAlign: 'center'}} >
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' className={classes.cell} >Learning Style</TableCell>
                            <TableCell align='center' className={classes.cell} >Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Visual</TableCell>
                            <TableCell align="center">{props.data.vi}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Aural</TableCell>
                            <TableCell align="center">{props.data.a}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Verbal</TableCell>
                            <TableCell align="center">{props.data.ve}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Physical</TableCell>
                            <TableCell align="center">{props.data.p}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Logical</TableCell>
                            <TableCell align="center">{props.data.l}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Social</TableCell>
                            <TableCell align="center">{props.data.soc}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Solitary</TableCell>
                            <TableCell align="center">{props.data.sol}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </div>
            </Paper>
            </Grid>
        </div>
    )
}
