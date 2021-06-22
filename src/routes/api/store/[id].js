import { getById } from './_api.js';

export const get = async ({ params }) => {
	let product = getById(params.id);

	if (product) {
		return { status: 200, body: { product: product[0] } };
	}
	return { status: 404, body: { error: 'Post not found' } };
};
