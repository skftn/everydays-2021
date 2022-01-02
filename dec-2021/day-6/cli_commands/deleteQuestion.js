const q = require('../questions')

// Example use case: node app.js edit --id 7 --question 'The Earth is flat' --answer true

exports.command = 'delete [id]';
exports.desc = 'Deleted question matching the provided ID';
exports.builder = (yargs) => {
    yargs
    .positional('id', {
        describe: 'id of the question to delete',
        type: 'number',
    })
}
exports.handler = async (argv) => {
    try {
        if(!argv.id){
            console.log('ID not entered! Please enter the updated question to replace the old question');
        } else {
            const result = await q.deleteQuestionById(argv.id);
            console.log(result ? result: 'Question successfully deleted')
        }
    } catch (err){console.log(err);}
}