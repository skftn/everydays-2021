const yargs = require('yargs');
const q = require('./questions')

// not complete
const printAll = async () => {
    try {
        const contents = await q.getAll();
        console.log("Printing all questions:")
        console.log(contents);
    } catch (err){console.log(err);}
}

const printByQuestion = async (arg) => {
    try{
        const target = await q.getByQuestion(arg);
        console.log("Results matching: ", arg);
        console.log(target ? target: 'No results found!');
    } catch(err) {console.log(err)}
}

const printById = async (id) =>{
    try {
        const target = await q.getById(id);
        console.log("Results matching ID: ", id)
        console.log(target ? target: 'No results found')
    } catch(err){console.log(err)};
}

module.exports = {
    printAll,
    printById,
    printByQuestion
}