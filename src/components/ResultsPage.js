import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginTop: theme.spacing(1),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function ResultsPage() {
    const classes = useStyles();
    return (
        <div style={{paddingLeft: '245px', paddingTop: '100px'}}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell align="center">Visual</TableCell>
                        <TableCell align="center">Aural</TableCell>
                        <TableCell align="center">Verbal</TableCell>
                        <TableCell align="center">Physical</TableCell>
                        <TableCell align="center">Logical</TableCell>
                        <TableCell align="center">Social</TableCell>
                        <TableCell align="center">Solitary</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell align="center">43</TableCell>
                        <TableCell align="center">159</TableCell>
                        <TableCell align="center">6</TableCell>
                        <TableCell align="center">24</TableCell>
                        <TableCell align="center">4</TableCell>
                        <TableCell align="center">19</TableCell>
                        <TableCell align="center">290</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </div>
    )
}
