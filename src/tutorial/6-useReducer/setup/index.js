import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer =  (state, action) => {};
const defaultState = {
  persons:data,
  modalOpened:true,
  modalContent:'hello world',
};
const Index = () => {
  const [name,setName] =useState('');
const [state, dispatch] =useReducer(reducer,defaultState)
const handleForm =(e) => {
  e.preventDefault();
  if(name){

  }else {
    
  }
};
return <>
{state.modalOpened && <Modal modalContent={state.modalContent}/>}
<form onSubmit={handleForm} className='form'>
  <div>
    <input type='text' value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <button type='submit'>Add</button>
</form>
{state.persons.map((person)=>{
return (
  <div key={person.id}>
    <h4>{person.name}</h4>
  </div>
)
})}
</>
};

export default Index;
