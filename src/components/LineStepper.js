import { Stepper, Step, StepLabel, Typography, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import DataInput from './DataInput'
import Metrics from './Metrics'
import ResultView from './ResultView'
import clsx from 'clsx';
import { calculateHammingDistance } from "../multi-attributes/HammingDistance";
import { calculateLevenshteinDistance } from "../multi-attributes/LevenshteinDistance";
import { calculateDamerauLevenshtein } from "../multi-attributes/DamereauLevenshtein";
import { calculateGCcontent } from '../multi-attributes/GCcontent';
import { calculateConditionalEntropy } from "../multi-attributes/ConditionalEntropy";
import { calculateMutualInfo } from "../multi-attributes/MutualInformation";
import { calculateNumOfErrors } from "../multi-attributes/NumberOfErrors";




const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
  });

function getSteps() {
    return [
        'Reference and Input Sequence',
        'Metrics',
        'Results'
    ]
}


export default function LineStepper() {
    const [ activeStep, setActiveStep ] = useState(0)
    const [ selectedFile, setSelectedFile ] = useState('')
    const [ selectedFileName, setSelectedFileName ] = useState('')
    const [ inputSequences, setInputSequences ] = useState([
        {label: '', value: ''},
        {label: '', value: ''},
    ])
    const [ metricsSelectError, setMetricSelectError] = useState(false)
    const [ hammingDistanceError, setHammingDistanceError ] = useState(false)
    const [ dataToVisualize, setDataToVisualize ] = useState([])
    const [ isChecked, setIsChecked ] = useState({
        hammingDistance: false,
        levenshteinDistance: false,
        damerauLevenshteinDistance: false,
        gcContent: false,
        conditionalEntropy: false,
        mutualInformation: false,
        numberOfErrors: false
    })
    const [open, setOpen] = useState(false)

    
    let fileReader
    const handleChange = async (event)=>{

        const { name, } = event.target.files[0]
        let newSelectedFileName = selectedFileName
        newSelectedFileName = name
        if(!newSelectedFileName.endsWith('.fasta')){
            alert('Invalid file extension. Upload a fasta file')
            return false
        }else{
            setSelectedFileName(newSelectedFileName)
        }
        let file = event.target.files[0]
        
        

        async function readFile() {
            let result = await new Promise((resolve) => {
                fileReader = new FileReader()
                fileReader.onloadend = (e) => resolve(fileReader.result)
                fileReader.readAsText(file)
            })
            return result
        } 
        const data = await readFile()
        let fastaParser = require('../FastaToObject.js');
        let fasta = fastaParser.ParseFasta(data);
        let newInputSequences = inputSequences
        newInputSequences = fasta
        setInputSequences(newInputSequences)


        let newSelectedFile = data
        setSelectedFile(newSelectedFile);
    }
    const handleIsChecked = (event) => {
        setIsChecked({ ...isChecked, [event.target.name]: event.target.checked });
    }

    const handleSelectAll = () => {
        let newIsChecked = {...isChecked}
        Object.keys(newIsChecked).forEach((key) => (newIsChecked[key] = true))
        if (hammingDistanceError) newIsChecked["hammingDistance"] = false;
        setIsChecked(newIsChecked) 
    }

    const handleUnselectAll = () => {
        let newIsChecked = {...isChecked}
        Object.keys(newIsChecked).forEach((key) => (newIsChecked[key] = false))
        setIsChecked(newIsChecked)
    }
    
    const verifyLengthOfSequences = () => {
        const allSequencesValues = [...inputSequences].map((seq) => {
            return seq.value
        })
        const seqOfUnequalLength = allSequencesValues.some(
            (s) => s.length !== allSequencesValues[0].length
        )
        console.log(seqOfUnequalLength)
        /* const allSequencesValuesNotRef = [...inputSequences].filter((seq) => {
             return seq.label !== 'Reference'
        }).map((s) => { return s.value})
        const referenceSequence = [...inputSequences].filter((refseq) => {
            return refseq.label === 'Reference'
        }).reduce((acc, item) => { return acc = item.value}, '')
        const seqOfUnequalLength = allSequencesValuesNotRef.some(
            (s) => s.length !== referenceSequence.length
        )
        console.log(seqOfUnequalLength) */
        setIsChecked({ ...isChecked, hammingDistance: false})
        setHammingDistanceError(seqOfUnequalLength) 
    }

    const calculateMetrics = () => {
        const calculatedMetrics = []
        console.log(calculatedMetrics)
        let allSequences = [...inputSequences].map((seq) => {
            return seq
        })
        const referenceSequence = [...allSequences].map(value => ({ value, sort: Math.random() }))
            .sort((a,b) => a.sort - b.sort)
            .map(({ value }) => value)
            .reduce((acc, item) => {return acc = item.value})


        /* const referenceSequence = [...inputSequences].filter((refseq) => {
            return refseq.label === 'Reference'
        }).reduce((acc, item) => { return acc = item.value}, '')
        console.log(referenceSequence)
        let allSequencesNotRef = [...inputSequences].filter((seq) => {
            return seq.label !== 'Reference'
       }) */
       const { hammingDistance, levenshteinDistance, damerauLevenshteinDistance, gcContent, conditionalEntropy, mutualInformation, numberOfErrors } = isChecked
       allSequences.forEach((seq) => {
            const { label, value } = seq
            let sequenceMetrics = { label }
            if (hammingDistance) {
                sequenceMetrics['Hamming Distance'] = calculateHammingDistance(
                    referenceSequence,
                    value
                )
            }
            if (levenshteinDistance) {
                sequenceMetrics['Levenshtein Distance'] = calculateLevenshteinDistance(
                    referenceSequence,
                    value
                )
            }
            if (damerauLevenshteinDistance) {
                sequenceMetrics['Damerau-Levenshtein Distance'] = calculateDamerauLevenshtein(
                    referenceSequence,
                    value
                )
            }
            if (gcContent) {
                sequenceMetrics['GC Content'] = calculateGCcontent(
                    //referenceSequence,
                    value
                )
            }
            if (conditionalEntropy) {
                sequenceMetrics['Conditional Entropy'] = calculateConditionalEntropy(
                    referenceSequence,
                    value
                )
            }
            if (mutualInformation) {
                sequenceMetrics['Mutual Information'] = calculateMutualInfo(
                    referenceSequence,
                    value
                )
            }
            if (numberOfErrors) {
                sequenceMetrics['Number of Errors'] = calculateNumOfErrors(
                    referenceSequence,
                    value
                )
            }
        calculatedMetrics.push(sequenceMetrics)
       })
       setDataToVisualize(calculatedMetrics)
    }
    
    useEffect(() => {
        const atLeastOneSelected = Object.values(isChecked).some((v) => v);
        setMetricSelectError(!atLeastOneSelected);
    }, [isChecked])

    useEffect(() => {
        verifyLengthOfSequences();
        // eslint-disable-next-line
    }, [inputSequences]); 
    
    const steps = getSteps()
    function getStepContent(step){
        switch(step){
            case 0:
                return (
                    <DataInput
                        handleNext={handleNext}
                        handleChange={handleChange}
                        handleOpen={handleOpen}
                        handleClose={handleClose}
                        selectedFileName={selectedFileName}
                        selectedFile={selectedFile}
                        open={open}
                        
                    />
                )
            case 1:
                return (
                    <Metrics 
                        isChecked={isChecked}
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handleIsChecked={handleIsChecked}
                        handleSelectAll={handleSelectAll}
                        handleUnselectAll={handleUnselectAll}
                        metricsSelectError={metricsSelectError}
                        hammingDistanceError={hammingDistanceError}
                    />
                )
            case 2:
                return (
                    <ResultView 
                        handleNext={handleNext}
                        handleBack={handleBack}
                        dataToVisualize={dataToVisualize}
                        handleStartTest={handleStartTest}
                        handleReset={handleReset}
                    />
                )
            default:
                return 'Unknown step'
        }
    }
    function ColorlibStepIcon(props) {
        const classes = useColorlibStepIconStyles();
        const { active, completed } = props;
        
        const icons = {
            1: 1,
            2: 2,
            3: 3
          };
        return (
          <div
            className={clsx(classes.root, {
              [classes.active]: active,
              [classes.completed]: completed,
            })}
          >
            {icons[String(props.icon)]}
          </div>
        );
      }


    const handleNext = (event) => {
        event.preventDefault()
        const currentStep = activeStep;
        if (currentStep === 1) calculateMetrics();
        setActiveStep(currentStep + 1);
        setOpen(false)
        
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setOpen(true)
        setSelectedFileName('')
    }


    const handleReset = (event) => {
      event.preventDefault()

        setActiveStep(0)
        setSelectedFile('')
        setSelectedFileName('')
        setInputSequences([
            { label: '', value: ''},
            { label: '', value: '' }
        ])
        setIsChecked({
            hammingDistance: false,
            levenshteinDistance: false,
            damerauLevenshteinDistance: false,
            gcContent: false,
            conditionalEntropy: false,
            mutualInformation: false,
            numberOfErrors: false
        })
        setOpen(false)
    }

    //modal
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }



    //handles the testing stage
    const handleStartTest = () => {
        setActiveStep(0)
        setSelectedFile('')
        setSelectedFileName('')
        setInputSequences([
            { label: '', value: ''},
            { label: '', value: '' }
        ])
        setIsChecked({
            hammingDistance: false,
            levenshteinDistance: false,
            damerauLevenshteinDistance: false,
            gcContent: false,
            conditionalEntropy: false,
            mutualInformation: false,
            numberOfErrors: false
        })
        setOpen(true)
    }
    
    return (
        <div>
            <Stepper activeStep={activeStep} steps={steps}>
                {steps.map((label) => {
                    return(
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel> 
                    </Step>)  
                })}
            </Stepper>
            <div>
                <Typography>{getStepContent(activeStep)}</Typography>
            </div>
        </div>
        
    )
}