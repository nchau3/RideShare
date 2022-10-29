import React, { useState } from 'react';
import axios from 'axios';
import User from './components/User';

export default function Application() {
  const [state, setState] = useState({
    data: []
  });


  function fetchUsers () {
    axios.get('/api/users') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      //console.log(response.data.message) // Just the message
      setState({
        data: response.data
      });
    }) 
  }

  const users = state.data.map(user => {
    return (
      <User
        key={user.id}
        first_name={user.first_name}
        last_name={user.last_name}
        email={user.email}
      />
    )
  })
  
  return (
    <div className="App">
      <h1>Click the button!</h1>
      <button onClick={fetchUsers} >
        Fetch Data
      </button>
      {users}        
    </div>
  );

}