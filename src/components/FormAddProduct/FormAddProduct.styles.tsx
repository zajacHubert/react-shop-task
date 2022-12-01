import styled from 'styled-components';

export const FormAddProductContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  width: 60%;
  margin: 1.5rem auto;
  padding-top: 1rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin: 0 auto;
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  border: 1px solid lightgray;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin: 0.3rem 0 1rem 0;
`;

export const Label = styled.label`
  font-size: 1.2rem;
`;

export const Select = styled.select`
  border: 1px solid lightgray;
  padding: 0.5rem 0 0.5rem 0.2rem;
`;

export const AddButton = styled.button`
  background-color: transparent;
  color: #000;
  border: 1px solid black;
  width: 35%;
  margin-top: 2rem;
  padding: 0.7rem 0;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const ErrorP = styled.p`
  color: #c62828;
  margin-bottom: 0.5rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;
