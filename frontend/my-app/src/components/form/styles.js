import styled from 'styled-components';

export const FormDesign = styled.form`
  display:flex;
  flex-direction:column;
  width:300px;
  margin-left:auto;
  margin-right:auto;
  align-items:center;
`;


export const Input = styled.input`
  
`;

export const Label = styled.label`
  color: #8d8d8d;
  background: #ffffff;
`

export const FormGroup = styled.div`

padding-bottom:15px;

input{
  padding: 0.8rem;
  margin: auto;
  margin-top: 0.5rem;
  width: 20rem;
  display: block;
  border-radius: 0.5rem;
  outline: none;
  border: 1px solid #bdbdbb;
  margin-bottom:0.5rem;
}

border:1px solid grey;
margin-bottom: 15px;
width:500px;
border-radius:5px;

.header {
  background: linear-gradient(to right, rgb(51, 51, 51), #919191);
  color: #fff;
  height: 2rem;
  padding: 1rem 0;
  margin-bottom: 2rem;
  h5 {
    display:table-cell; vertical-align:middle;font-size: 1.4rem;padding-left:1rem;
  }
}

`

export const Button = styled.button`

background: #333;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.5rem 0.7rem;
  width: 7rem;
  margin: 1rem auto;
  border-radius: 0.9rem;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
`