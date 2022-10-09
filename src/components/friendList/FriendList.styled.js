import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin: 40px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 200px;
  margin: 0px 0px 10px 10px;
  background-color: ${p => p.theme.color.white};
  &:last-child {
    margin: 0px 0px 0px 10px;
  }
`;
export const Status = styled.span`
  border: 1px solid ${p => p.theme.color.black};
  background-color: ${p =>
    p.active ? p.theme.color.green : p.theme.color.red};
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;
export const Name = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;
`;
