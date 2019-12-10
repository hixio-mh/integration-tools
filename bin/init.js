#!/usr/bin/env node

const inquirer = require('inquirer');
const { blue } = require('kleur');
const questions = require('../lib/getRepoParams');
const initialize = require('../lib/init.js');

// Log a message when the script is run
console.log(
  `${blue(
    'integration-tools [INIT] '
  )} Initialization procedure starting...`
);

inquirer
  .prompt(questions)
  .then(
    answers => {
      initialize(answers, process.cwd(), __dirname);
      console.log(
        `${blue(
          'integration-tools [EXIT] '
        )} Initialization procedure exiting...`
      );
    }
  );
