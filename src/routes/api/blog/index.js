import posts from './_posts.json';

export const get = () => {
	return { status: 200, body: { posts } };
};
