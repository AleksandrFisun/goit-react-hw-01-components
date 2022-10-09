import React from 'react';
import PropTypes from 'prop-types';
import {
  TableTransactions,
  TableHead,
  TableTh,
  TableTr,
  TableTd,
  TableList,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ transactions }) => {
  return (
    <TableTransactions>
      <TableHead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableHead>
      <tbody>
        {transactions.map(transaction => (
          <TableList key={transaction.id}>
            <TableTd>{transaction.type}</TableTd>
            <TableTd>{transaction.amount}</TableTd>
            <TableTd>{transaction.currency}</TableTd>
          </TableList>
        ))}
      </tbody>
    </TableTransactions>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
