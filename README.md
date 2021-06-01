# DNAsmart: DNA Storage Multi-Attribute Ranking Tool

The aim of this tool is to visually represent the effect of attribute weights on the ranking of decoded sequences. To support the ranking of these decoded sequences, from a DNA storage system or experiment, the introduction of weights on certain attributes leads to a specific ranking (favoring specific sequences). By relying on sorting and grouping of such attributes, we obtain an interactive change in the ranking of the best sequences. The rationale is to be able to provide insight into the attribute space by using different attribute combinations. For example, which attribute combination leads to the optimal sequence or Top 3 sequences to compare encoding experiments.

## Dependencies

* Material UI
* LineUp.js
* Firebase

## Usage
**Installation: How to run it locally**
Run:

```bash
npm install
```
to install the tool and its Dependencies.\

In the project directory, you can run:

```bash
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Evaluation 
This repository contains the evaluation Implementation which is used to test the usage of the tool. The evaluation is divided into two steps: the training step and the testing step. The training step is used in order to get familiar with the interacting features of the tool. For each step of the evaluation, there are questions about the usage of the tool. In the training step, hints are provided alongside with the questions.

### General Usage
1. Install and run the tool on your PC
2. Upload your data sets, click Next
3. Select your DNA storage attribute of choice, click Next
4. Explore the rankings of the decoded sequences

### Data set
1. The data sets for the tool must be multi-Fasta file
2. Data sets used for the evaluation can be found in [DNAsmart_data](https://github.com/Sombiri/DNAsmart/tree/develop/src/DNAsmart_data) 






