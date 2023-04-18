import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';


export const Button = styled.div`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const HeartOutlined = styled(FaHeart)`
  color: #ccc;
  font-size: 24px;
`;

export const HeartFilled = styled(FaHeart)`
  color: red;
  font-size: 24px;
`;
