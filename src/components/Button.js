import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 0.9rem;
  background: var(--lightBlue);
  border: 0.05rem solid var(--mainWhite);
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;
  color: var(--mainDark);
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainWhite);
    color: var(--mainDark);
  }
  &:focus {
    outline: none;
  }
`;
