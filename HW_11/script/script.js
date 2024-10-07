// fetch
// HTTP requests

// GET
// return Promise

// json

// let data = null;

// function getUser(userId, callback) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error("Ошибка!!!!!");
//             }
//         })
//         .then((data) => {
//             // renderUser
//             if (callback) {
//                 callback(data);
//             }
//             return data;

//         })
//         .catch((err) => {console.log("Error ===>", err.message);
//         throw new Error("No user!!");
// });
// }

// // name, phone, email
// function renderUser(userData) {
//     const userCard = document.createElement("div");
//     userCard.innerHTML = `
//       <h2 class="name">${userData.name}</h2>
//       <p>${userData.phone}</p>
//       <p>${userData.email}</p>
//     `;
//     document.body.append(userCard);
// }

// getUser(5, renderUser);

// Promise.all([getUser(1), getUser(3)])
//   .then((data) => {
//     renderUser(data[0]);
//     renderUser(data[1]);
//   })
//   .catch((err) => console.log("Error!!!"));


// FormData

// Форма пользователей
const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = document.getElementById("userId").value;


  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((userData) => {
      // Отображение данных пользователя
      renderUser(userData);
    })
    .catch((err) => console.error("Error:", err));
});


function renderUser(userData) {
  const usersContainer = document.getElementById("users-container");
  usersContainer.innerHTML = `
    <h3>${userData.name}</h3>
    <p>Email: ${userData.email}</p>
    <p>City: ${userData.address.city}</p>
  `;
}

// Форма задач
const todoForm = document.getElementById("todoForm");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoId = document.getElementById("todoId").value;


  fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    .then((response) => response.json())
    .then((todoData) => {

      renderTodo(todoData);
    })
    .catch((err) => console.error("Error:", err));
});


function renderTodo(todoData) {
  const todosContainer = document.getElementById("todos-container");
  todosContainer.innerHTML = `
    <h3>${todoData.title}</h3>
    <p>Status: ${todoData.completed ? "Completed" : "Incomplete"}</p>
  `;
}

// Форма коммент
const commentForm = document.getElementById("commentForm");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const commentId = document.getElementById("commentId").value;


  fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then((response) => response.json())
    .then((commentData) => {

      renderComment(commentData);
    })
    .catch((err) => console.error("Error:", err));
});


function renderComment(commentData) {
  const commentsContainer = document.getElementById("comments-container");
  commentsContainer.innerHTML = `
    <h3>${commentData.name}</h3>
    <p>${commentData.body}</p>
    <p>By: ${commentData.email}</p>
  `;
}

// Форма поста
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();


  const postTitle = document.getElementById("postTitle").value;
  const postBody = document.getElementById("postBody").value;
  const postUserId = document.getElementById("postUserId").value;


  const postData = {
    title: postTitle,
    body: postBody,
    userId: +postUserId,
  };


  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(postData),
  })
    .then((response) => response.json())
    .then((newPost) => {

      renderPost(newPost);
    })
    .catch((err) => console.error("Error:", err));
});


function renderPost(postData) {
  const postsContainer = document.getElementById("posts-container");
  postsContainer.innerHTML = `
    <h3>${postData.title}</h3>
    <p>${postData.body}</p>
    <p>Posted by User ID: ${postData.userId}</p>
  `;
}
