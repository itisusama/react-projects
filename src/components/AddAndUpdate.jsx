import React from 'react';
import Modal from './Modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import * as Yup from "yup";

// Validating the contacts
const contactsValidation = Yup.object().shape({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Invalid Email").required("Email required"),
})

const AddAndUpdate = ({isOpen, onClose, isUpdate, contact}) => {

    // Adding Data
    const addContact = async (contact) =>{
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
        } catch (error) {
            console.log(error)
        }
    };

    // Updating Data
    const updateContact = async (contact, id) =>{
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
        } catch (error) {
            console.log(error)
        }
    };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}> 
        <Formik
        validationSchema={contactsValidation}
        initialValues={isUpdate ? {
            name: contact.name,
            email: contact.email,            
        } :{
            name: "",
            email: "",
        }}
        onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
        >
            
            <Form>
                <div className='w-80 mx-auto'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name">Name</label>
                        <Field name="name"/>
                        <div className='text-red-700'><ErrorMessage name='name'/></div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email">Email</label>
                        <Field name="email"/>
                        <div className='text-red-700'><ErrorMessage name='email'/></div>
                    </div>
                    <button className='bg-blue-500 px-4 rounded-lg mt-2'>{isUpdate ? "Update":"Add"} Data</button>
                </div>
            </Form>
        </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdate
