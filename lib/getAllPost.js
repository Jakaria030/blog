const getAllPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();
};

export default getAllPost;