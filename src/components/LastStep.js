import React from 'react'
import { makeStyles, Button, Grid } from '@material-ui/core'
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




export default function LastStep({handleReset, handleBack, handleChange}) {

    const { root, form } = useStyles()

    return (
        <div className={root}>
          <form className={form} onSubmit={handleReset}>
          <Questionnaire 
            handleChange={handleChange}
          /> 
          <Grid container justify='center'>
            <Button type='submit' /* onClick={(e) => handleSubmit(e)} */>Complete</Button>  
            <Button onClick={handleBack}>Back</Button>
          </Grid> 
          </form>
        </div>
    )
}
