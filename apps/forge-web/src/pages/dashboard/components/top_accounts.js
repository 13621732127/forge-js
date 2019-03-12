import React from 'react';
import numeral from 'numeral';
import { useAsync, useLocalStorage } from 'react-use';
import { Link } from 'react-router-dom';
import { fromArc } from '@arcblock/forge-util';

import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AccountActivity from './account_activity';
import forge from '../../../libs/forge';

async function fetchTopAccounts() {
  const { accounts } = await forge.getTopAccounts();
  return accounts.map((x, i) => ({
    address: x.address,
    rank: i + 1,
    moniker: x.moniker,
    balance: x.balance,
    assets: x.numAssets,
    recentNumTxs: x.recentNumTxs,
  }));
}

export default function TopAccountsSection() {
  const state = useAsync(fetchTopAccounts);
  const [token] = useLocalStorage('token');

  if (state.loading) {
    return <CircularProgress />;
  }

  if (state.error) {
    return <p className="error">{state.error.message}</p>;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Rank</TableCell>
          <TableCell align="left">Username</TableCell>
          <TableCell align="center">Balance</TableCell>
          <TableCell align="center">Assets</TableCell>
          <TableCell align="left" style={{ width: '25%' }}>
            Activities
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.value.map((x, i) => (
          <TableRow key={x.address}>
            <TableCell align="left" component="th" scope="row">
              {x.rank}
            </TableCell>
            <TableCell align="left">
              <Link to={`/node/explorer/accounts/${x.address}`}>{x.moniker}</Link>
            </TableCell>
            <TableCell align="center">
              {fromArc(x.balance, token.decimal)} {token.symbol}
            </TableCell>
            <TableCell align="center">{numeral(x.assets).format('0,0')}</TableCell>
            <TableCell align="left">
              <AccountActivity data={x.recentNumTxs} delayMS={i * 500} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
