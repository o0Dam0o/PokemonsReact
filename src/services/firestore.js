import {
	getDocs,
	collection,
	getDoc,
	doc,
	query,
	where,
} from "firebase/firestore";
import { db } from "./firebase";
export const getProducts = (search = undefined, product = "pokemon") => {
	return new Promise((resolve, reject) => {
		const collectionRef = !search
			? collection(db, product)
			: search === "legend"
			? query(collection(db, product), where(search, "==", true))
			: query(
					collection(db, product),
					where("tipos", "array-contains", search)
			  );
		getDocs(collectionRef)
			.then((res) => {
				const data = res.docs.map((doc) => {
					const docData = doc.data();
					return { idFirebase: doc.id, ...docData };
				});
				const order = data.sort((a, b) => a.id - b.id);
				resolve(order);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
export const getProduct = (pokemonId) => {
	return new Promise((resolve, reject) => {
		const product = doc(db, "pokemon", pokemonId);
		getDoc(product)
			.then((res) => {
				const data = res.data();
				const docData = { idFirebase: doc.id, ...data };
				resolve(docData);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
export const getTypes = () => {
	return new Promise((resolve, reject) => {});
};
export const getCheckout = () => {};
