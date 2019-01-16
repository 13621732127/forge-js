/* eslint no-console:"off" */
const path = require('path');
const args = require('yargs').argv;
const { setupEnv } = require('./env');

const allCommands = [];

/**
 * create a cli
 *
 * @param {String} command command line
 * @param {String} desc documentation of the cli
 * @param {Function} handler cli handler
 */
function cli(command, desc, handler) {
  allCommands.push({
    command,
    desc,
    handler,
  });
}

/**
 * load the cli file
 * @param {String} file the js file to be required.
 */
function requireCli(file) {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(file);
}

function initCli(program) {
  // this will mutate allCommands
  const allCli = path.join(__dirname, '../cli/index.js');
  requireCli(allCli);
  allCommands.forEach(item => {
    program
      .command(item.command)
      .description(item.desc)
      .action(() => {
        setupEnv(args);
        item.handler();
      });
  });
}

function action(execute, run, input) {
  if (typeof input === 'string') {
    let data = null;
    try {
      data = JSON.parse(input);
    } catch (e) {
      console.error(`The input string is not a valid JSON object: ${input}`);
      return null;
    }

    if (data) return execute(data);
  }
  return run();
}

exports.initCli = initCli;
exports.cli = cli;
exports.action = action;