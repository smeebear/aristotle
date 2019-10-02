import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableColumn from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(1),
    overflowX: 'auto',
    textAlign: 'center',
  },
  table: {
    // minWidth: 650,
    width: '100%',
    textAlign: 'center'
  },
}));

export default function ResultsPage() {
    const classes = useStyles();
    return (
        <div style={{textAlign: 'center', paddingTop: '75px', width: '100%'}}>
            <Paper className={classes.root}>
                <div style={{textAlign: 'center'}} >
                <Table className={classes.table}>
                    <TableHead>
                        <TableCell align='center' >Learning Style</TableCell>
                        <TableCell align='center' >Score</TableCell>
                    </TableHead>
                    <TableBody>
                        <TableColumn style={{width: '50%'}} >
                            <TableCell align="center">Visual</TableCell>
                            <TableCell align="center">Aural</TableCell>
                            <TableCell align="center">Verbal</TableCell>
                            <TableCell align="center">Physical</TableCell>
                            <TableCell align="center">Logical</TableCell>
                            <TableCell align="center">Social</TableCell>
                            <TableCell align="center">Solitary</TableCell>
                        </TableColumn>
                        <TableColumn style={{width: '50%'}} >
                            <TableCell align="center">43</TableCell>
                            <TableCell align="center">159</TableCell>
                            <TableCell align="center">6</TableCell>
                            <TableCell align="center">24</TableCell>
                            <TableCell align="center">4</TableCell>
                            <TableCell align="center">19</TableCell>
                            <TableCell align="center">290</TableCell>
                        </TableColumn>
                    </TableBody>
                </Table>
                </div>
            </Paper>
        </div>
    )
}
