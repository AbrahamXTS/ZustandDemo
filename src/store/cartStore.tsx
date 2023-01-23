import { create } from "zustand";
import { Producto } from "../interfaces";

interface CartState {
	cart: Producto[];
	addToCart: (product: Producto) => void;
}

export const useCartStore = create<CartState>((set) => ({
	cart: [],
	addToCart: (product) => set((state) => ({ cart: [...state.cart, product] }))
}));