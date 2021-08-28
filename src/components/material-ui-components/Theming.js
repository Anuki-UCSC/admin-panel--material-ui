import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors'
import { Button, ButtonGroup, Paper, Grid } from '@material-ui/core'
import { Save, Delete, Edit } from '@material-ui/icons'

const theme= createMuiTheme({
    palette:{
        primary:{
            main:green[500],
        },
        secondary:{
            main:orange[400],
        }
    }
})

export default function Theming() {

    return (
        <div>
            <ThemeProvider theme={theme}>

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


            {/* simple grid -not responsive */}
            <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                    <Paper style={{height:100, width:100 ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item>
                    <Paper style={{height:100, width:100 ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item>
                    <Paper style={{height:100, width:100 ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item>
                    <Paper style={{height:100, width:100 ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
            </Grid>


            {/* Responsive Grid */}
            <Grid container spacing={2} justifyContent='center'>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{height:100, width:'100%' ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{height:100, width:'100%' ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{height:100, width:'100%' ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper style={{height:100, width:'100%' ,backgroundColor:'purple'}} elevation={3}/>
                </Grid>
                
            </Grid>
            </ThemeProvider>
        </div>
    )
}
