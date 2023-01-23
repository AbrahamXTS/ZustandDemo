import { useUserStore } from "../store";

export const Usuarios = () => {

	const users = useUserStore((state) => state.users);

	return (
		<div className="mt-3">
			{users.map(({ id, name, email }) => (
				<div key={id} className="text-center">
					<p>{name} - {email}</p>
				</div>
			))}
		</div>
	)
}
