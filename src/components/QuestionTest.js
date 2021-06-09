import React from 'react';
import {  Button, makeStyles } from '@material-ui/core'





const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    btndefault: {
        background: '#fafafa',
        borderRadius: 5,
        border: '1px solid',
        color: 'black',
        height: 20,
        padding: '10px 30px',
    },
    btnnotselect: {
        background: '#fafafa',
        borderRadius: 5,
        border: '1px solid',
        color: 'black',
        height: 20,
        padding: '10px 30px',
    },
    btnselect:{
        background: '#4caf50',
        borderRadius: 4,
        border: '1px solid',
        color: 'black',
        height: 20,
        padding: '10px 30px',
    }

  }));




function QuestionTest({ 
    //data: {question, correct_answer, answers, incorrect_answers},
    questionNr, 
    question,
    totalQuestions, 
    userAnswer,
    answers,
    handleAnswer,
    showAnswers}) 
    {
    const { root, btndefault, btnselect, btnnotselect } = useStyles()

    
    return(
        <div>
            <div>
                <p>Question {questionNr} of {totalQuestions}</p>
                <p><b>{question}</b></p>
            </div>
            {answers.map((answer) => {
                 const btnColor = showAnswers
                    ? userAnswer?.answer === answer 
                         ? btnselect 
                         : !showAnswers ?
                            btndefault 
                            :btnnotselect
                    :btndefault
                 


                return(
                <div key={answer} className={root}>
                    <Button disabled={btnColor===btnnotselect} variant='contained' className={`${btnColor}`}  disableFocusRipple={true} size='small' onClick={()=> handleAnswer(answer)}>
                        {answer}
                    </Button>
            </div>
            )})}
            {/* <div>
                {showAnswers && (
                    <Grid container justify='center'>
                        <Button className={btndefault} onClick={handleNextQuestion}>Next Question</Button>
                    </Grid>
                )}
            </div>
             */}
            
        </div>
    )
    
}

export default QuestionTest