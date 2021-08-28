import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { Button, ButtonGroup, Checkbox,FormControlLabel, TextField  } from '@material-ui/core';
import { Save, Delete, Edit, Label } from '@material-ui/icons';

export default function Buttons_textinputs() {
    const [checked,setChecked]=useState(true);


    return (
        <div>
             <Button 
                onClick={()=>{alert('hi! this is material ui')}} 
                variant="contained" 
                color="primary"
                startIcon={<Save/>}
                endIcon={<Save/>}>
                 hello world
             </Button>

            <br/>
            <br/>
            <ButtonGroup variant="contained" >
                <Button 
                    color="primary"
                    startIcon={<Save/>}>
                    Save
                </Button>
                <Button 
                    color='Warning'
                    startIcon={<Edit/>}>
                    Edit
                </Button>
                <Button 
                    color="secondary"
                    startIcon={<Delete/>}>
                    Delete
                </Button>
                
            </ButtonGroup>
            <br/>
            <br/>
        
            <Checkbox
                checked={checked}
                onChange={(e)=>{setChecked(e.target.checked)}}
                color='primary'
                >
            </Checkbox>
            
            <br/>
            <br/>

            <FormControlLabel
            control={
                <Checkbox
                checked={checked}
                onChange={(e)=>{setChecked(e.target.checked)}}
                color='primary'
                />}
            label='Testing chech box labels'
            />
            
            <br/>
            <br/>

            <TextField
                variant='filled'/>

            <br/>
            <br/>

            <TextField
                variant='outlined'
                color='secondary'
                type='date'/>

            <br/>
            <br/>
            {/* <header className="App-header"></header> */}
            <TextField
                variant='outlined'
                color='secondary'
                type='text'
                label='Click here! Your Name'/>


            <br/>
            <br/>
            {/* <header className="App-header"></header> */}
            <TextField
                variant='outlined'
                color='secondary'
                type='time'
                label='Time'/>


            <br/>
            <br/>
            {/* <header className="App-header"></header> */}
            <TextField
                size='small'
                variant='outlined'
                color='secondary'
                label='email'
                value='anugaya@gmail.com'/>
            
            <br/>
            <br/>
            {/* <header className="App-header"></header> */}
            <TextField
                size='small'
                variant='outlined'
                color='secondary'
                type='text'
                label='Username'
                placeholder='anu@ucsc'/>



        </div>
    )
}
