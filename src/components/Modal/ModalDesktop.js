import React from "react"
import { createPortal } from "react-dom"
import './ModalDesktop.css'

function ModalDesktop ({children}){
    return createPortal (
        <div className="modal-desktop">
            {children}
        </div>,
        document.getElementById('modal')
        
    )
}

export {ModalDesktop}