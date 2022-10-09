import styled from 'styled-components';
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: ${p => p.theme.color.white};
`;
export const Avatar = styled.img`
  width: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid ${p => p.theme.color.black};
  border-radius: 50%;
`;
export const Tag = styled.p`
  margin-bottom: 6px;
  font-size: 16px;
  font-weight: 400;
  color: lightslategray;
`;
export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;
export const Location = styled.p`
  margin-bottom: 26px;
  font-size: 16px;
  font-weight: 400;
  color: lightslategray;
`;
