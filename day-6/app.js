const cli = require('./CLIClient')
const q = require('./questions')
const yargs = require('yargs')

yargs.commandDir('./cli_commands').demandCommand().argv

yargs.parse();