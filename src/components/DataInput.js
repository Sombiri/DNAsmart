import React from 'react'
import { Button, Grid, Typography, makeStyles, Modal } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    
    },
    paper: {
        position: 'absolute',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: 400,
        width: 400,
        backgroundColor: 'lightgrey', 
        
    },
    paper2: {
        paddingLeft: '25%',
        paddingRight: '25%',
        paddingBottom: '5%',
        paddingTop: '5%'
    },
    uploadButton: {
        display: 'none'
    }

}))

export default function DataInput({ handleOpen, handleNext, handleChange, selectedFileName, selectedFile, open }) {
    const { paper2, paper, uploadButton } = useStyles()


    const body = (
        // <div className={paper}>
          <form className={paper} onSubmit={handleNext}>
                <h2 id="simple-modal-title">Encoded and Decoded sequence</h2>
                <p id="simple-modal-description">
                    Please upload your encoded and decoded sequence
                </p>
                
                <input
                accept=".fasta"
                className={uploadButton}
                id="contained-button-file"
                multiple
                type="file"
                required
                onChange={handleChange}
                />
                <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                    Upload
                </Button>
                </label>
                <Typography>{selectedFileName}</Typography>
            {selectedFileName.endsWith('.fasta') ?  
            <Grid container justify='center'>
                <Button variant='contained' color='primary' type='submit'>Next</Button>
            </Grid> :null}
          </form>
        //</div>
      );

    return (
        <div className={paper2}>
             <p>
                <h2>Welcome to DNAsmart: DNA Storage Multi-Attribute Ranking Tool</h2>
                In the following survey, you will have two steps: <b>Step 1 and Step 2.</b><br/> 
                There are questions for each step and at the end there is an additional survey <br/>to evaluate this tool and gather anonymous data from your participation.<br/><br/>

                The dataset for this evaluation can be found <a href='https://dnasmart.mathematik.uni-marburg.de/MESA_fasta.php'>here.</a><br/>
                <b>Step 1</b> will show how to use our new tool. <br/>
                <b>Step 2</b> will evaluate your usage. <br/>
                Kindly upload the dataset accordingly.<br/><br/>
                <b>Take your time to answer as accurately as possible.</b><br/> Please click on <b>'Start'</b> button when you are ready to start.
              </p>
              <Button variant='contained' color='primary' onClick={handleOpen}>
                Start
              </Button>
            <Modal
                open={open}
                //onClose={handleNext}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={paper2}
            >
                {body}
                
            </Modal>
        </div>
        
    )
}
