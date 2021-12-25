const yargs = require('yargs');
const q = require('../questions')

// Example use case: node app.js add --question 'The Earth is round' --answer true

const questionExample = {
    "question": "Some question",
    "answer": "true or false response"
}

exports.command = 'add [question] [answer]';
exports.desc = `Add a question in this format: \n --question '${questionExample.question}' --answer ${questionExample.answer}`;
exports.builder = (yargs) => {
    yargs
    .positional('question', {
        describe: 'A factual question with true or false answer',
        type: 'string',
    })
    .positional('answer', {
        describe: 'true or false',
        type: 'boolean'
    });
}

exports.handler = async (argv) => {
    await q.postQuestion({"question": argv.question, "answer": argv.answer});
    console.log("Question added!");
}


