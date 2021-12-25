const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'questions.json');

// src: https://dev.to/rfornal/use-cases-for-javascript-generators-1npc
function * idCreator() {
    let i = 5;
    while(true)
        yield i++;
}

const ids = idCreator();

const writeToFile = async (contents) => {
    await fs.writeFile(filePath, JSON.stringify(contents));
}

const getAll = async () => {
    const contents = await fs.readFile(filePath, {encoding: ''});
    return JSON.parse(contents);
}

const getByQuestion = async (arg) => {
    const results = await getAll();
    return results.find(q => q.question.toLowerCase().includes(arg.toLowerCase()));
}

const getById = async (id) => {
    const results = await getAll();
    return results.find(q => q.id === id);
}


const postQuestion = async ({question, A, B, C, D, answer}) => {
    if(!question || !A || !B || !C || !D || !answer) {
        console.log("Error! Missing values!");
        return;
    }

    const newQuestion = {
        question,
        A, B, C, D,
        answer
    }

    newQuestion.id = ids.next().value;

    console.log("the created question:", newQuestion)

    const content = await getAll();
    content.push(newQuestion);

    console.log("The contents: ", content)

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



const updateQuestionById = async (arg) => {
    const questions = await getAll();
    if(questions.some(q => q.id === arg.id)){
        const newQuestions = questions.filter(q => q.id !== arg.id);
        newQuestions.push(arg);
        console.log("The arg array", arg)
        console.log("The new questions", newQuestions)
        writeToFile(newQuestions);
    } else {console.log('Question not found! Nothing updated!')}
}

const deleteQuestionById = async (id) => {
    const questions = await getAll();
    if(questions.some(q => q.id == id)){
        const newQuestions = questions.filter(q => q.id !== id);
        writeToFile(newQuestions);
    } else {console.log('Question not found! Nothing updated!')}
}


module.exports = {
    getAll,
    getByQuestion,
    getById,
    postQuestion,
    updateQuestionById,
    deleteQuestionById,
}
