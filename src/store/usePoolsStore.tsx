import { create } from "zustand";

interface PoolsStore {
  search: string;
  setSearch: (search: string) => void;
}

export const usePoolsStore = create<PoolsStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));