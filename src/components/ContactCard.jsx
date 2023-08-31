import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { db } from '../config/firebase';
import AddAndUpdate from './AddAndUpdate';

const ContactCard = ({contact}) => {

    // Creating State for Modal
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
      setOpen(true);
    }
    const onClose = () => {
      setOpen(false);
    }

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  }
  return (
   <>
    <div key={contact.id} className='bg-blue-400 p-2 rounded-md mt-2 flex justify-between'>
              <div className='flex gap-3 items-center'>
                <HiOutlineUserCircle className='text-4xl text-slate-800' />
                <div className='font-semibold'>
                  <h1 className='text-3xl'>{contact.name}</h1>
                  <p className=''>{contact.email}</p>
                </div>
              </div>
              <div className='text-3xl text-slate-800 flex items-center gap-1'>
                <RiEditCircleLine onClick={onOpen} className='cursor-pointer'/>
                <IoMdTrash onClick={() => deleteContact(contact.id)} className='text-red-700 cursor-pointer'/>
              </div>
    </div>
    <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
   </>
  )
}

export default ContactCard
