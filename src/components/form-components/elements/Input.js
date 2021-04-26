import React from 'react';
import { TextField, } from '@material-ui/core'



const Input = ({title, name, handleChange, value}) => {


    return(
        <div>
            <TextField 
                required 
                name={name}
                label={title} 
                value={value}
                onChange={handleChange}
            />
        </div>
    )
}

export default Input