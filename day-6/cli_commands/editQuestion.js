const q = require('../questions')

// Example use case: node app.js edit --id 7 --question 'The Earth is flat' --answer true

exports.command = 'edit [id] [question] [answer]';
exports.desc = 'Shows list of all questions in database';
exports.builder = (yargs) => {
    yargs
    .positional('id', {
        describe: 'id of the question to update',
        type: 'number',
    })
    .positional('question', {
        describe: 'question',
        type: 'string'
    })
    .positional('answer', {
        describe: "answer",
        type: 'boolean'
    });
}
exports.handler = async (argv) => {
    try {
        if(!argv.id || !argv.question || !argv.answer){
            console.log('Question not entered! Please enter the updated question to replace the old question');
        } else {
            const newQuestion = {
                "id": argv.id,
                "question": argv.question,
                "answer": argv.answer
            };
            const result = await q.updateQuestion(newQuestion);
            console.log(result ? result: 'Question successfully updated')
        }
    } catch (err){console.log(err);}
}