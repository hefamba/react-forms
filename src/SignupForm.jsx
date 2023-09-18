import React from 'react';
import { useState } from 'react';

export default function SignupForm() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const updateFirst = (event) => {
    console.log('event!');
    setFirst(event.target.value);
  };

  const updateLast = (event) => {
    console.log('event!');
    setLast(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Your name is ${first} ${last}`);
  };
  return (
    <form>
      <input
        type="text"
        name="first"
        id="first"
        placeholder="first name"
        value={first}
        onChange={updateFirst}
      />
      <input
        type="text"
        name="last"
        id="last"
        placeholder="last name"
        value={last}
        onChange={updateLast}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
