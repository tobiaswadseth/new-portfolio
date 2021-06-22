import { getById } from './_api.js';

export const get = async ({ params }) => {
	let post = getById(params.id);

	if (post) {
		return { status: 200, body: { post: post[0] } };
	}
	return { status: 404, body: { error: 'Post not found' } };
};
