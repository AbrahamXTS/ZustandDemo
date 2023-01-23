import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Producto } from "../interfaces";

interface CartState {
	cart: Producto[];
	addToCart: (product: Producto) => void;
	cleanCart: () => void;
}

export const useCartStore = create(persist<CartState>((set) => ({ 
	cart: [],
	addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })), // Como necesitamos acceder al estado actual usamos una función que lo reciba.
	cleanCart: () => set({ cart: [] }) // Podemos setear el estado con un valor constante.
}), {
	name: "cart",
}));