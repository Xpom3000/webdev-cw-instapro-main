import { sanitizeHtml } from "../helpers";
import { renderHeaderComponent } from "./header-component";
import { renderUploadImageComponent } from "./upload-image-component";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  let imageUrl = "";
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
        <div class="form">
          <h3 class="form-title">Добавить пост</h3>
          <div class="form-inputs">
            <div class="upload-image-container"></div>
            <label>
              Опишите фотографию:
              <textarea id="textarea-input" class="input textarea"></textarea>
            </label>
            <button class="button" id="add-button">Добавить</button>
          </div>
        </div>
      </div>
      `;

    appEl.innerHTML = appHtml;
    
    const description = document.getElementById("textarea-input")
    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: sanitizeHtml(description.value),
        imageUrl,
      });
    });
  };

  render();
  renderHeaderComponent({ element: document.querySelector(".header-container") });
  
  const uploadImageContainer = appEl.querySelector(".upload-image-container");
    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
}
