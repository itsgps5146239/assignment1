import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export async function getUsers(page = 1): Promise<any> {
  try {
    const response = await axios.get(`${BASE_URL}/users?page=${page}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}
