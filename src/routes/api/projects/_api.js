export const getAll = async () => {
    const res = await fetch("https://api.github.com/users/tobiaswadseth/repos");
    const projects = await res.json();
    return projects;
}

export const getTopics = async () => {
    const projects = await getAll();
    const topics = [];
    projects.forEach((project) => {
        topics.push(project.topics)
    })
    return [...new Set(topics)];
}