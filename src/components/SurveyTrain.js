import React, { useState, useEffect }from 'react';
import QuestionTrain from './QuestionTrain';
import { makeStyles, Button, Grid } from '@material-ui/core'
import { shuffleArray } from '../utils';




const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      paddingBottom: 50,
      paddingLeft: 10,
      backgroundColor:'#fafafa',
    },
  }))

const TOTAL_QUESTIONS = 2


function SurveyTrain({handleStartTest}) {
    const { root } = useStyles()

    const [ questions, setQuestions ] = useState([])
    const [ number, setNumber ] =useState(0)
    const [ showAnswers, setShowAnswers ] = useState(false)
    const [ userAnswers, setUserAnswers ] = useState([])

    const fetchQuestions = async() => {
        await fetch('./train-data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(response => response.json())
            .then(function(myJson){
                const questions = myJson.results.map((question) => ({
                  ...question,
                  answers: shuffleArray([question.correct_answer, ...question.incorrect_answers])
                }))

                setQuestions(questions)
                
            }).catch(
                function(err){
                    console.log(err, ' error')
                }
            )
    }
    useEffect(() =>{
      fetchQuestions()
    }, [])


    const handleAnswer = (answer) => {
      const correct = questions[number].correct_answer === answer

      const answerObject = {
          question : questions[number].question,
          answer,
          correct,
          correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
      
      setShowAnswers(true) 
    }

    
    const handleNextQuestion = () =>{
      setShowAnswers(false)
      setNumber(number+1)
  
    }

    return(
        <div className={root}>
           {number >= questions.length ?
           <div>
             <p>
               <h4>
                 This is the end of the Step 1, Click here to <Button variant='outlined' onClick={handleStartTest}>start Step 2</Button> 
                </h4>
              </p>
           </div> :
           /* quizOver && questions.length === TOTAL_QUESTIONS ? 
            <div>
              <p>
                In the following survey, you will be given a series of questions regarding the use of the visualization above. <br/><br/> 
                At the end there is an additional survey to evaluate this approach and gather anonymous data of your participation.<br/>
                Take your time to answer as accurately as possible.<br/> Please click on <b>'Start'</b> button when you are ready.
              </p>
              <Button variant='contained' color='primary' onClick={startQuiz}>
                Start
              </Button>
            </div> :  */
            questions.length === TOTAL_QUESTIONS ?
            <QuestionTrain 
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                data={questions[number]}
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
            /> 
            : null}
            <div>
                {showAnswers && (
                    <Grid container justify='center'>
                        <Button variant='contained'color='primary' onClick={handleNextQuestion}>Next</Button>
                    </Grid>
                )}
            </div>
        </div>
    )
    
}

export default SurveyTrain