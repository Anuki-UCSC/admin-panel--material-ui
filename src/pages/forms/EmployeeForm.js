import { FormControl, FormControlLabel, FormLabel, Grid, makeStyles, RadioGroup, TextField,Radio } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import {UseForm, Form} from '../forms/UseForm';



const initialFValues=[
    {id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    deparmentid:'',
    hireDate: new Date(),
    isPermanent:false,}
]

export default function EmployeeForm() {

    const {
        values,
        setValues,
        handleInputChange,

    }=UseForm(initialFValues);

 

   

    return (
        <Form>
        
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant='outlined'
                        label='Full Name'
                        name='Full Name'
                        value={values.fullName}
                        onChange={handleInputChange}
                    />
                     <TextField
                        variant='outlined'
                        label='email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </Grid>

                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                        name='gender'
                        value={values.gender}
                        onChange={handleInputChange}>
                            <FormControlLabel value='male' control={<Radio/>} label="Male"/>
                            <FormControlLabel value='female' control={<Radio/>} label="Female"/>
                            <FormControlLabel value='other' control={<Radio/>} label="Other"/>
                        </RadioGroup>
                    </FormControl>

                </Grid>
            </Grid>
    </Form>
    )
}
