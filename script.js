// Select the form and post list
const blogForm = document.getElementById('blogForm');
const postList = document.getElementById('postList');

// Handle form submission
blogForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        addPost(title, content);
        blogForm.reset();  // Clear form after submission
    }
});

// Function to add a new post
function addPost(title, content) {
    const post = document.createElement('div');
    post.classList.add('post');

    post.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <button onclick="deletePost(this)">Delete</button>
        <button onclick="editPost(this)">Edit</button>
    `;

    postList.appendChild(post);
}

// Function to delete a post
function deletePost(button) {
    const post = button.parentElement;
    postList.removeChild(post);
}

// Function to edit a post
function editPost(button) {
    const post = button.parentElement;
    const title = post.querySelector('h3').textContent;
    const content = post.querySelector('p').textContent;

    document.getElementById('title').value = title;
    document.getElementById('content').value = content;

    // Remove the post so we can create a new one
    postList.removeChild(post);
}
