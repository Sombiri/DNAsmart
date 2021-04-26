import { Stepper, Step, StepLabel, Typography, Grid, Button, makeStyles } from '@material-ui/core'
import React, { useState, useEffect, useRef } from 'react'
import DataInput from './DataInput'
import LastStep from './LastStep'
import Metrics from './Metrics'
import ResultView from './ResultView'
import clsx from 'clsx';
import { calculateHammingDistance } from "../multi-attributes/HammingDistance";
import { calculateLevenshteinDistance } from "../multi-attributes/LevenshteinDistance";
import { calculateDamerauLevenshtein } from "../multi-attributes/DamereauLevenshtein";
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
        'Results',
        'End'
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
        conditionalEntropy: false,
        mutualInformation: false,
        numberOfErrors: false
    })
    const [open, setOpen] = useState(false)
    const [ showPage, setShowPage ] = useState(true)
    const [completePage, setCompletePage] = useState(true)
    const [showTrainPage, setShowTrainPage] = useState(true)
    const [ timer, setTimer] = useState(0)
    const [ surveyData, setSurveyData ] = useState({})
    const countRef = useRef(null)


    
    
    
    let fileReader
    const handleChange = async (event)=>{
        const { name, } = event.target.files[0]
        let newSelectedFileName = selectedFileName
        newSelectedFileName = name
        setSelectedFileName(newSelectedFileName)

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
        //console.log(data)
        let fastaParser = require('../FastaToObject.js');
        let fasta = fastaParser.ParseFasta(data);
        //console.log(fasta)
        let newInputSequences = inputSequences
        newInputSequences = fasta
        //console.log(newInputSequences)
        setInputSequences(newInputSequences)


        let newSelectedFile = data
        //console.log(newSelectedFile)
        setSelectedFile(newSelectedFile);
    }


    const handleSurveyChange = (event) => {
        const {name, value} = event.target
        setSurveyData({...surveyData, [name]:value})
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
        const allSequencesValuesNotRef = [...inputSequences].filter((seq) => {
             return seq.label !== 'Reference'
        }).map((s) => { return s.value})
        const referenceSequence = [...inputSequences].filter((refseq) => {
            return refseq.label === 'Reference'
        }).reduce((acc, item) => { return acc = item.value}, '')
        const seqOfUnequalLength = allSequencesValuesNotRef.some(
            (s) => s.length !== referenceSequence.length
        )
        setIsChecked({ ...isChecked, hammingDistance: false })
        setHammingDistanceError(seqOfUnequalLength) 
    }

    const calculateMetrics = () => {
        const calculatedMetrics = []
        const referenceSequence = [...inputSequences].filter((refseq) => {
            return refseq.label === 'Reference'
        }).reduce((acc, item) => { return acc = item.value}, '')
        let allSequencesNotRef = [...inputSequences].filter((seq) => {
            return seq.label !== 'Reference'
       })
       const { hammingDistance, levenshteinDistance, damerauLevenshteinDistance, conditionalEntropy, mutualInformation, numberOfErrors } = isChecked
       allSequencesNotRef.forEach((seq) => {
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
           if (conditionalEntropy) {
            sequenceMetrics['Conditional Entropy'] = calculateConditionalEntropy(
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


    /* const onCompletePage = useCallback((data) =>{
        console.log(data)
        setShowPage(!showPage)
    }, [showPage]) */

    const showAfterCompleteQuestion = () => {
        return(
            <div>
                <Typography variant='h2'>Thank you for filling out the questions</Typography>
                <Grid container justify='center'>
                    <Button onClick={handleBack}>Back</Button>
                    <Button variant='contained' color='primary' onClick={handleReset}>Start Over</Button>
                </Grid>
            </div>
                
        )
    }

    
    useEffect(() => {
        const atLeastOneSelected = Object.values(isChecked).some((v) => v);
        setMetricSelectError(!atLeastOneSelected);
    }, [isChecked])

    useEffect(() => {
        verifyLengthOfSequences();
    }, [inputSequences]);
    
    const steps = getSteps()
    function getStepContent(step){
        switch(step){
            case 0:
                return (
                    <DataInput
                        handleBack={handleBack}
                        handleNext={handleNext}
                        handleChange={handleChange}
                        handleOpen={handleOpen}
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
                        showTrainPage={showTrainPage}
                        timer={formatTime(timer)}
                    />
                )
            case 3:
                return (
                    <div>
                        {
                            showPage?
                            <LastStep
                                //showCompletePage={data=>onCompletePage(data)}
                                handleReset={handleReset}
                                handleBack={handleBack}
                                handleChange={handleSurveyChange}
                            /> :
                            showAfterCompleteQuestion()
                        }
                    </div>
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
            3: 3,
            4: 4
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

      const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
    
        return `${getMinutes} : ${getSeconds}`
      }
     

    const handleNext = (event) => {
        event.preventDefault()
        const currentStep = activeStep;
        if (currentStep === 1) calculateMetrics();
        if(currentStep === 1 && !showTrainPage) {
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1)
              }, 1000)
        }  //startTimer ie handleStartTimer
        if(currentStep === 2 && !showTrainPage) clearInterval(countRef.current)   //stopTimer ie handleStop
        setActiveStep(currentStep + 1);
        setOpen(false)
        
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setOpen(true)
        setCompletePage(!completePage)
    }

    const handleReset = (event) => {
      event.preventDefault()
      console.log(surveyData)

      /* const userData = surveyData;

      fetch('http://example.com',{ //enter endpoint here
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        }).then(response => {
          response.json().then(data =>{
            console.log("Successful" + data);
          })
      }) */

        setActiveStep(0)
        setSelectedFile('')
        setSelectedFileName('')
        setInputSequences([
            { label: '', value: ''},
            { label: '', value: '' }
        ])
        setShowPage(true)
        setOpen(false)
        setCompletePage(!completePage)
        setTimer(0)
    }

    //modal
    const handleOpen = () => {
        setOpen(true)
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
            conditionalEntropy: false,
            mutualInformation: false,
            numberOfErrors: false
        })
        setShowPage(true)
        setOpen(true)
        setCompletePage(!completePage)
        setShowTrainPage(false)
        setTimer(0)
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





   