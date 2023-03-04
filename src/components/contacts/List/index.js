import React, { useState } from 'react';

function List({contacts}) {

  const [filterText , setFilterText] = useState("");
    

  // const filtered =contacts.filter((item)=>{
  //   return Object.keys(item).some((key)=>
  //   item[key]
  //   .toString()
  //   .toLowerCase()
  //   .includes(filterText.toLocaleLowerCase()))
  // })




    return(
        
        <div>
           <h2>Contacts Book</h2>
          <input 
          id="filter"
          placeholder="Filter contact"
          value={filterText}
          onChange={(e)=> setFilterText(e.target.value)}
          />


          <ul>
            {contacts.filter((item)=>{
              return filterText.toLocaleLowerCase() === "" ? item 
              : item.name.toLocaleLowerCase().includes(filterText) || item.number.toLocaleLowerCase().includes(filterText)  ;
            }).map((item , index)=>
            <li key={index} >
              <span className="listName">{item.name}</span>
              <span className="listNumber" >{item.number}</span>
            </li>)
            }

          </ul>


        </div>        

    );

  }

export default List;