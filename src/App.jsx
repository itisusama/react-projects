import Navigation from './components/Navigation';
import ContactCard from './components/ContactCard';
import AddAndUpdate from './components/AddAndUpdate';
import { BsSearch } from 'react-icons/bs';
import { AiFillPlusCircle } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  // Fetch Data From Firebase
  const [contacts, setcontacts] = useState([])
  // Creating State for Modal
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
      
          onSnapshot(contactsRef, (snapshot)=>{
            const contactLists = snapshot.docs.map((doc) => {
              return {
              id: doc.id,
              ...doc.data()
            };
          })
          setcontacts(contactLists);
          return contactLists;  
        });
      } catch (error) {
        console.log(error)
      }
    }
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot)=>{
        const contactLists = snapshot.docs.map((doc) => {
          return {
          id: doc.id,
          ...doc.data()
        };
      })

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));

      setcontacts(filteredContacts);
      return filteredContacts;  
    });
  }
  return (
    <div className="max-w-[380px] mx-auto">
      <Navigation/>
      <div className='flex'>
        <div className="flex flex-grow relative items-center">
          <BsSearch className='text-white text-3xl absolute ml-1'/>
          <input onChange={filterContacts} className='bg-transparent text-white border border-white rounded-md flex-grow p-2 pl-9' type="search" id='search'/>
        </div>
        <div>
          <AiFillPlusCircle onClick={onOpen} className='text-white text-5xl'/>
        </div>
      </div>
      <div>
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
        <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default App
