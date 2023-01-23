import { useEffect } from "react";

import { useUserStore } from "./store";
import { Carrito, Botones, Usuarios } from "./components";

function App() {
	
	const fetchUsers = useUserStore((state) => state.loadUsers);

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<>
			<h2 className="text-center">Síncrono</h2>

			<Carrito />

			<Botones />

			<hr />

			<h2 className="text-center">Asíncrono</h2>

			<Usuarios />
		</>
	)
}

export default App;