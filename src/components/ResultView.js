import React, { useEffect, useState } from 'react'
import { Grid, makeStyles, Button } from '@material-ui/core'
import { LineUp, LineUpStringColumnDesc, LineUpNumberColumnDesc } from "lineupjsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1

  },
    lineUp: {
        maxHeight: "80vh",
      },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        height:'auto',
        width: 'auto',
        backgroundColor: 'lightgrey'
        
    },
}))


export default function ResultView({
  handleBack, 
  handleReset,
  dataToVisualize
}) {
    const { lineUp, root } = useStyles()


    const [ lineUpColumns, setLineUpColumns ] = useState([
        <LineUpStringColumnDesc 
            key='label'
            column='label'
            label='Label'
            width={150}
        />
    ])

    const getMaximumValueOfMetric = (metric) => {
        const maxValue = Math.max.apply(
            Math,
            dataToVisualize.map((seq) => {
                return seq[metric]
            })
        )
        return maxValue
    }

    const buildLineUpColumns = () => {
        const features = dataToVisualize[0]
        const newLineUpColumns = [...lineUpColumns]
        if (features.hasOwnProperty("Hamming Distance")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc
                key="hamming"
                column="Hamming Distance"
                label="Hamming Distance"
                color="#1170aa"
                domain={[0, getMaximumValueOfMetric("Hamming Distance")]}
                width={200}
              />
            );
        }
        if (features.hasOwnProperty("Levenshtein Distance")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc
                key="levenshtein"
                column="Levenshtein Distance"
                label="Levenshtein Distance"
                color="#a3cce9"
                domain={[0, getMaximumValueOfMetric("Levenshtein Distance")]}
                width={200}
              />
            );
          }
          if (features.hasOwnProperty("Conditional Entropy")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc 
                key="conditionalEntropy"
                column="Conditional Entropy"
                label="Conditional Entropy"
                color="#c85200"
                domain={[0, getMaximumValueOfMetric("Conditional Entropy")]}
                width={200}
              />
            );
          }
          if (features.hasOwnProperty("Damerau-Levenshtein Distance")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc 
                key="damerauLevenshtein"
                column="Damerau-Levenshtein Distance"
                label="Damerau-Levenshtein Distance"
                color="#ffbc79"
                domain={[0, getMaximumValueOfMetric("Damerau-Levenshtein Distance")]}
                width={200}
              />
            );
          } 
          if (features.hasOwnProperty("GC Content")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc 
                key="gcContent"
                column="GC Content"
                label="GC Content"
                color="#7bccc4"
                domain={[0, getMaximumValueOfMetric("GC Content")]}
                width={200}
              />
            );
          }
          if (features.hasOwnProperty("Mutual Information")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc 
                key="mutualInformation"
                column="Mutual Information"
                label="Mutual Information"
                color="#5fa2ce"
                domain={[0, getMaximumValueOfMetric("Mutual Information")]}
                width={200}
              />
            );
          }
          if (features.hasOwnProperty("Number of Errors")) {
            newLineUpColumns.push(
              <LineUpNumberColumnDesc 
                key="numberOfErrors"
                column="Number of Errors"
                label="Number of Errors"
                color="#fc7d0b"
                domain={[0, getMaximumValueOfMetric("Number of Errors")]}
                width={200}
              />
            );
          }
          setLineUpColumns(newLineUpColumns);
    }

    useEffect(() => {
        buildLineUpColumns();
        // eslint-disable-next-line
    }, [])

    return (
      <div className={root}>
        <LineUp className={lineUp} data={dataToVisualize}>
          {lineUpColumns}
        </LineUp>                
        <Grid container justify='center'>
          <Button onClick={handleBack}>Back</Button> 
          <Button variant='contained' color='primary' onClick={handleReset}>Start Over</Button>
        </Grid> 
      </div>
    )
}
