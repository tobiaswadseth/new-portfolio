import { getAll } from './_api.js';

export const get = async () => {
	const projects = await getAll();
	return { status: 200, body: { projects } };
};
