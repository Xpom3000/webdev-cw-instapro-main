import { POSTS_PAGE, USER_POSTS_PAGE, } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { posts, goToPage, getToken } from "../index.js";
import { formatDistance} from 'date-fns'
import { ru } from 'date-fns/locale'
import { disLike, like } from "../api.js";

// const now = post.createdAt
// const formatDate = formatDistance(post.createdAt , new Date(), { addSuffix: true, locale: ru })

export function renderPostsPageComponent() {
  // TODO: реализовать рендер постов из api
  console.log("Актуальный список постов:", posts);
  let likeImg;
  let likes;
  const appElement = document.getElementById("app");
  const appEl = posts
    .map((post, index) => {
      if (post.likes.length === 1) {
        likes = post.likes[0].name;
      }else if (post.likes.length > 1) {
        likes = `${post.likes[0].name} и еще ${post.likes.length - 1}`;
      } else {
        likes = ""
      }

      if (post.isLiked) {
        likeImg = '<img src="./assets/images/like-active.svg"></img>';
      } else { 
        likeImg = '<img src="./assets/images/like-not-active.svg"></img>';
      }
      return `
        <li class="post" id="post">
          <div class="post-header" data-user-id="${post.user.id}">
              <img  class="post-header__user-image" src=${post.user.imageUrl}>
              <p class="post-header__user-name">${post.user.name}</p>
          </div>
      
          <div class="post-image-container">
            <img class="post-image" src="${post.imageUrl}">
          </div>
          <div class="post-likes">
            <button data-post-id="${post.id}" data-is-liked="${post.isLiked}" class="like-button ${post.isLiked ? "-active-like" : ''}" data-index="${index}">
             ${likeImg}
            </button>
            <p class="post-likes-text">Нравится: <strong>: ${post.likes.length}</strong></p>
          </div>
          <p class="post-text">
            <span class="user-name">${post.user.name}</span>${post.description}</p>
          <p class="post-date">${formatDistance(post.createdAt , new Date(), { addSuffix: true, locale: ru })}</p>
        </li>
      `
    })
    .join("");

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
  initLikeLisner();
}

export function initLikeLisner(userId) {
  const likeButtonElement = document.querySelectorAll(".like-button");
for (const likeElement of likeButtonElement) {
  likeElement.addEventListener("click", () => {
    console.log(likeElement.dataset);
    // const currentPost = posts.find(post => post.id === event.currentTarget.id);
    if (likeElement.dataset.isLiked === "true") {
      disLike({
        id: likeElement.dataset.postId, token: getToken()
      })
      .then(() => {
        if (userId) {
          goToPage(USER_POSTS_PAGE, { userId })
        }
        else {
          goToPage(POSTS_PAGE, { noLoading: true })
        }
      })
    }
    else {
      like({
        id: likeElement.dataset.postId, token: getToken()
      })
      .then(() => {
        if (userId) {
          goToPage(USER_POSTS_PAGE, { userId })
        }
        else {
          goToPage(POSTS_PAGE, { noLoading: true })
        }
      });
    }
  })
}

}