import React from 'react';
import { FormLabel, FormControlLabel, FormControl, RadioGroup, Radio, makeStyles } from '@material-ui/core'





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
        width: '90%'
      }
}))


const RadioCol = ({title, name, choices, handleChange, isRequired, value}) => {
    const { formControl } = useStyles()

    
    
    return(
        <div>
           <FormControl component="fieldset" className={formControl}>
                <FormLabel required component="legend">{title}</FormLabel>
                <RadioGroup aria-label="experience" name={name} value={value} onChange={handleChange}>
                  {choices.length > 0 && choices.map((choice, i) => (
                    <FormControlLabel 
                    key={choice}
                    value={choice} 
                    control={<Radio required={isRequired}/>} 
                    label={choice} />
                  ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default RadioCol