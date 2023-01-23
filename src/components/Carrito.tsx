import { useCartStore } from "../store";

export const Carrito = () => {

	const cart = useCartStore((state) => state.cart);

	return (
		<>
			{cart.map(({ name, price }, index) => (
				<div key={index} className="text-center">
					<p>{name} - ${price}</p>
				</div>
			))}
		</>
	)
}
