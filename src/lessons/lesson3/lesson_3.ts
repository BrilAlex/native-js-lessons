import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

const axiosInstanceConfig = {
  baseURL: "https://jsonplaceholder.typicode.com/",
};

const axiosInstance = axios.create(axiosInstanceConfig);

const postsAPI = {
  getPost(post_ID: number) {
    return axiosInstance
      .get(`posts/${post_ID}`)
      .then(response => response.data);
  },
  getAllPosts() {
    return axiosInstance
      .get(`posts`)
      .then(response => response.data);
  },
  addNewPost(newPost: { title: string, body: string, userId: number }) {
    return axiosInstance
      .post("posts", newPost)
      .then(response => response.data);
  },
  updatePostData(post_ID: number, newPostData: { id: number, title: string, body: string, userId: number }) {
    return axiosInstance
      .put(`posts/${post_ID}`, newPostData)
      .then(response => response.data);
  },
  updatePostTitle(post_ID: number, newPostTitle: string) {
    return axiosInstance
      .patch(`posts/${post_ID}`, {title: newPostTitle})
      .then(response => response.data);
  },
  deletePost(post_ID: number) {
    return axiosInstance
      .delete(`posts/${post_ID}`)
      .then(response => response.data);
  },
  getUserPosts(user_ID: number) {
    return axiosInstance
      .get(`posts/?userId=${user_ID}`)
      .then(response => response.data);
  },
  getPostComments(post_ID: number) {
    return axiosInstance
      .get(`posts/${post_ID}/comments`)
      .then(response => response.data);
  },
};

postsAPI.getPost(1).then(data => console.log("1. Get single post: ", data));

postsAPI.getAllPosts().then(data => console.log("2. Get posts list: ", data));

const newPost = {
  title: "foo",
  body: "bar",
  userId: 1,
}
postsAPI.addNewPost(newPost).then(data => console.log("3. Add a new post: ", data));

const newPostData = {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
}
postsAPI.updatePostData(1, newPostData).then(data => console.log("4. Update post data: ", data));

postsAPI.updatePostTitle(1, "foo").then(data => console.log("5. Patch post data: ", data));

postsAPI.deletePost(1).then(data => console.log("6. Delete post with ID = 1: ", data));

postsAPI.getUserPosts(1).then(data => console.log("7. Get all posts of user with ID = 1: ", data));

postsAPI.getPostComments(1).then(data => console.log("8. Get all comments of post with ID = 1: ", data));

const albumsAPI = {
  getAlbumPhotos(album_ID: number) {
    return axiosInstance.get(`albums/${album_ID}/photos`).then(response => response.data);
  },
};

albumsAPI.getAlbumPhotos(1).then(data => console.log("9. Get all photos of album with ID = 1: ", data));

const usersAPI = {
  getUserAlbums(user_ID: number) {
    return axiosInstance.get(`users/${user_ID}/albums`).then(response => response.data);
  },
  getUserTodos(user_ID: number) {
    return axiosInstance.get(`users/${user_ID}/todos`).then(response => response.data);
  },
  getUserPosts(user_ID: number) {
    return axiosInstance.get(`users/${user_ID}/posts`).then(response => response.data);
  },
};

usersAPI.getUserAlbums(1).then(data => console.log("10. Get all albums of user with ID = 1: ", data));

usersAPI.getUserTodos(1).then(data => console.log("11. Get all todos of user with ID = 1: ", data));

usersAPI.getUserPosts(1).then(data => console.log("12. Get all posts of user with ID = 1 (URI): ", data));

// just a plug
export default () => {
};
