/* eslint-disable import/no-extraneous-dependencies */
/* eslint no-console:"off" */

/**
 * This script demonstrates how to migrate account
 *
 * Run script with: `DEBUG=@arcblock/grpc-client node examples/migrate_account.js`
 */
const Mcrypto = require('@arcblock/mcrypto');
const GRpcClient = require('@arcblock/grpc-client');
const { fromRandom, WalletType } = require('@arcblock/forge-wallet');

const endpoint = process.env.FORGE_API_HOST || 'http://127.0.0.1:8210'; // testnet
const client = new GRpcClient({ endpoint: 'tcp://127.0.0.1:28210' });
const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

const type = WalletType({
  role: Mcrypto.types.RoleType.ROLE_ACCOUNT,
  pk: Mcrypto.types.KeyType.ED25519,
  hash: Mcrypto.types.HashType.SHA3,
});

(async () => {
  try {
    const migrateFrom = fromRandom(type);
    const migrateTo = fromRandom(type);

    // 1. declare migrate_from account
    let hash = await client.declare({
      moniker: `migrate_from_${Math.round(Math.random() * 10000)}`,
      wallet: migrateFrom,
    });

    console.log('from account', `${endpoint}/node/explorer/accounts/${migrateFrom.toAddress()}`);
    console.log('from account tx', `${endpoint}/node/explorer/txs/${hash}`);
    await sleep(3000);

    // 2. migrate: with from's pk/sk
    hash = await client.migrateAccount({
      from: migrateFrom,
      to: migrateTo,
    });

    console.log('migrate tx', `${endpoint}/node/explorer/txs/${hash}`);
    console.log('to account', `${endpoint}/node/explorer/accounts/${migrateTo.toAddress()}`);
  } catch (err) {
    console.error(err);
    console.log(JSON.stringify(err.errors));
  }
})();
