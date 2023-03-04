import React, { useState, useEffect } from 'react';

import  "./styles.css"

import Form from "./Form";
import List from "./List";


function Contacts() {

  const[contacts, setContacts]=useState([
    {
      name: "Berkay",
      number : "123498"
    },
    {
      name:"Mehmet",
      number:"151842"
    },
    {
      name:"Ahmet",
      number:"213498"
    }

  ]);

  useEffect(()=>{
    console.log(contacts)

  } , [contacts])

    return(
        <div className='App'>
        <div className="container">
        <List contacts={contacts} ></List>
        <Form addContact={setContacts} contacts={contacts} />
        </div></div>
    );

  }

export default Contacts;