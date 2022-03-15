import styled from 'styled-components'

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 200px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.div`
  background-color: #fff;
  display: grid;
  justify-content: center;
  border-radius: 10px;
  width: 250px;
  height: 700px;
  & div > {
    margin-top: 20px;
  }
`;