const os = require('os');
const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { config, debug } = require('core/env');
const { symbols } = require('core/ui');

function resolveLogPath(folder, file) {
  return path.resolve(`${folder.replace('~', os.homedir())}/${file}`);
}

// TODO: log file path construction use consensus and storage engine config
function findLogFiles() {
  return {
    app: resolveLogPath(config.get('app.path'), config.get('app.logfile')),
    core: resolveLogPath(config.get('forge.path'), config.get('forge.logfile')),
    ipfs: resolveLogPath(config.get('ipfs.path'), config.get('ipfs.logfile')),
    tendermint: resolveLogPath(config.get('tendermint.path'), config.get('tendermint.logfile')),
  };
}

function tailLogFile(logs, type) {
  if (type !== 'all' && !logs[type]) {
    shell.echo(`${symbols.error} Log file for ${type} is not found!`);
    return [];
  }
  if (logs[type]) {
    if (!fs.existsSync(logs[type])) {
      shell.touch(logs[type]);
    }

    return [logs[type]];
  }

  Object.keys(logs).forEach(key => {
    if (!fs.existsSync(logs[key])) {
      shell.touch(logs[key]);
    }
  });

  return Object.values(logs);
}

async function main({ args: [type = 'all'] }) {
  const logs = findLogFiles();
  debug('LogFiles', logs);
  const targetLogs = tailLogFile(logs, type);
  targetLogs.forEach(x => shell.echo(`${symbols.success} tail log ${x}`));
  shell.exec(`tail -f ${targetLogs.join(' ')}`);
}

exports.run = main;
exports.execute = main;