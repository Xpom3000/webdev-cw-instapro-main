import { renderHeaderComponent } from "./header-component";
import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";
import { initLikeLisner } from "../module/likes";
import { posts } from "..";
// import { initDeleteButtonLisners } from "../module/delete";

export function renderUserPostsPage() {
  // TODO: реализован рендер постов из api
  console.log("Cписок постов юзера :", posts);
  let likeImg;
  let likes;
  
  const appElement = document.getElementById("app");
  const postEl = posts
    .map((post) => {
      if (post.likes.length === 1) {
        likes = post.likes[0].name;
      } else if (post.likes.length > 1) {
        likes = `${post.likes[0].name} и еще ${post.likes.length - 1}`;
      } else {
        likes = "";
      }
      
      if (post.isLiked) {
        likeImg = '<img src="./assets/images/like-active.svg"></img>';
      } else {
        likeImg = '<img src="./assets/images/like-not-active.svg"></img>';
      }
      return `
      <li class="post" id="user-posts">
        <div class="post-header" data-user-id="${post.user.id}">
            <img  class="post-header__user-image" src=${post.user.imageUrl}>
            <p class="post-header__user-name">${post.user.name}</p>
        </div>
        <div class="post-image-container">
          <img class="post-image" src="${post.imageUrl}">
        </div>
        <div class="button-container">
          <div class="post-likes">
            <button data-post-id="${post.id}" data-is-liked="${post.isLiked}" class="like-button ${post.isLiked ? "-active-like" : ""} "data-id="${post.user.id}">
              ${likeImg}
            </button>
            <p class="post-likes-text">Нравится: <strong>${likes}</strong></p>
          </div>
          <button  class="delete-form-button header-button logout-button" style="display:none" data-id="${post.id}">Удалить пост</button>
        </div>
        <p class="post-text"><span class="user-name">${post.user.name}</span>: ${post.description} </p>
        <p class="post-date">${formatDistance(post.createdAt, {locale: ru})}</p>
      </li>`;
    })
    .join("");
  /**
   * TODO: чтобы отформатировать дату создания поста в виде "19 минут назад"
   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow
   */
  const appHtml = `
    <div class="page-container">
      <div class="header-container"></div>
      <ul class="posts" id="posts">${postEl}</ul>
    </div>`;
  appElement.innerHTML = appHtml;

  renderHeaderComponent({
    element: document.querySelector(".header-container"),
  });
  initLikeLisner(posts[0].user.id);
  // initDeleteButtonLisners({ id });
}
