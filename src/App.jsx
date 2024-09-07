import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function findUserId(id) {
  return usersFromServer.find(user => user.id === id) || null;
}

function filterPostComments(id) {
  return commentsFromServer.filter(comment => comment.postId === id);
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: findUserId(post.userId),
  comments: filterPostComments(post.id),
}));



export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts}/>
  </section>
);