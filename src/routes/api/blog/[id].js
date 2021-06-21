import posts from './_posts.json';

export const get = ({ params }) => {
	let post = posts.filter((postObj) => {
		return postObj.id === +params.id;
	});

	if (post) {
		return { status: 200, body: { post: post[0] } };
	}
	return { status: 404, body: { error: 'Post not found' } };
};
