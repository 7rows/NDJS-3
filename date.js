#!/usr/bin/env node
const yargs = require('yargs');
const format = require('date-fns/format');
const add = require('date-fns/add');
const sub = require('date-fns/sub');



const argv = yargs
    .command('current', 'Current Date ISO')
    .command('add', 'Get new date in feature ISO')
    .command('sub', 'Get date in the back ISO')
    .alias('day','d')
    .alias('month','m')
    .alias('year', 'y')
    .alias('help', 'h')
    .help()
    .argv

if (argv._.includes('current')) {
    if(argv.year){
        console.log(format(new Date(), 'yyyy'))
    }else if(argv.month) {
        console.log(format(new Date(), 'MM, MMMM'))
    }else if(argv.date){
        console.log(format(new Date(), 'dd.mm.yyyy'))
    }else{
        console.log(new Date())
    }
}

if(argv._.includes('add')) {
    if(argv.d) {
        console.log(add(new Date, {days: `${argv.d}`}))
    }else if (argv.m) {
        console.log(add(new Date, {months: `${argv.m}`}))
    }else if (argv.y) {
        console.log(add(new Date, {year: `${argv.y}`}))
    }
}


if(argv._.includes('sub')) {
    if(argv.d) {
        console.log(sub(new Date, {days: `${argv.d}`}))
    }else if (argv.m) {
        console.log(sub(new Date, {months: `${argv.m}`}))
    }else if (argv.y) {
        console.log(sub(new Date, {year: `${argv.y}`}))
    }
}
