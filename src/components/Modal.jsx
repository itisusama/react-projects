import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({onClose, isOpen, children}) => {
  return createPortal(
    <>
      {isOpen && (
        <div className='fixed top-0 min-h-[200px]'>
            <div className='relative z-50 bg-orange-200 p-4 ml-[550px] mt-9'>
                <div className='flex justify-end p-4'>
                    <AiOutlineClose onClick={onClose} className='text-2xl'/>
                </div>
                {children}
            </div>

            <div onClick={onClose} className='absolute top-0 z-40 h-screen w-screen backdrop-blur'/>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
