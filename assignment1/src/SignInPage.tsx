import React, { useState } from 'react';
import { signIn, SignInData } from './services/authenticationService';

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<SignInData>({ email: '', password: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(formData);
      // Redirect or show success message
    } catch (error) {
      // Handle sign in error
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
