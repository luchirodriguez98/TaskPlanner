import React from "react"
import { createPortal } from "react-dom"
import './ModalMobile.css'

function ModalMobile ({children}){
    return createPortal (
        <div className="modal-mobile">
        {children}
        </div>,
        document.getElementById('modal')
        
    )
}

export {ModalMobile}