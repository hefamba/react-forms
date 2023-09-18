import React from 'react';
import { useState } from 'react';

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '' });

  const handleChange = (event) => {
    const changeField = event.target.name;
    const newValue = event.target.value;
    console.log(newValue);
    setFormData((currData) => {
      currData[changeField] = newValue;
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}
