import { getById } from './_api.js';

export const get = async ({ params }) => {
	let resource = getById(params.id);

	if (resource) {
		return { status: 200, body: { resource: resource[0] } };
	}
	return { status: 404, body: { error: 'Resource not found' } };
};
