import styled from 'styled-components';
export const Container = styled.div`
  padding: 6rem 2rem 2rem;
  background-color: #fff9e7;
  color: #5d4037;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
