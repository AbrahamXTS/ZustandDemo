import { productos } from "../data";
import { useCartStore } from "../store";

export const Botones = () => {

	const addProduct = useCartStore((state) => state.addToCart);
	const cleanCart = useCartStore((state) => state.cleanCart);

	return (
		<div className="d-flex flex-column mt-3 w-25 mx-auto">

			<button
				type="button"
				className="btn btn-danger mb-3"
				onClick={cleanCart}
			>
				Limpiar carrito
			</button>
			
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
