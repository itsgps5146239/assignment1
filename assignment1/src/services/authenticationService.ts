import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export interface SignInData {
  email: string;
  password: string;
}

export interface SignUpData {
  email: string;
  password: string;
}

export async function signIn(data: SignInData): Promise<any> {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw new Error('Sign in failed');
  }
}

export async function signUp(data: SignUpData): Promise<any> {
  try {
    const response = await axios.post(`${BASE_URL}/register`, data);
    return response.data;
  } catch (error) {
    throw new Error('Sign up failed');
  }
}
