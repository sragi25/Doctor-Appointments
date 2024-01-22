import React,{ useState } from 'react';
import styled from "styled-components";
import axios from "axios";
import {Modal} from "./modal"

const MyProfile = styled.div`
    display:flex;
     //flex-direction:column;
     flex-wrap:wrap;
    // align-items:center;
    // justify-content:center;
   font-size:25px;
   margin:${props => props.boxM ? props.boxM : "20px"};
   border:1px solid grey;
   height:${props => props.boxH ? props.boxH : "auto"};
   width:${props => props.boxW ? props.boxW : "auto"};
   //overflow:auto
`;
const Heading = styled.h2`
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:30px;
`
const MainContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
background-color: white;
align-items:center;
justify-content:center;
`
const ProfileBox = styled.div`
display:flex;
//flex-direction: column;
flex-wrap:wrap;
//width: ${ props => props.width ? props.width : "100%"};
// grid-auto-flow: row;
// grid-auto-rows: ${props => props.fillheight ? "1fr" : "min-content"};
// grid-template-columns: repeat(2, 1fr);
// grid-template-columns: 650px 650px ;
// grid-template-rows: 300px 200px; 
//grid-column:${props => props.gc ? props.gc : "2/3"};
// grid-template-columns: 100px 100px;
// grid-template-rows: 80px  80px; 
 column-gap: 10px;
// grid-auto-flow: column;
 row-gap: 15px;
font-size:16px;
margin-top:10px;
border:1px solid grey;
//height:700px;
height:auto;
width:95vw;
`
export const Form = styled.form`
    display:flex;
    
    // grid-template-columns: 250px 250px ${props => props.tc ? props.tc : ""} ${props => props.tc ? props.tc : ""};
    // grid-template-rows: 60px 60px 60px; 
    //flex-direction:column;
    flex-wrap:wrap;
    // width:300px;
    // height:100px;
    padding:20px;
    //border:1px solid grey;
    // align-items:center;
    // justify-content:center;
`;
export const Label = styled.label`
display:flex;
    font-size:14px;
    margin: 5px 10px;
    //width:150px;
`;
export const Footer = styled.label`
   display:flex;
