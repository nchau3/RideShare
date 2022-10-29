import React from 'react';

export default function User(props) {

  return (
    <div>
      <p>{props.first_name}</p>
      <p>{props.last_name}</p>
      <p>{props.email}</p>
    </div>
  )

}