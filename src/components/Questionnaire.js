import React, {useState, useEffect} from "react";
import Element from "./form-components/Element";



function Questionnaire({handleChange}) {
    

    const [ elements, setElements ] = useState(null)
    //const [ surveyData, setSurveyData ] = useState({})

    const fetchQuestions = async() => {
        await fetch('./questions.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(response => response.json())
            .then(function(myJson){
                setElements(myJson)
                
            }).catch(
                function(err){
                    console.log(err, ' error')
                }
            )
    }
    useEffect(() =>{
      fetchQuestions()
    }, [])

    const { surveyquestions, titlelabel } = elements ?? {}  //becomes empty object if nothing is found 

    /* const handleSurveyChange = (event) => {
      const {name, value} = event.target
      setSurveyData({...surveyData, [name]:value})
    } */


    /* const handleSubmit = (event) => {
      event.preventDefault()
      console.log(surveyData)

      const userData = surveyData;

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
      }) 
    } //pass info to server  */
    
    

  return (
      <div>
        <h2>{titlelabel}</h2>
        <p><b>Thank you for participating in the study. Please take your time to answer each question. All questions is required</b></p>
            {surveyquestions? surveyquestions.map((surveyquestion, i) =>
              <Element 
                surveyquestion={surveyquestion}
                handleChange={handleChange} 
                key={i}
              />) :null}

        
    </div>
    
  );
}

export default Questionnaire;