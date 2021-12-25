const q = require('../questions')

// Example use case: node app.js find --text 'Horoscopes accurately predict'

exports.command = 'find [text]';
exports.desc = 'Display questions matching the search terms';
exports.builder = (yargs) => {
    yargs
    .positional('text', {
        describe: 'the textual content inside the question that you are looking for',
        type: 'string',
    })
}
exports.handler = async (argv) => {
    try {
        if(!argv.text){
            console.log('No search terms entered! ')
        } else {
            const results = await q.getByQuestion(argv.text);
            console.log('Results:')
            console.log(results.length > 0 ? results:'No results found!')
        }
        
    } catch (err){console.log(err);}
}