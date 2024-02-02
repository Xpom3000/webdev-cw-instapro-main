import { renderUserPostsPage } from "../components/user-page-component.js";
import { deletePost } from "./api.js";

export const initDeleteButtonLisners = (posts) => {
    // deleteButtonElements.disabled = true;
    const deleteButtonElements = document.querySelectorAll(".delete-form-button");
    for (const deleteButtonElement of deleteButtonElements) {
        // 
        deleteButtonElement.addEventListener("click", (event) => {
            event.stopPropagation();
            const id = deleteButtonElement.dataset.id;
            deletePost({ id })
            .then(() => {
                renderUserPostsPage({ posts });
            })
          
            
        });
    };
};