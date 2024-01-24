import { renderUploadImageComponent } from "./upload-image-component";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
      <div class="page-container">
        <div class="header-container"></div>
        Cтраница добавления поста
        <div class="upload-image-container"></div>
        <textarea class="text"></textarea>
        <button class="button" id="add-button">Добавить</button>
      </div>
      `;

    appEl.innerHTML = appHtml;

    const uploadImageContainer = appEl.querySelector(".upload-image-container");
    let imageUrl = "";
    if (uploadImageContainer) {
      renderUploadImageComponent({
        element: appEl.querySelector(".upload-image-container"),
        onImageUrlChange(newImageUrl) {
          imageUrl = newImageUrl;
        },
      });
    }
    document.getElementById("add-button").addEventListener("click", () => {
      onAddPostClick({
        description: appEl.querySelector(".text").value,
        imageUrl,
      });
    });
  };

  render();
}
