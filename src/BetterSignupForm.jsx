import React from 'react';
import { useState } from 'react';

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const updateFormData = (event) => {
    console.log('event!');
    setFormData(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`Your name is ${first} ${last}`);
  };
  return (
    <form>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="first name"
        value={formData.firstName}
        onChange={updateFormData}
      />
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="last name"
        value={formData.lastName}
        onChange={updateFormData}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}
