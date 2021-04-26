import React from 'react'
import { Button } from '@material-ui/core'

export default function ButtonComp({ getStepContent, handleBack, handleReset, handleNext, activeStep, steps}) {
    return (
        <div>
             <div>
                <Button disabled>
                    Back
                </Button>
                <Button onClick={handleNext} variant='contained' color='primary'>Next</Button>
             </div>
             <div>
                <Button onClick={handleReset} variant='contained' color='primary'>
                    Reset
                </Button>
            </div>
        </div>  
    )
}
