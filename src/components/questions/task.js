export const json = {
    // title: "American History",
    //showProgressBar: "bottom",
    showTimerPanelMode: "page",
    showTimerPanel: "bottom",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start",
    showPrevButton: false,
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "In the following survey, you will be given a series of questions regarding the use of the visualization above. <br/><br/> <br>At the end there is an additional survey to evaluate this approach and gather anonymous data of your participation.</br> <b>Take your time to answer as accurately as possible.<br></b> Please click on <b>'Start'</b> button when you are ready.</br>"
                }
            ]
        }, {
            pages:[0],
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "all-attributes",
                    title: "Please toggle all the attributes and choose the TOP 3 that is presented",
                    choicesOrder: "random",
                    choices: [
                        "Decode seq1, 2, 3", "Decode seq2, 3, 1", "Decode seq1, 3, 2", "Decode seq3, 2, 1", "Decode seq3, 1, 2"
                    ],
                    correctAnswer: "Decode seq1, 2, 3"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "sortbyhammingdistance",
                    title: "Sort the results using only one attribute (the hamming distance) and choose the updated TOP3",
                    choicesOrder: "random",
                    choices: [
                        "Decode seq1, 2, 3", "Decode seq2, 3, 1", "Decode seq1, 3, 2", "Decode seq3, 2, 1", "Decode seq3, 1, 2"
                    ],
                    correctAnswer: "Decode seq1, 3, 2"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "groupattributes",
                    title: "Please add weights for the following attributes (Number of Errors (60%), Levenshtein Distance (30%), Hamming Distance (30%)) and sort, then report the updated TOP3.",
                    choicesOrder: "random",
                    choices: [
                        "Decode seq1, 2, 3", "Decode seq2, 3, 1", "Decode seq1, 3, 2", "Decode seq3, 2, 1", "Decode seq3, 1, 2"
                    ],
                    correctAnswer: "Decode seq 2, 3, 1"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};