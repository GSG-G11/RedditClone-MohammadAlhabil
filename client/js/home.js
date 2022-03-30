const posts = document.querySelector('.posts');
const handlePosts = (data) => {
  if (data.status === 200) {
    const tempPost = document.querySelector('#post-template');
    posts.textContent = '';
    data.posts.forEach((post) => {
      const clone = tempPost.content.cloneNode(true);
      clone.querySelector('.wrap-post').setAttribute('data-index', post.id);
      clone.querySelector('.vote-count').textContent = Math.floor(Math.random() * 101);
      clone.querySelector('.post-publisher-name').textContent = post.username;
      clone.querySelector('.title').textContent = post.title;
      clone.querySelector('.content').textContent = post.content;
      posts.insertBefore(clone, posts.children[0]);
    });
  } else handleErrPages(500);
};

window.addEventListener('load', () => {
  getFetch('/api/v1/posts', handlePosts);
});
