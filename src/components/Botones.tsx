import { productos } from "../data";
import { useCartStore } from "../store";

export const Botones = () => {

	const addProduct = useCartStore((state) => state.addToCart);

	return (
		<div className="d-flex flex-column mt-3 w-25 mx-auto">
			{productos.map((producto) => (
				<button
					type="button"
					className="btn btn-primary mb-3"
					key={producto.name}
					onClick={() => addProduct(producto)}
				>
					Añadir {producto.name} al carrito
				</button>
			))}
		</div>
	)
}
