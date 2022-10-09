import styled from 'styled-components';
export const StatsBlock = styled.ul`
  display: flex;
  background-color: darkgrey;
  border: 0.5px solid ${p => p.theme.color.black};
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70px;
  width: 102px;
  border-right: 0.5px solid ${p => p.theme.color.black};
  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  padding-right: 10px;
  padding-left: 10px;
`;
