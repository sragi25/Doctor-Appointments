import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
   font-size:26px;
   margin-top:20px;
   
`;

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    padding:20px;
    border:1px solid grey;
    // align-items:center;
    // justify-content:center;
`;
export const Label = styled.label`
    font-size:14px;
`;
export const Footer = styled.label`
   display:flex;
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
    margin-right:6px;
    background:${props => props.color ? props.color : "green"};
    border-radius:5px;
`;
function DoctorSearchForm(props) {
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
    <Container> Doctor Search
    <Form onSubmit={handleSubmit}>
      <Label>Specialization
      <Input 
        type="text" 
        name="specialization" 
        value={inputs.specialization || ""} 
        onChange={handleChange}
      />
      </Label>
      <Label>Doctor Name
        <Input 
          type="text" 
          name="doctorname" 
          value={inputs.doctorname || ""} 
          onChange={handleChange}
        />
        </Label>
        <Label>City
      <Input 
        type="text" 
        name="city" 
        value={inputs.city || ""} 
        onChange={handleChange}
      />
      </Label>
      <Label>State
        <Input 
          type="text" 
          name="state" 
          value={inputs.state || ""} 
          onChange={handleChange}
        />
        </Label>
       <Footer>
        <InputButton type="button" value="Search" />
        <InputButton type="button" value="Reset" color="orange" />
        </Footer>
    </Form>
   
    </Container>
  )
}
export {DoctorSearchForm}