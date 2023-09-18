import React from 'react';
import { useState } from 'react';

export default function UserNameForm() {
  const [username, setUsername] = useState('');
  const updateUsername = (event) => {
    console.log('event!');
    setUsername(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </form>
  );
}
