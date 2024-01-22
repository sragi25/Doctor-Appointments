import styled from "styled-components";

export const TabRow = styled.div`
  display: flex;
  height: 40px;
  min-height: 40px;
  padding: 0px 20px;
 
  justify-content: center;
  background-color:  #FFFBC8;
  
  a {
    height: 100%;
    text-decoration: none;
    }
`;

export const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 0 16px;
    font-size: 12px;
    height: 100%;
    background-color: ${props => props.selected ?  "blue": "transparent"};
    
    
    border-right: 1px solid black;
    //border-left: ${props => props.firstchild ? "1px solid " + "black" : "none"};

    &:hover {
        cursor: pointer;
        background-color:#ADD8E6 ;
    }
`