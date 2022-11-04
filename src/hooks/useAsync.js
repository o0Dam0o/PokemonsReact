import { useEffect, useState } from "react";
export const useAsync = (asyncFunc, dependecia = []) => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		asyncFunc()
			.then((res) => {
				setData(res);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, dependecia);
	return {
		data,
		loading,
	};
};
