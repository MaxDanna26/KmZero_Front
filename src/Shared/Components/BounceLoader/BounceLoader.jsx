import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  margin-top: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  gap: 10px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #3b82f6;
  border-radius: 50%;
  animation: ${bounce} 0.6s infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;

export const BounceLoader = () => {
  return (
    <LoaderContainer>
      <Dot $delay="-0.3s" />
      <Dot $delay="-0.15s" />
      <Dot $delay="0s" />
    </LoaderContainer>
  );
};
