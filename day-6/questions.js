const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'questions.json');

// attempt at using generator functions for unique ids
// src: https://dev.to/rfornal/use-cases-for-javascript-generators-1npc
// function * idCreator() {
//     let i = 5;
//     while(true)
//         yield i++;
// }

// const ids = idCreator();

const writeToFile = async (contents) => {
    await fs.writeFile(filePath, JSON.stringify(contents, null, 2));
}

const getAll = async () => {
    const contents = await fs.readFile(filePath, {encoding: ''});
    return JSON.parse(contents);
}

const getByQuestion = async (arg) => {
    const results = await getAll();
    return results.filter(q => q.question.toLowerCase().includes(arg.toLowerCase()));
}

const getById = async (id) => {
    const results = await getAll();
    return results.find(q => q.id === id);
}


const postQuestion = async ({question, answer}) => {
    if(!question) {
        console.log("Error! Missing question!");
        return;
    }

    const newQuestion = {
        question,
        answer
    }

    // newQuestion.id = ids.next().value;


    const content = await getAll();
    const newId = Math.floor(Math.random() * (10000 - 7) + 7);
    newQuestion.id = newId;
    content.push(newQuestion);


    writeToFile(content);
}

// Attempt at function factory
// const modifyQuestions = async (callback) => {
//     return (id) => {
//         const questions = await getAll();
//         if(questions.some(q => q.id == arg.id)){
//             const newQuestions = questions.filter(q => q.id !== arg.id);
//             callback() ???
//             writeToFile(newQuestions);
//         }
//     }
// }



const updateQuestion = async (arg) => {
    const questions = await getAll();
    if(questions.some(q => q.id === arg.id)){
        const newQuestions = questions.filter(q => q.id !== arg.id);
        newQuestions.push(arg);
        writeToFile(newQuestions);
    } else { return 'Question not found! Nothing updated!'}
}

const deleteQuestionById = async (id) => {
    const questions = await getAll();
    if(questions.some(q => q.id == id)){
        const newQuestions = questions.filter(q => q.id !== id);
        writeToFile(newQuestions);
    } else {return 'Question not found! Nothing updated!'}
}


module.exports = {
    getAll,
    getByQuestion,
    getById,
    postQuestion,
    updateQuestion,
    deleteQuestionById,
}
