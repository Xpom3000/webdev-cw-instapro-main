import { POSTS_PAGE, USER_POSTS_PAGE, } from "../routes.js";
import { goToPage, getToken } from "../index.js";
import { disLike, like } from "../api.js";

export function initLikeLisner(userId) {
  const likeButtonElement = document.querySelectorAll(".like-button");
  for (const likeElement of likeButtonElement) {
    likeElement.addEventListener("click", () => {
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
initLikeLisner();