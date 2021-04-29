import React from 'react';
import QuestionTest from './QuestionTest';
import { makeStyles, Button, Grid } from '@material-ui/core'





const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
      paddingBottom: 50,
      paddingLeft: 10,
      backgroundColor:'#fafafa',

  
    },
  }))


function SurveyTest({ 
  handleNext, 
  completePage, 
  timer, 
  handleAnswer, 
  showAnswers, 
  userAnswers, 
  handleNextQuestion,
  questions,
  number,
  totalQuestions

}) {
    const { root } = useStyles()
    

    return(
        <div className={root}>
           {
            questions.length === totalQuestions ?
            <QuestionTest 
                questionNr={number + 1}
                totalQuestions={totalQuestions}
                question={questions[number].question}
                handleAnswer={handleAnswer}
                showAnswers={showAnswers}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                
            /> 
            : null}
            <div>
                {showAnswers && userAnswers.length !==totalQuestions? (
                    <Grid container justify='center'>
                        <Button variant='contained'color='primary' onClick={handleNextQuestion}>Next</Button>
                    </Grid>
                ) 
                : showAnswers && userAnswers.length ===totalQuestions ? 
                <Grid container justify='center'>
                    <Button disabled={completePage} variant='contained' color='primary' onClick={handleNext}>Next</Button> 
                </Grid>
                :null}
                
            </div>
        </div>
    )
    
}

export default SurveyTest