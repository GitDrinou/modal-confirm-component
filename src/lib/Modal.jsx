import React, { useState } from 'react'
import './Modal.css'


const Modal = ({ viewModal, dialogTitle, dialogDescription, returnTo }) => {

    const isShown = viewModal

    const [isHidden, setIsHidden] = useState(isShown) 
    
    const handleClose = () => {
        if(window.location.pathname === returnTo) {
            window.location.reload(false)
        } else {
            window.location.pathname = returnTo 
        }        
        setIsHidden(true)
    }

    return(
        <div
            id="dialog"
            role="dialog"
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            aria-modal="true"
            aria-hidden={isShown ? isHidden : !isHidden}
            tabIndex="-1"
            className="c-dialog">
            <div role="document" className="c-dialog__box">
                <button type="button" aria-label="Close" title="Close window" className="btnClose" onClick={handleClose}>X</button>
                <h2 id="dialog-title">{dialogTitle}</h2>
                <p id="dialog-desc">{dialogDescription}</p>
            </div>
        </div>
    )
}

export default Modal