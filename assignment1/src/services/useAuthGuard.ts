import { useAuthStore } from './authStore';
import { useNavigate } from 'react-router-dom';

export const useAuthGuard = () => {
  const authStore = useAuthStore();

  const navigate = useNavigate()

  if (!authStore.isAuthenticated) {
    navigate('/signin');
  }
};
