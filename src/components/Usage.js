import React from 'react'
import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    
    },
    paper: {
        padding: '20px',
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 600,
        width: 1000,
        backgroundColor: 'white'    
    },
    main: {
        width: '90vw',
        margin: '0 auto',
         //padding: '10px 10px'
      }

}))


export default function Usage({handleNext}) {
    const { root, paper, main } = useStyles()


    return (
        <main className={main}>
            {/* <h1>show yourself</h1> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            <Grid container className={root} spacing={4}>
                <Grid item xs>
                    <Grid container justify='center'>
                        <Paper elevation={3} className={paper}>
                            <Grid item>
                                <Typography>Explains how the tools works</Typography>
                            </Grid>
                        </Paper>
                    </Grid>      
                </Grid>
                <Grid container justify='center'>
                    <Button disabled>Back</Button>
                    <Button variant='contained' color='primary' onClick={handleNext}>Next</Button>
                </Grid>
            </Grid>
        </main>
        
    )
}
