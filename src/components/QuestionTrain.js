import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import { Button, makeStyles, Tooltip,} from '@material-ui/core'
import sortImg  from "/Users/somtee/Downloads/DNAsmart/src/images/sortImg.png";
import editWeight from "/Users/somtee/Downloads/DNAsmart/src/images/editWeights.png";





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
    btncorrect: {
        background: '#fafafa',
        borderRadius: 4,
        border: '1px solid',
        color: 'green',
        height: 20,
        padding: '10px 30px',
    },
    btnincorrect:{
        background: '#fafafa',
        borderRadius: 4,
        border: '1px solid',
        color: 'red',
        height: 20,
        padding: '10px 30px',
    },
    good:{
        color: 'green'
    },
    bad:{
        color: 'red'
    }

  }));




function QuestionTrain({
    data: {question, answers}, 
    questionNr, 
    totalQuestions, 
    showAnswers,
    handleAnswer,
    userAnswer}) 
    {
    const { root, btndefault, btncorrect, btnincorrect, good, bad, btnnotselect } = useStyles()

    
    return(
        <div>
            <div>
                <p><b>The series of questions are regarding the use of the visualization below</b></p>
                <p>Question {questionNr} of {totalQuestions}</p>
                {questionNr === 1?
                    <div>
                        <p>{question}</p>
                        <span><b>Hint:</b> To sort, click on the icon 
                            <Tooltip title='Click to sort' placement='left-end'>
                                <img src={sortImg} alt='sort' />
                            </Tooltip> for the attribute mentioned 
                        </span> 
                    </div>:
                    <div>
                        <p>{question}</p>
                        <span><b>Hint:</b> Drag and Drop Levenshtein Distance onto Number of errors then change the weights by clicking
                            <Tooltip title='Click to Edit weight' placement='left-end'>
                                <img src={editWeight} alt='edit weight'/>
                            </Tooltip> to enter weights for merged attributes. Don't forget to sort.
                        </span> 
                    </div>
            }
                
            </div>
            {answers.map((answer) => {
                const btnColor = showAnswers 
                    ? userAnswer?.correctAnswer === answer
                        ? btncorrect
                        : userAnswer?.answer === answer 
                            ? btnincorrect 
                            : btnnotselect
                    : btndefault

                return(
                <div key={answer} className={root}>
                    <Button disabled={btnColor===btnnotselect} className={`${btnColor}`} variant='contained' size='small' onClick={()=> handleAnswer(answer)}>
                        {answer}
                    </Button>
                    {showAnswers?
             btnColor === btnincorrect?
                <ClearIcon className={bad}/>
            : btnColor === btncorrect?
                <CheckIcon className={good}/>
                : null
            :null}
            </div>
            )})}
            
        </div>
    )
    
}

export default QuestionTrain