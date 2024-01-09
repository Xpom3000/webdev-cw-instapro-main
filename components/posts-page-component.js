import { USER_POSTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, fetchAndRenderPosts } from "../index.js";

export function renderPostsPageComponent() {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:");
  const appElement = document.getElementById("app");
  // fetchAndRenderPosts(posts);
  const appEl = posts
    .map((post) => {
      console.log(post)
      return `
        <li class="post" id="post">
          <div class="post-header" data-user-id="${id}" id="post">
              <img src=${post.imageUrl}>
              <p class="post-header__user-name">${post.user.name}</p>
          </div>
      
          <div class="post-image-container">
            <img class="post-image" src="${post.user.imageUrl}">
          </div>
          <div class="post-likes">
            <button data-post-id="${post.likes.id}" class="${post.isliked ? "like-button like-active" : "like-button"}">
              <img src="like-not-active">
            </button>
            <p class="post-likes-text">Нравится: <strong>${post.likes.id}</strong></p>
          </div>
          <p class="post-text">
            <span class="user-name">${post.user.name}</span>${post.description}</p>
          <p class="post-date">${post.createdAt}</p>
        </li>
      `
    })
    .join("");
  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <ul class="posts" id="posts">${appEl}</ul>
    </div>`;

    appElement.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });

  for (let userEl of document.querySelectorAll(".post-header")) {
    userEl.addEventListener("click", () => {
      goToPage(USER_POSTS_PAGE, {
        userId: userEl.dataset.userId,
      });
    });
  }
}
