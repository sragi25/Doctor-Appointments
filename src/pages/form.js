import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    padding:20px;
    // align-items:center;
    // justify-content:center;
`;
export const Label = styled.label`
    font-size:14px;
`;
export const Input = styled.input`
    height:30px;
    width:100%;
    border-radius:5px;
    margin: 10px 0px;
`;
export const InputButton = styled.input`
    margin: 30px 0px;
    width:100%;
    height:40px;
    color:white;
    background:green;
    border-radius:5px;
`;
function MyForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <Container>
    <Form onSubmit={handleSubmit}>
      <Label>Email
      <Input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </Label>
      <Label>Password
        <Input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </Label>
       
        <InputButton type="button" value="Login"/>
        
    </Form>
    <a href="https://www.w3schools.com">Register for an account?</a>
    </Container>
  )
}
export {MyForm}