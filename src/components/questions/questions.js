export const json = {
    questions: [
        {
            name: "age",
            type: "text",
            inputType: "number",
            title: "Your age:",
            isRequired: true,
            autoComplete: "age"
        },
        {
            type: "radiogroup",
            name: "gender",
            title: "Gender",
            isRequired: true,
            choices: [
                "Female",
                "Male",
                "Other",
                "Prefer not to say"
            ]
        },
        {
            name: "domainOfExpertise",
            type: "text",
            title: "Enter your domian of expertise/study:",
            isRequired: true,
            autoComplete: "domainOfExpertise"
        },
        {
            type: "rating",
            name: "experience in DNA storage",
            title: "Estimate your experience level in DNA storage systems",
            isRequired: true,
            mininumRateDescription: "Novice",
            maximumRateDescription: "Expert"
        },
        {
            type: "rating",
            name: "experience in infoViz",
            title: "Estimate your experience level in Information Visualization",
            isRequired: true,
            mininumRateDescription: "Novice",
            maximumRateDescription: "Expert"
        },
        {
            type: "matrix",
            name: "Task-Related",
            title: "Please indicate if you agree or disagree with the following statements",
            isRequired: true,
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "upload data",
                    text: "I found it easy to upload the data"
                }, {
                    value: "select attributes",
                    text: "I found it easy to select the attributes"
                }, {
                    value: "how items are ranked",
                    text: "I found it easy to see how the items are ranked"
                }, {
                    value: "group attributes",
                    text: "I found it easy to group the attributes"
                }, {
                    value: "add weights",
                    text: "I found it easy to add weights to the attributes"
                }
            ]
        },
        {
            type: "matrix",
            name: "overall-questions",
            title: "Please indicate if you agree or disagree with the following statements",
            isRequired: true,
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],
            rows: [
                {
                    value: "step-based transition",
                    text: "I found the step-based transition of the workflow easy"
                }, {
                    value: "useful for DNA storage",
                    text: "I think the workflow would be useful for the specific case of ranking molecular clusters in DNA storage"
                }, {
                    value: "use workflow frequently",
                    text: "I think that I would like to use this workflow frequently"
                }, {
                    value: "workflow complex",
                    text: "I found this workflow unnecessarily complex"
                }, {
                    value: "need assistance",
                    text: "I think that I would need assistance to be able to use this workflow"
                }, {
                    value: "well-integrated",
                    text: "I found the various functions in this workflow were well-integrated"
                }, {
                    value: "inconsistency",
                    text: "I thought there was too much inconsistency in this workflow"
                }, {
                    value: "learn very quickly",
                    text: "I would imagine that most people would learn to use this workflow very quickly"
                }, {
                    value: "confident",
                    text: "I felt very confident using this workflow"
                }, {
                    value: "learn alot with workflow",
                    text: "I needed to learn a lot of things before I could get going with this workflow"
                }
            ]
        }
    ]
};