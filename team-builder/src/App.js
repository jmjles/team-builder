import React,{useState} from "react";
import Form from './components/form';
import {Container} from '@material-ui/core';

import Person from './components/person'
const id = require('uniqid');
function App() {

  const [list,updateList] = useState([
    {
      id:id(),
      name:'John',
      title:'Frontend Web Dev',
      comment:'Fun guy to work with!'
    },
    {
      id:id(),
      name:'Ethan',
      title:'Frontend Web Dev',
      comment:'Fun guy to work with!'
    }
  ]);
  return(
    <Container lg ='true'>
      <Form list={list} fn={updateList}/>
      <Person list={list}/>
    </Container>
    
  );
};

export default App;
