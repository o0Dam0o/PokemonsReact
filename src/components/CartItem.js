const CartItem = ({ pokemon, getDelete }) => {
	return (
		<>
			<tbody className="position-relative h5">
				<tr>
					<th scope="row">
						<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						{pokemon.name.toUpperCase()}
					</th>
					<td>${pokemon.price}</td>
					<td>x{pokemon.count}</td>
					<td>${pokemon.price * pokemon.count}</td>
				</tr>
				<button
					onClick={() => getDelete(pokemon.id)}
					type="button"
					className="position-absolute top-50 start-100 translate-middle btn btn-outline-danger"
					style={{ marginLeft: -50 }}
				>
					X
				</button>
			</tbody>
		</>
	);
};

export default CartItem;
