import React, { useState } from 'react';
import { signUp, SignUpData } from './services/authenticationService';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp(formData);
      // Redirect or show success message
    } catch (error) {
      // Handle sign up error
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
