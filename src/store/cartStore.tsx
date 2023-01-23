import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Producto } from "../interfaces";

interface CartState {
	cart: Producto[];
	addToCart: (product: Producto) => void;
}

export const useCartStore = create(persist<CartState>((set) => ({ 
	cart: [],
	addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}), {
	name: "cart",
}));