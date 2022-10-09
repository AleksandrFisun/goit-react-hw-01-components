import styled from 'styled-components';
export const TableTransactions = styled.table`
  width: 700px;
  text-align: center;
  margin: 40px;
`;
export const TableHead = styled.thead`
  background: red;
`;
export const TableTr = styled.tr``;
export const TableTh = styled.th`
  padding: 10px;
`;

//
export const TableList = styled.tr`
  background: white;
  &:nth-child(even) {
    background-color: rgb(255, 255, 137);
  }
`;
export const TableTd = styled.td`
  padding: 10px;
`;
