import React from 'react'
import { Button, Grid, makeStyles, FormControl, FormLabel, FormGroup, Checkbox, FormControlLabel, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height: 600,
        width: 1000,
        backgroundColor: 'lightgrey'
        
        
    },
    formLabel: {
        marginBottom: theme.spacing(2),
        fontWeight: 700,
        color: 'black',
        fontSize: 30,
    },
    formGroup: {
        color: 'black',
    },
}))

export default function Metrics({ 
    handleNext, 
    handleBack, 
    handleUnselectAll, 
    handleSelectAll, 
    handleIsChecked, 
    isChecked, 
    metricsSelectError, 
    hammingDistanceError
}) {
    const { root, formLabel, formGroup } = useStyles()

    const { 
        hammingDistance, 
        levenshteinDistance, 
        damerauLevenshteinDistance, 
        conditionalEntropy, 
        mutualInformation, 
        numberOfErrors 
    } = isChecked


    return (
        <Grid container className={root} spacing={4}>
            <Grid item xs>
                <Grid container justify='center' spacing={4}>
                    <Grid item>
                        <FormControl component='fieldset'>
                            <FormLabel className={formLabel} component='legend'>
                                Select an attribute for evaluation
                            </FormLabel>
                            <FormGroup className={formGroup}>
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={hammingDistance}
                                        onChange={handleIsChecked}  
                                        name='hammingDistance' 
                                        color='primary' 
                                        disabled={hammingDistanceError}
                                        disableRipple
                                    />
                                } 
                                label='Hamming Distance' 
                            />
                            {hammingDistanceError ? (
                                <Typography color="secondary" variant="caption">
                                    Hamming distance error: Input sequences must be of equal length
                                </Typography>
                            ) : null}
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={levenshteinDistance}
                                        onChange={handleIsChecked}  
                                        name='levenshteinDistance' 
                                        color='primary' 
                                        disableRipple
                                    />
                                } 
                                    label='Levenshtein Distance' 
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={damerauLevenshteinDistance}
                                        onChange={handleIsChecked}  
                                        name='damerauLevenshteinDistance' 
                                        color='primary' 
                                        disableRipple
                                    />
                                } 
                                    label='Damerau-Levenshtein Distance' 
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={conditionalEntropy}
                                        onChange={handleIsChecked} 
                                        name='conditionalEntropy' 
                                        color='primary' 
                                        disableRipple
                                    />
                                } 
                                    label='Conditional Entropy' 
                            />
                            <FormControlLabel 
                                control={
                                    <Checkbox
                                        checked={mutualInformation}
                                        onChange={handleIsChecked}  
                                        name='mutualInformation' 
                                        color='primary' 
                                        disableRipple
                                    />
                                } 
                                    label='Mutual Information' 
                            />
                                        <FormControlLabel 
                                            control={
                                                <Checkbox
                                                    checked={numberOfErrors}
                                                    onChange={handleIsChecked}  
                                                    name='numberOfErrors' 
                                                    color='primary' 
                                                    disableRipple
                                                />
                                            } 
                                            label='Number of Errors' 
                                        />
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item spacing={4}>
                            <Grid container spacing={4} justify='space-evenly'>
                                <Grid item>
                                    <Button color='primary' onClick={handleSelectAll}>
                                        Select All
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button color='primary' onClick={handleUnselectAll}>
                                        Unselect All
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid spacing={6}>
                            {metricsSelectError ? (
                                <Grid item>
                                    <Alert severity="error">
                                        Please select all attributes
                                    </Alert>
                                </Grid>
                            ) : null}
                        </Grid>
            </Grid>
            <Grid container justify='center'>
                <Button onClick={handleBack}>Back</Button>
                <Button
                    disabled={metricsSelectError}
                    variant='contained' 
                    color='primary' 
                    onClick={handleNext}
                >
                    Next
                </Button>
            </Grid>
        </Grid>
    )
}
