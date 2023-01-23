import { useCartStore } from "../store";

export const Carrito = () => {

	const cart = useCartStore((state) => state.cart);

	return (
		<>
			{cart.map(({ id, name, price }) => (
				<div key={id}>
					<p>{name} - ${price}</p>
				</div>
			))}
		</>
	)
}
