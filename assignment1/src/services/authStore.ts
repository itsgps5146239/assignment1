import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: null as any, // Type as per your user object
  }),
  actions: {
    setUser(user: any) {
      this.user = user;
      this.isAuthenticated = !!user;
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
  },
});
