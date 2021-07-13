import styled from 'styled-components';

export const FormDesign = styled.form`
  display:flex;
  flex-direction:column;
  width:300px;
  margin-left:auto;
  margin-right:auto;
`;


export const Input = styled.input`
  background: #00aec9;
  color: #fff;
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #f1ac15;
  }
`;

export const Label = styled.label`
  color: #8d8d8d;
  background: #ffffff;
`