/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to declare account and get some free token for the account
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/stake_for_node.js`
 */
const moment = require('moment');
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom } = require('@arcblock/forge-wallet');
const { fromTokenToUnit } = require('@arcblock/forge-util');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

(async () => {
  try {
    const user = fromRandom();

    // 1. declare user
    let hash = await client.declare({
      tx: {
        itx: {
          moniker: `stake_user_${Math.round(Math.random() * 10000)}`,
        },
      },
      wallet: user,
    });

    console.log('user account', `${endpoint}/node/explorer/accounts/${user.toAddress()}`);
    console.log('user declare tx', `${endpoint}/node/explorer/txs/${hash}`);

    // 2. get free tokens to stake
    hash = await client.checkin({
      tx: {
        nonce: 0,
        itx: {
          date: moment(new Date().toISOString())
            .utc()
            .format('YYYY-MM-DD'),
          address: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
        },
      },
      wallet: user,
    });
    console.log('user poke tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 3. get node address
    const { info } = await client.getChainInfo();
    const nodeAddress = info.address;

    // 4. stake for the node
    hash = await client.sendStakeTx({
      tx: {
        itx: {
          to: nodeAddress,
          value: fromTokenToUnit(10),
          message: 'Test Stake',
          data: {
            type: 'StakeForNode',
            value: {},
          },
        },
      },
      wallet: user,
    });
    console.log('user stake tx', `${endpoint}/node/explorer/txs/${hash}`);
    console.log('user stake to', `${endpoint}/node/explorer/accounts/${nodeAddress}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
