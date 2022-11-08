export const prueba = (data, search) => {
	return new Promise((resolve, reject) => {
		const buscar = data?.filter((q) => q.name.includes(search));
		if (buscar.length !== 0) {
			resolve(buscar);
		} else {
			reject("no se encontro nada");
		}
	});
};
