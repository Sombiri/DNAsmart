import React from 'react';
import { TextField, } from '@material-ui/core'




const SelectComp = ({title, name, type, handleChange, value}) => {

    return(
        <div>
          <TextField
            required
            type={type}
            value={value}
            name={name}
            label={title}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChange}
          /> 
            
        </div>
    )
}

export default SelectComp