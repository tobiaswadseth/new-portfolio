/* eslint-disable no-unused-vars */
import posts from './_posts.json';

export const getAll = () => posts;

export const getById = (id) => posts.filter((post) => post.id === +id);

export const update = (id, key, value) =>
	posts.forEach((post) => {
		if (post.id === +id) post[key] = value;
	});
