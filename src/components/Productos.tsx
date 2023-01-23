import { productos } from "../data";
import { useCartStore } from "../store";

export const Productos = () => {

	const addProduct = useCartStore((state) => state.addToCart);

	return (
		<div className="d-flex flex-column mt-3 w-50 mx-auto">
			{productos.map((producto) => (
				<button
					type="button"
					className="btn btn-primary mb-3"
					onClick={() => addProduct(producto)}
					key={`${producto.id} - ${producto.name}`}
				>
					Añadir {producto.name} al carrito
				</button>
			))}
		</div>
	)
}
