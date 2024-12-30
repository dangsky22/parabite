// stores/authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  idToken: null,
  penjualId: null,
  setIdToken: (token) => set({ idToken: token }),
  setPenjualId: (penjualId) => set({ penjualId }),
}));

export default useAuthStore;
