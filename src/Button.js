import React, { useState } from 'react'
import Modal from './lib/Modal'
import './Button.css'

const Button = () => {

    const [viewModal, setViewModal] = useState(false)

    const handleClickButton = () => { 
        setViewModal(true)      
    }

    return (
        <div>
            
            <button className="button" onClick={handleClickButton}>Click Me !</button>
            <Modal 
                viewModal={viewModal} 
                dialogTitle = "{This is the place for title}"
                dialogDescription = "{This is the place for description}"
                returnTo = "/"
            />
        </div>        
    )
}

export default Button