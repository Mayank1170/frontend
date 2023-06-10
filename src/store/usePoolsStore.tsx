import { create } from "zustand";

interface PoolsStore {
  search: string;
  setSearch: (search: string) => void;
  currentPool: string;
  setCurrentPool: (currentPool: string) => void;
}

export const usePoolsStore = create<PoolsStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  currentPool: "",
  setCurrentPool: (currentPool) => set({ currentPool }),
}));