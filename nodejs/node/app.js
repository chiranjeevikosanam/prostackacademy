/* const fs=require('fs');
fs.writeFileSync('notes.txt', 'My name is chiru');
fs.appendFileSync('notes.txt', ' I live in Bangalore'); */

/* const firstname=require('./utils.js') */
/* const name='chiru'; */
/* console.log(firstname) */

/* const add =require('utils.js')
const sum=add(4, -2)
console.log(sum) */

const chalk=require('chalk')
const getNotes=require('notes.js')

/* const validator=require('validator') */

const msg=getNotes()
console.log(msg)

/* console.log(validator.isURL('https/mead.io')) */

const greenMsg=chalk.blue.inverse.bold('success')
console.log(greenMsg)