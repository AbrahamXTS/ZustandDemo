import { create } from "zustand";
import { Usuario } from "../interfaces/Usuario";

interface UserState {
	users: Usuario[];
	loadUsers: () => void;
}

export const useUserStore = create<UserState>((set) => ({
	users: [],
	loadUsers: async () => {

		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();

		return set({ users: [ ...data ] })
	}
}));