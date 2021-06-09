import React from 'react'
import { makeStyles, Button, Grid, Box } from '@material-ui/core'
import Questionnaire from "./Questionnaire";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      }, 
      form: {
        '& .MuiTextField-root': {
          margin: theme.spacing(2),
          width: '90%',
        },
      },
      formControl: {
        margin: theme.spacing(2),
      }
}))




export default function LastStep({handleReset, handleChange}) {

    const { root, form } = useStyles()

    return (
        <div className={root}>
          <form className={form} onSubmit={handleReset}>
          <Questionnaire 
            handleChange={handleChange}
          /> 
          <Grid container justify='center'>
            <Box mx='auto' p={3}>
              <Button type='submit' variant='contained' color='primary'>Complete Evaluation</Button>  
            </Box>
          </Grid> 
          </form>
        </div>
    )
}
