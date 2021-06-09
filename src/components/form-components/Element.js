import React from 'react';
import Input from './elements/Input';
import RadioCol from './elements/RadioCol';
import RadioGen from './elements/RadioGen';
import RadioRow from './elements/RadioRow';
import SelectComp from './elements/Select';



  

const Element = ({
    surveyquestion: {type, title, name, choices, isRequired,}, handleChange, value
}) => {


    switch (type) {
        case 'number':
            return(
            <SelectComp 
                title={title} 
                name={name}
                handleChange={handleChange}
                type={type}
                value={value}
            />)
        
        case 'text':
            return(
            <Input 
                title={title} 
                name={name}
                handleChange={handleChange}
                value={value}

            />)
        
        case 'radiogen':
            return(
            <RadioGen 
                title={title}
                name={name}
                choices={choices}
                handleChange={handleChange}
                isRequired={isRequired}
                value={value}

            />)
        
        case 'radioexp':
            return(
            <RadioCol
                title={title}
                name={name}
                choices={choices}
                handleChange={handleChange}
                isRequired={isRequired}
                value={value}

                />)
            
        case 'radiosur':
            return(
            <RadioRow 
                title={title} 
                name={name}
                choices={choices}
                handleChange={handleChange}
                isRequired={isRequired}
                value={value}

            />
            
            
            )
        
        default:
            return null
    }


   
}

export default Element