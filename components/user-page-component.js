// export const USER_POSTS_PAGE = "user-posts";

// import { posts } from "../index.js";
import { renderHeaderComponent } from "./header-component";

export function renderUserPostsPage({posts}) {
    // TODO: реализовать рендер постов из api
    console.log("Cписок постов юзера :", posts);
    let likeImg;
    let likes;

  // const post

    const appElement = document.getElementById("app");
    // console.log(data);
    const postEl = posts.map((post) => {
        
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
          <li class="post" id="user-posts">
            <div class="post-header" data-user-id="${post.user.id}">
                <img  class="post-header__user-image" src=${post.user.imageUrl}>
                <p class="post-header__user-name">${post.user.name}</p>
            </div>
        
            <div class="post-image-container">
              <img class="post-image" src="${post.imageUrl}">
            </div>
            <div class="post-likes">
              <button data-post-id="${post.likes.id}" class="like-button" >
               ${likeImg}
              </button>
              <p class="post-likes-text">Нравится: <strong>${post.likes.length}</strong></p>
            </div>
            <p class="post-text">
              <span class="user-name">${post.user.name}</span>${post.description}</p>
            <p class="post-date">${post.createdAt} назад </p>
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
        <ul class="posts" id="posts">${postEl}</ul>
      </div>`;
  
      appElement.innerHTML = appHtml;
  
    renderHeaderComponent({
      element: document.querySelector(".header-container"),
    });
  
    const likeButtonElement = document.querySelectorAll(".like-button");
    for (let likeEl of likeButtonElement) {
      likeEl.addEventListener("click", (event) => {
        console.log("Привет", event.currentTarget.id);
        const currentPost = posts.find(post => post.id === event.currentTarget.id);
        if (currentPost.isLiked) {
          disLike({
            id: event.currentTarget.id, token: getToken()
          }).then(() => {
            renderHeaderComponent();
          })
        }
        })
      }
  
    for (let userEl of document.querySelectorAll(".post-header")) {
      userEl.addEventListener("click", () => {
        goToPage(USER_POSTS_PAGE, {
          id: userEl.dataset.id,
        });
      });
    }
  }
  