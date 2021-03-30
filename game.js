#!/usr/bin/env node

const readline = require('readline');


const MIN_NUMBER= 1
const MAX_NUMBER = 100

const number = Math.floor(MIN_NUMBER + Math.random() * (MAX_NUMBER + 1 - MIN_NUMBER))
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt('Загадано число от 1 до 100 \n')
rl.prompt()
rl.on('line', (input)=> {
    if (Number(input) === number) {
        rl.setPrompt(`Отгадано число ${number}  \n`)
        rl.prompt()
        rl.close()
    }else if(Number(input) > number) {
        rl.setPrompt('Меньше\n')
        rl.prompt()
    }else if(Number(input) < number){
        rl.setPrompt('Больше\n')
        rl.prompt()
    }
})
