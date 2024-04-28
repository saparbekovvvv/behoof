export const data = {
  posts: [
    { id: "1", title: "a title", views: 100 },
    { id: "2", title: "another title", views: 200 },
  ],
  comments: [
    { id: "1", text: "a comment about post 1", postId: "1" },
    { id: "2", text: "another comment about post 1", postId: "1" },
  ],
  profile: {
    name: "typicode",
  },
  users: [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Marlie Bob" },
  ],
};

const commentsByPost = {};

data.comments.forEach((comment) => {
  const postId = comment.postId;
  if (!commentsByPost[postId]) {
    commentsByPost[postId] = [];
  }
  commentsByPost[postId].push(comment.text);
});

console.log("Посты с комментариями:");
data.posts.forEach((post) => {
  const comments = commentsByPost[post.id] || [];
  console.log(
    `ID: ${post.id}, Заголовок: ${post.title}, Просмотры: ${post.views}`
  );
  console.log(`Комментарии: ${comments.join(", ")}`);
});
