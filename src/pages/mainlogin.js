import React, { useState } from "react";
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
`;
export const InputButton = styled.input`
margin: 30px 0px;
width:100%;
height:40px;
color:white;
background:green;
border-radius:5px;
`;

function MainLogin(props) {
        return (
                <>
                        <Container>
                             

                                <Form>
                                        <Label>Email</Label>
                                        <Input type="text" /><br /><br />
                                        <Label>Password</Label>
                                        <Input type="text" />
                                        <InputButton type="button" value="Login"/>
                                        <a href="https://www.w3schools.com">Register for an account?</a>
                                </Form>


                        </Container>
                </>
        )

}

export { MainLogin }