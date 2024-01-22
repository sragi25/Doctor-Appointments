import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Modalbackdrop = styled.div`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  // display:flex;
  // align-items:center;
  // justify-content:center;
  overflow: auto;
  position: fixed;

  z-index: 1;
`;
const Modalcontainer = styled.div`
  background: #fff;
  border-radius: 5px;
  max-width: 100%;
  margin: 50px auto;
  padding: 15px;
  width: 560px;
`;
const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
`;
const Button = styled.button`
  height: 30px;
  width: 60px;
  border-radius: 2px;
  background-color: blue;
`;
export function Modal(props) {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    // function onKeyDown(event) {
    // 	if (event.keyCode === 27) {
    // 		// Close the modal when the Escape key is pressed
    // 		onRequestClose();
    // 	}
    // }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    //document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      //document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <Modalbackdrop>
      <Modalcontainer>
        <ModalTitle>{props.title}</ModalTitle>
        <p>{props.content}</p>

        <Button type="button" onClick={props.onClose}>
          Close
        </Button>
      </Modalcontainer>
    </Modalbackdrop>
  );
}
