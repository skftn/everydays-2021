const cli = require('./CLIClient')
const qController = require('./questions')

const test = {
    "question": "Stop sign",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
};


const test2 = {
    "id": 1,
    "question": "Poop",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
};

Promise.all([
    cli.printByQuestion('red traffic light'),
    qController.postQuestion(test),
    cli.printAll(),
    qController.updateQuestionById(test2),
    cli.printAll(),
]);