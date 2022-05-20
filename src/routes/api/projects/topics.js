import { getTopics } from './_api.js';

export const get = async () => {
    const topics = await getTopics();
	return { status: 200, body: { topics } };
};
