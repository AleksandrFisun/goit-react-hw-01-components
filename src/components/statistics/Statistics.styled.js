import styled from 'styled-components';
export const StatisticsBlock = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
  background-color: white;
  margin: 40px;
`;
export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  padding: 20px 10px 20px 10px;
`;
export const List = styled.ul`
  display: flex;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 0.5px solid ${p => p.theme.color.black};
`;
