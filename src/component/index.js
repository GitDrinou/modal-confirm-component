import React from "react"
import { useSpring, animated } from 'react-spring'
import styled from "styled-components"

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display:flex;
  justify-content: center;
  z-index: 998;
`
const ModalWrapper = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #555A5B;
  color: #FFF;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 999;
  border-radius: 10px;
`
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  padding: 20px;
  p {
    margin-bottom: 1rem;
  }
`
const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 999;
  border-radius: 50%;
  &:hover {
      background: #000;
      color: white;
  }
`

const Modal = ({ viewModal, setViewModal, dialogTitle, dialogDescription, returnTo }) => {

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: viewModal ? 1 : 0,
        transform: viewModal ? `translateY(0%)` : `translateY(-100%)`
    })

    const handleClose = () => {
        if(window.location.pathname === returnTo) {
            window.location.reload(false)
        } else {
            window.location.pathname = returnTo 
        }
    }

    return (
        <>
            {viewModal ? (
                <ModalBackground onClick={handleClose} >
                    <animated.div style={animation}>
                        <ModalWrapper viewModal={viewModal}>
                            <ModalContent>
                                <h1>{dialogTitle}</h1>
                                <p>{dialogDescription}</p>                                
                            </ModalContent>
                            <CloseButton aria-label="Close modal" onClick={handleClose}>X</CloseButton>
                        </ModalWrapper>
                    </animated.div>
                </ModalBackground>
             ) : null}
        </>
    )

}

export default Modal