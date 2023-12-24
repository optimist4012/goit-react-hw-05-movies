import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InformationLayout = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  border-top: 1px solid #d7d4cd;
  border-bottom: 1px solid #d7d4cd;
  margin: 40px 0;
  padding: 20px 48px;
`;
export const StyledLink = styled(Link)`
  font-size: 24px;
  width: 150px;
  height: 30px;
  color: #252525;
  background-color: #dfdfdf;
  border-radius: 20px;
  text-align: center;
`;
