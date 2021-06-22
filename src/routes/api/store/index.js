import { getAll } from './_api.js';

export const get = async () => {
	return { status: 200, body: { products: getAll() } };
};
