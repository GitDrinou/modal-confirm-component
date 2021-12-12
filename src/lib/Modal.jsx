import './Modal.css'
import styled from 'styled-components'

const ModalWrapper = styled.div`
    height: 100vh;
    z-index: 999; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100vh; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4);  
`

const Modal = ({ viewModal, dialogTitle, dialogDescription, returnTo }) => {

    const isShown = viewModal
    
    const handleClose = () => {
        if(window.location.pathname === returnTo) {
            window.location.reload(false)
        } else {
            window.location.pathname = returnTo 
        }  
    }

    return (
        <ModalWrapper id="myModal"
            style={{ display: isShown ? 'block' : 'none' }}>
            <div className="modal-content">
                <button type="button" title="Close window" className="btnClose" onClick={handleClose}>X</button>
                <h2>{dialogTitle}</h2>
                <p>{dialogDescription}</p>
            </div>
        </ModalWrapper>
    )
}

export default Modal