`;
export const Input = styled.input`
    height:30px;
    //width:100%;
    width:180px;
    border-radius:5px;
   
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
const Select = styled.select`
height:40px;
width:300px;
margin:0px 10px;
`
function Profile() {
  
    const [infoInputs, setInfoInputs] = useState({});
    const [addressInputs, setAddressInputs] = useState({});
    const [contactInputs, setContactInputs] = useState({});
    const [resPartyInputs, setResPartyInputs] = useState({});
    const [insInfoInputs, setInsInfoInputs] = useState({});
    const [message, setMessage] = useState("");
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [userProfile, setUserProfile] =useState({});
	
    console.log(useState("hello")[1])
    const toggleModal = () => {
      setModalIsOpen(!isModalOpen);
    };
    

    const handleInfoChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInfoInputs(values => ({...values, [name]: value}))
    }
    const handleAddChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setAddressInputs(values => ({...values, [name]: value}))
    }
    const handleConChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setContactInputs(values => ({...values, [name]: value}))
    }
    const handleResChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setResPartyInputs(values => ({...values, [name]: value}))
    }
    const handleInsChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInsInfoInputs(values => ({...values, [name]: value}))
    }
   
    const handleSubmit = async (e) => {
      const userProfile={};
      userProfile.myinfo=infoInputs;
      userProfile.address =addressInputs;
      userProfile.contact=contactInputs;
      userProfile.responsiblepartyinfo =resPartyInputs;
      userProfile.insuranceinfo=insInfoInputs;
      toggleModal();
        e.preventDefault();
        setUserProfile(JSON.stringify(userProfile));
        axios({
            method: 'POST',
            "Content-type": "application/json; charset=UTF-8",
            url: "http://localhost:8080/patient/createProfile",
            //data: JSON.stringify(userProfile)
            data: JSON.stringify(userProfile)
          });
        
       // alert( JSON.stringify(userProfile));
       

        // fetch("http://localhost:8080/patient/createProfile", {
        //     method:'POST',
        //     body:JSON.stringify(inputs)
        // }).then(response => response.json())
        
        // try {
        //     let res = await fetch("/patient/createProfile", {
        //        method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     //   credentials: 'include',
        //     //body:JSON.stringify(inputs)
        //     body:JSON.stringify(userProfile)
        //     });
        //     // let resJson = await res.json();
        //     // if (res.status === 200) {
        //     //     setInputs("")
        //     //   setMessage("User created successfully");
        //     // } else {
        //     //   setMessage("Some error occured");
        //     // }
        //   } catch (err) {
        //     console.log(err);
        //   }
        //  // setInputs("")
        //   alert(JSON.stringify(userProfile));
      };

    return ( 
<>
<MainContainer>
Profile page
{isModalOpen && <Modal title="Modal Title" content={userProfile} onClose={toggleModal}  />}

<ProfileBox>
  
<Form onSubmit={handleSubmit}>
<MyProfile 
//boxH="300px"
boxW="800px"
>
<Heading>My Info</Heading>

      <Label>First Name*
      <Input 
        type="text" 
        name="firstName" 
        value={infoInputs.firstName || ""} 
        onChange={handleInfoChange}
      />
      </Label>
      <Label>Last Name*
        <Input 
          type="text" 
          name="lastName" 
          value={infoInputs.lastName || ""} 
          onChange={handleInfoChange}
        />
        </Label>
        <Label>Date of Birth*
      <Input 
        type="text" 
        name="dob" 
        value={infoInputs.dob || ""} 
        onChange={handleInfoChange}
      />
      </Label>
      <Label>Married
      <Select name="married" id="married">
    <option value="yes">Yes</option>
    <option value="no">No</option>
   
  </Select>
       </Label>
       <Label>Sex*
      <Select name="sex" id="sex">
    <option value="male">Male</option>
    <option value="female">Female</option>
   
  </Select>
       </Label>
      <Label> MI
        <Input 
          type="text" 
          name="mi" 
          value={infoInputs.mi || ""} 
          onChange={handleInfoChange}
        />
        </Label>
        <Label> SSN*
        <Input 
          type="text" 
          name="ssn" 
          value={infoInputs.ssn || ""} 
          onChange={handleInfoChange}
        />
        </Label>
      
    
</MyProfile>

 
<MyProfile 
//gc="2/1"
 //boxH="220px"
 boxW="600px"
 >
<Heading>Address</Heading>
      <Label>Line 1 *
      <Input 
        type="text" 
        name="line1" 
        value={addressInputs.line1 || ""} 
        onChange={handleAddChange}
      />
      </Label>
      <Label>
        <Input 
          type="text" 
          name="line2" 
          value={addressInputs.line2 || ""} 
          onChange={handleAddChange}
        />
        </Label>
        <Label>City*
      <Input 
        type="text" 
        name="city" 
        value={addressInputs.city || ""} 
        onChange={handleAddChange}
      />
      </Label>
      <Label>
      <Input 
        type="text" 
        name="city2" 
        value={addressInputs.city2 || ""} 
        onChange={handleAddChange}
      />
      </Label>
     
      <Label> Zip*
        <Input 
          type="text" 
          name="zip" 
          value={addressInputs.zip || ""} 
          onChange={handleAddChange}
        />
        </Label>
    
</MyProfile>


<MyProfile 
//boxH="160px"
>
<Heading>Contact</Heading>
      <Label>Home Phone
      <Input 
        type="text" 
        name="hphone" 
        value={contactInputs.hphone || ""} 
        onChange={handleConChange}
      />
      </Label>
      <Label>Work Phone
        <Input 
          type="text" 
          name="wphone" 
          value={contactInputs.wphone || ""} 
          onChange={handleConChange}
        />
        </Label>
        <Label>Mobile Phone*
      <Input 
        type="text" 
        name="mphoone" 
        value={contactInputs.mphoone || ""} 
        onChange={handleConChange}
      />
      </Label>
      <Label>Email*
      <Input 
        type="text" 
        name="email" 
        value={contactInputs.email || ""} 
        onChange={handleConChange}
      />
      </Label>
    
    </MyProfile>

    <MyProfile 
    //boxH="220px"
    >
<Heading>Responsible Party Info</Heading>

<Label>First Name*
      <Input 
        type="text" 
        name="firstname2" 
        value={resPartyInputs.firstname2 || ""} 
        onChange={handleResChange}
      />
      </Label>
      <Label>Last Name*
        <Input 
          type="text" 
          name="lastname2" 
          value={resPartyInputs.lastname2 || ""} 
          onChange={handleResChange}
        />
        </Label>
        <Label>Date of Birth*
      <Input 
        type="text" 
        name="dob2" 
        value={resPartyInputs.dob2 || ""} 
        onChange={handleResChange}
      />
      </Label>
      <Label>Relationship*
      <Select name="relationship" id="married">
    <option value="father">Father</option>
    <option value="mother">Mother</option>
   
    </Select>
      </Label>
      <Label> MI
        <Input 
          type="text" 
          name="mi2" 
          value={resPartyInputs.mi2 || ""} 
          onChange={handleResChange}
        />
        </Label>
        <Label> SSN*
        <Input 
          type="text" 
          name="ssn2" 
          value={resPartyInputs.ssn2 || ""} 
          onChange={handleResChange}
        />
        </Label>
    
    </MyProfile>

    <MyProfile
    //  boxH="150px"
    //  boxW="1100px"
     boxM="40px"
     >
<Heading>Insurance Info</Heading>

<Label>ID#*
      <Input 
        type="number" 
        name="id" 
        value={insInfoInputs.id || ""} 
        onChange={handleInsChange}
      />
      </Label>
      <Label>Group#*
        <Input 
          type="number" 
          name="group" 
          value={insInfoInputs.group || ""} 
          onChange={handleInsChange}
        />
        </Label>
        <Label>Company*
      <Input 
        type="text" 
        name="company" 
        value={insInfoInputs.company || ""} 
        onChange={handleInsChange}
      />
      </Label>
      <Label>Type*
      <Input 
        type="text" 
        name="type" 
        value={insInfoInputs.type || ""} 
        onChange={handleInsChange}
      />
      </Label>
      </MyProfile>
    </Form>
  
</ProfileBox>


 <Footer>
        <InputButton type="submit" onClick={handleSubmit} value="Save" />
        <InputButton type="button" value="Cancel" color="orange" />
        </Footer> 

</MainContainer>
</>


     );
}

export default Profile;