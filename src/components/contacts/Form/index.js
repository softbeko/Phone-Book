import React, { useState } from 'react';
function Form( {addContact , contacts}) { 
  
    const [form , setForm]=useState({name:"",number:""})
    function onChangeInput(e) { 
        setForm({...form , [e.target.name] : e.target.value  })
     }
    function submitbutton (e) { 
        e.preventDefault();

        if(form.name==="" || form.number==="" ){
            return false 
        }

        addContact([...contacts , form])

      console.log(form)
        setForm({name:"" , number:""});
     }
    return(

        <form onSubmit={submitbutton}>
           
            <input 
            placeholder="Name"  
            name="name" 
            onChange={onChangeInput}
            value={form.name}
            /> <br />
            <input
            placeholder="Number"
            name="number"
            value={form.number}
            onChange={onChangeInput}
            /><br />


            <button className="button" >Add Create</button>
        </form>
    );
 }
 export default Form;