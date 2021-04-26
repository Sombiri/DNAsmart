import React, { useState, useEffect }from 'react';
import QuestionTest from './QuestionTest';
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

const TOTAL_QUESTIONS = 3


function SurveyTest({ handleNext, completePage, timer}) {
    const { root } = useStyles()

    const [ questions, setQuestions ] = useState([])
    const [ number, setNumber ] =useState(0)
    const [ userAnswers, setUserAnswers] = useState([])
    const [ showAnswers, setShowAnswers ] = useState(false)
    


    const fetchQuestions = async() => {
        await fetch('./test-data.json', {
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
          correctAnswer: questions[number].correct_answer,
          time: timer
      }
      setUserAnswers(prev => [...prev, answerObject])
      
      setShowAnswers(true) 
    }
    //console.log(timer)

    
    //console.log(holder)


    const sendData = () => {
        let holder = []
        holder = userAnswers
        const userData = holder
        console.log(userData)
  
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
      } //pass info to server 

      /* useEffect(() =>{
        sendData()
      }, []) */

      sendData()
   
    const handleNextQuestion = () =>{
        setShowAnswers(false)
        setNumber(number+1)
  
    }

    return(
        <div className={root}>
           {
            questions.length === TOTAL_QUESTIONS ?
            <QuestionTest 
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                
            /> 
            : null}
            <div>
                {showAnswers && userAnswers.length !==TOTAL_QUESTIONS? (
                    <Grid container justify='center'>
                        <Button variant='contained'onClick={handleNextQuestion}>Next</Button>
                    </Grid>
                ) 
                : showAnswers && userAnswers.length ===TOTAL_QUESTIONS ? 
                <Grid container justify='center'>
                    <Button disabled={completePage} variant='contained' onClick={handleNext}>Next</Button> 
                </Grid>
                :null}
                
            </div>
        </div>
    )
    
}

export default SurveyTest