const q = require('../questions')


exports.command = 'display [id]';
exports.desc = 'Shows list of all questions in database';
exports.builder = (yargs) => {
    yargs
    .positional('id', {
        describe: 'ID of the question to search for',
        type: 'number',
    })
}
exports.handler = async (argv) => {
    try {
        if(!argv.id){
            const contents = await q.getAll();
            console.log("Printing all questions:")
            console.log(contents);
        } else {
            const result = await q.getById(argv.id);
            console.log('Results:')
            console.log(result ? result: 'No matches found')
        }
        
    } catch (err){console.log(err);}
}