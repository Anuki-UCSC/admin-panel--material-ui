import React from 'react'
import EmployeeForm from './EmployeeForm'
import {Paper, makeStyles, Typography} from '@material-ui/core'
import ReusableEmpform from './ReusableEmpform';

const useStyles= makeStyles(theme =>({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Employee() {

    const classes=useStyles();

    return (
        <div>
            
            <Paper className={classes.pageContent}>
            <EmployeeForm/>
            </Paper>

            <Paper className={classes.pageContent}>
            <Typography variant="h4">Reusable components</Typography>
            <ReusableEmpform/>
            </Paper>



        </div>
    )
}
