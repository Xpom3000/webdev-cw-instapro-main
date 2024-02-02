/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n// Замени на свой, чтобы получить независимый от других набор данных.\r\n// \"боевая\" версия инстапро лежит в ключе prod\r\n\r\nconst personalKey = \"igor-shipitko\";\r\nconst baseHost = \"https://webdev-hw-api.vercel.app\";\r\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\r\n\r\nfunction getPosts() {\r\n  console.log(getPosts)\r\n  return fetch(postsHost, {\r\n    method: \"GET\",\r\n    headers: {\r\n      Authorization: (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.getToken)(),\r\n    },\r\n  })\r\n    .then((response) => {\r\n      if (response.status === 401) {\r\n        throw new Error(\"Нет авторизации\");\r\n      }\r\n\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      return data.posts;\r\n    });\r\n}\r\n\r\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\r\nfunction registerUser({ login, password, name, imageUrl }) {\r\n  return fetch(baseHost + \"/api/user\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n      name,\r\n      imageUrl,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error(\"Такой пользователь уже существует\");\r\n    }\r\n    return response.json();\r\n  });\r\n}\r\n\r\nfunction loginUser({ login, password }) {\r\n  return fetch(baseHost + \"/api/user/login\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error(\"Неверный логин или пароль\");\r\n    }\r\n    return response.json();\r\n  });\r\n}\r\n\r\n// Загружает картинку в облако, возвращает url загруженной картинки\r\nfunction uploadImage({ file }) {\r\n  const data = new FormData();\r\n  data.append(\"file\", file);\r\n\r\n  return fetch(baseHost + \"/api/upload/image\", {\r\n    method: \"POST\",\r\n    body: data,\r\n  }).then((response) => {\r\n    return response.json();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./api.js?");

/***/ }),

/***/ "./components/add-post-page-component.js":
/*!***********************************************!*\
  !*** ./components/add-post-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\nfunction renderAddPostPageComponent({ appEl, onAddPostClick }) {\r\n  const render = () => {\r\n    // TODO: Реализовать страницу добавления поста\r\n    const appHtml = `\r\n      <div class=\"page-container\">\r\n        <div class=\"header-container\"></div>\r\n        Cтраница добавления поста\r\n        <button class=\"button\" id=\"add-button\">Добавить</button>\r\n      </div>\r\n      `;\r\n\r\n    appEl.innerHTML = appHtml;\r\n\r\n    document.getElementById(\"add-button\").addEventListener(\"click\", () => {\r\n      onAddPostClick({\r\n        description: \"Описание картинки\",\r\n        imageUrl: \"https://image.png\",\r\n      });\r\n    });\r\n  };\r\n\r\n  render();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/add-post-page-component.js?");

/***/ }),

/***/ "./components/auth-page-component.js":
/*!*******************************************!*\
  !*** ./components/auth-page-component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthPageComponent: () => (/* binding */ renderAuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-component.js */ \"./components/upload-image-component.js\");\n\r\n\r\n\r\n\r\nfunction renderAuthPageComponent({ appEl, setUser }) {\r\n  let isLoginMode = true;\r\n  let imageUrl = \"\";\r\n\r\n  const renderForm = () => {\r\n    const appHtml = `\r\n      <div class=\"page-container\">\r\n          <div class=\"header-container\"></div>\r\n          <div class=\"form\">\r\n              <h3 class=\"form-title\">\r\n                ${\r\n                  isLoginMode\r\n                    ? \"Вход в&nbsp;Instapro\"\r\n                    : \"Регистрация в&nbsp;Instapro\"\r\n                }\r\n                </h3>\r\n              <div class=\"form-inputs\">\r\n    \r\n                  ${\r\n                    !isLoginMode\r\n                      ? `\r\n                      <div class=\"upload-image-container\"></div>\r\n                      <input type=\"text\" id=\"name-input\" class=\"input\" placeholder=\"Имя\" />\r\n                      `\r\n                      : \"\"\r\n                  }\r\n                  \r\n                  <input type=\"text\" id=\"login-input\" class=\"input\" placeholder=\"Логин\" />\r\n                  <input type=\"password\" id=\"password-input\" class=\"input\" placeholder=\"Пароль\" />\r\n                  \r\n                  <div class=\"form-error\"></div>\r\n                  \r\n                  <button class=\"button\" id=\"login-button\">${\r\n                    isLoginMode ? \"Войти\" : \"Зарегистрироваться\"\r\n                  }</button>\r\n              </div>\r\n            \r\n              <div class=\"form-footer\">\r\n                <p class=\"form-footer-title\">\r\n                  ${isLoginMode ? \"Нет аккаунта?\" : \"Уже есть аккаунт?\"}\r\n                  <button class=\"link-button\" id=\"toggle-button\">\r\n                    ${isLoginMode ? \"Зарегистрироваться.\" : \"Войти.\"}\r\n                  </button>\r\n                </p> \r\n               \r\n              </div>\r\n          </div>\r\n      </div>    \r\n`;\r\n\r\n    appEl.innerHTML = appHtml;\r\n\r\n    // Не вызываем перерендер, чтобы не сбрасывалась заполненная форма\r\n    // Точечно обновляем кусочек дом дерева\r\n    const setError = (message) => {\r\n      appEl.querySelector(\".form-error\").textContent = message;\r\n    };\r\n\r\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n      element: document.querySelector(\".header-container\"),\r\n    });\r\n\r\n    const uploadImageContainer = appEl.querySelector(\".upload-image-container\");\r\n\r\n    if (uploadImageContainer) {\r\n      (0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__.renderUploadImageComponent)({\r\n        element: appEl.querySelector(\".upload-image-container\"),\r\n        onImageUrlChange(newImageUrl) {\r\n          imageUrl = newImageUrl;\r\n        },\r\n      });\r\n    }\r\n\r\n    document.getElementById(\"login-button\").addEventListener(\"click\", () => {\r\n      setError(\"\");\r\n\r\n      if (isLoginMode) {\r\n        const login = document.getElementById(\"login-input\").value;\r\n        const password = document.getElementById(\"password-input\").value;\r\n\r\n        if (!login) {\r\n          alert(\"Введите логин\");\r\n          return;\r\n        }\r\n\r\n        if (!password) {\r\n          alert(\"Введите пароль\");\r\n          return;\r\n        }\r\n\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n          login: login,\r\n          password: password,\r\n        })\r\n          .then((user) => {\r\n            setUser(user.user);\r\n          })\r\n          .catch((error) => {\r\n            console.warn(error);\r\n            setError(error.message);\r\n          });\r\n      } else {\r\n        const login = document.getElementById(\"login-input\").value;\r\n        const name = document.getElementById(\"name-input\").value;\r\n        const password = document.getElementById(\"password-input\").value;\r\n        if (!name) {\r\n          alert(\"Введите имя\");\r\n          return;\r\n        }\r\n        if (!login) {\r\n          alert(\"Введите логин\");\r\n          return;\r\n        }\r\n\r\n        if (!password) {\r\n          alert(\"Введите пароль\");\r\n          return;\r\n        }\r\n\r\n        if (!imageUrl) {\r\n          alert(\"Не выбрана фотография\");\r\n          return;\r\n        }\r\n\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n          login: login,\r\n          password: password,\r\n          name: name,\r\n          imageUrl,\r\n        })\r\n          .then((user) => {\r\n            setUser(user.user);\r\n          })\r\n          .catch((error) => {\r\n            console.warn(error);\r\n            setError(error.message);\r\n          });\r\n      }\r\n    });\r\n\r\n    document.getElementById(\"toggle-button\").addEventListener(\"click\", () => {\r\n      isLoginMode = !isLoginMode;\r\n      renderForm();\r\n    });\r\n  };\r\n\r\n  renderForm();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/auth-page-component.js?");

/***/ }),

/***/ "./components/header-component.js":
/*!****************************************!*\
  !*** ./components/header-component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeaderComponent: () => (/* binding */ renderHeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n\r\n\r\n\r\nfunction renderHeaderComponent({ element }) {\r\n  element.innerHTML = `\r\n  <div class=\"page-header\">\r\n    <h1 class=\"logo\">instapro</h1>\r\n    <button class=\"header-button add-or-login-button\">\r\n      ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ?\r\n        `<div title=\"Добавить пост\" class=\"add-post-sign\"></div>` :\r\n        \"Войти\"}\r\n    </button>\r\n    ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ? `<button title=\"${_index_js__WEBPACK_IMPORTED_MODULE_0__.user.name}\" class=\"header-button logout-button\">Выйти</button>`\r\n      : \"\"\r\n    }  \r\n  </div>\r\n  \r\n`;\r\n\r\n  element\r\n    .querySelector(\".add-or-login-button\")\r\n    .addEventListener(\"click\", () => {\r\n      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.ADD_POSTS_PAGE);\r\n      } else {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.AUTH_PAGE);\r\n      }\r\n    });\r\n\r\n  element.querySelector(\".logo\").addEventListener(\"click\", () => {\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.POSTS_PAGE);\r\n  });\r\n\r\n  element.querySelector(\".logout-button\")?.addEventListener(\"click\", _index_js__WEBPACK_IMPORTED_MODULE_0__.logout);\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/header-component.js?");

/***/ }),

/***/ "./components/loading-page-component.js":
/*!**********************************************!*\
  !*** ./components/loading-page-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoadingPageComponent: () => (/* binding */ renderLoadingPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n\n\nfunction renderLoadingPageComponent({ appEl, user, goToPage }) {\n  const appHtml = `\n              <div class=\"page-container\">\n                <div class=\"header-container\"></div>\n                <div class=\"loading-page\">\n                  <div class=\"loader\"><div></div><div></div><div></div></div>\n                </div>\n              </div>`;\n\n  appEl.innerHTML = appHtml;\n\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\n    user,\n    element: document.querySelector(\".header-container\"),\n    goToPage,\n  });\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/loading-page-component.js?");

/***/ }),

/***/ "./components/posts-page-component.js":
/*!********************************************!*\
  !*** ./components/posts-page-component.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\r\n\r\n\r\n\r\nfunction renderPostsPageComponent() {\r\n  // TODO: реализовать рендер постов из api\r\n  console.log(\"Актуальный список постов:\", _index_js__WEBPACK_IMPORTED_MODULE_2__.posts);\r\n  const appElement = document.getElementById(\"app\");\r\n  console.log(1)\r\n  ;(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.fetchAndRenderPosts)(_index_js__WEBPACK_IMPORTED_MODULE_2__.posts);\r\n  const postHtml = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts\r\n    .map((post) => {\r\n      console.log(1)\r\n      return `\r\n        <li class=\"post\" id=\"post\">\r\n          <div class=\"post-header\" data-user-id=\"${id}\" id=\"post\">\r\n              <img src=${post.imageUrl}>\r\n              <p class=\"post-header__user-name\">${post.name}</p>\r\n          </div>\r\n      \r\n          <div class=\"post-image-container\">\r\n            <img class=\"post-image\" src=\"${imageUrl}\">\r\n          </div>\r\n          <div class=\"post-likes\">\r\n            <button data-post-id=\"${post.id}\" class=\"${post.isliked ? \"like-button like-active\" : \"like-button\"}\">\r\n              <img src=\"like-not-active\">\r\n            </button>\r\n            <p class=\"post-likes-text\">Нравится: <strong>${post.likes}</strong></p>\r\n          </div>\r\n          <p class=\"post-text\">\r\n            <span class=\"user-name\">${post.name}</span>${post.description}</p>\r\n          <p class=\"post-date\">${post.createdAt}</p>\r\n        </li>\r\n      `\r\n    })\r\n    .join(\"\");\r\n  /**\r\n   * TODO: чтобы отформатировать дату создания поста в виде \"19 минут назад\"\r\n   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow\r\n   */\r\n  const appHtml = `\r\n    <div class=\"page-container\">\r\n      <div class=\"header-container\"></div>\r\n      <ul class=\"posts\" id=\"posts\">${postHtml}</ul>\r\n      \r\n\r\n    </div>`;\r\n\r\n    appElement.innerHTML = appHtml;\r\n\r\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n    element: document.querySelector(\".header-container\"),\r\n  });\r\n\r\n  for (let userEl of document.querySelectorAll(\".post-header\")) {\r\n    userEl.addEventListener(\"click\", () => {\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\r\n        userId: userEl.dataset.userId,\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/posts-page-component.js?");

/***/ }),

/***/ "./components/upload-image-component.js":
/*!**********************************************!*\
  !*** ./components/upload-image-component.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUploadImageComponent: () => (/* binding */ renderUploadImageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n\n\nfunction renderUploadImageComponent({ element, onImageUrlChange }) {\n  let imageUrl = \"\";\n\n  const render = () => {\n    element.innerHTML = `\n  <div class=\"upload=image\">\n    ${imageUrl ?\n      `<div class=\"file-upload-image-conrainer\">\n        <img class=\"file-upload-image\" src=\"${imageUrl}\">\n        <button class=\"file-upload-remove-button button\">Заменить фото</button>\n      </div>`:\n      `<label class=\"file-upload-label secondary-button\">\n        <input type=\"file\" class=\"file-upload-input\" style=\"display:none\"/>\n        Выберите фото\n      </label>`\n    }\n  </div>`;\n\n    const fileInputElement = element.querySelector(\".file-upload-input\");\n\n    fileInputElement?.addEventListener(\"change\", () => {\n      const file = fileInputElement.files[0];\n      if (file) {\n        const lableEl = document.querySelector(\".file-upload-label\");\n        lableEl.setAttribute(\"disabled\", true);\n        lableEl.textContent = \"Загружаю файл...\";\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.uploadImage)({ file }).then(({ fileUrl }) => {\n          imageUrl = fileUrl;\n          onImageUrlChange(imageUrl);\n          render();\n        });\n      }\n    });\n\n    element\n      .querySelector(\".file-upload-remove-button\")\n      ?.addEventListener(\"click\", () => {\n        imageUrl = \"\";\n        onImageUrlChange(imageUrl);\n        render();\n      });\n  };\n\n  render();\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/upload-image-component.js?");

/***/ }),

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromLocalStorage: () => (/* binding */ getUserFromLocalStorage),\n/* harmony export */   removeUserFromLocalStorage: () => (/* binding */ removeUserFromLocalStorage),\n/* harmony export */   saveUserToLocalStorage: () => (/* binding */ saveUserToLocalStorage)\n/* harmony export */ });\nfunction saveUserToLocalStorage(user) {\r\n  window.localStorage.setItem(\"user\", JSON.stringify(user));\r\n}\r\n\r\nfunction getUserFromLocalStorage(user) {\r\n  try {\r\n    return JSON.parse(window.localStorage.getItem(\"user\"));\r\n  } catch (error) {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction removeUserFromLocalStorage(user) {\r\n  window.localStorage.removeItem(\"user\");\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./helpers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAndRenderPosts: () => (/* binding */ fetchAndRenderPosts),\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-post-page-component.js */ \"./components/add-post-page-component.js\");\n/* harmony import */ var _components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page-component.js */ \"./components/auth-page-component.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ \"./routes.js\");\n/* harmony import */ var _components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-page-component.js */ \"./components/posts-page-component.js\");\n/* harmony import */ var _components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading-page-component.js */ \"./components/loading-page-component.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ \"./helpers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet user = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.getUserFromLocalStorage)();\r\nlet page = null;\r\nlet posts = [];\r\n\r\nconst getToken = () => {\r\n  const token = user ? `Bearer ${user.token}` : undefined;\r\n  return token;\r\n};\r\n\r\nconst logout = () => {\r\n  user = null;\r\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.removeUserFromLocalStorage)();\r\n  goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n};\r\n\r\n/**\r\n * Включает страницу приложения\r\n */\r\nconst goToPage = (newPage, data) => {\r\n  if (\r\n    [\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE,\r\n    ].includes(newPage)\r\n  ) {\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n      // Если пользователь не авторизован, то отправляем его на авторизацию перед добавлением поста\r\n      page = user ? _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE : _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE;\r\n      return renderApp();\r\n    }\r\n\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\r\n      renderApp();\r\n\r\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\r\n        .then((newPosts) => {\r\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE;\r\n          posts = newPosts;\r\n          renderApp();\r\n        })\r\n        .catch((error) => {\r\n          console.error(error);\r\n          goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n        });\r\n    }\r\n\r\n\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n      // TODO: реализовать получение постов юзера из API\r\n      console.log(\"Открываю страницу пользователя: \", data.userId);\r\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE;\r\n      posts = [];\r\n      fetchAndRenderPosts(posts);\r\n      return renderApp();\r\n    }\r\n\r\n    page = newPage;\r\n    renderApp();\r\n\r\n    return;\r\n  }\r\n\r\n  throw new Error(\"страницы не существует\");\r\n};\r\n\r\nconst renderApp = () => {\r\n  const appEl = document.getElementById(\"app\");\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE) {\r\n    return (0,_components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__.renderLoadingPageComponent)({\r\n      appEl,\r\n      user,\r\n      goToPage,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE) {\r\n    return (0,_components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderAuthPageComponent)({\r\n      appEl,\r\n      setUser: (newUser) => {\r\n        user = newUser;\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.saveUserToLocalStorage)(user);\r\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n      },\r\n      user,\r\n      goToPage,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n    return (0,_components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent)({\r\n      appEl,\r\n      onAddPostClick({ description, imageUrl }) {\r\n        // TODO: реализовать добавление поста в API\r\n        // fetchAndRenderPosts(posts);\r\n        console.log(\"Добавляю пост...\", { description, imageUrl });\r\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n      },\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n    return (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\r\n      appEl,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n    // TODO: реализовать страницу фотографию пользвателя\r\n    appEl.innerHTML = \"Здесь будет страница фотографий пользователя\";\r\n    return;\r\n  }\r\n};\r\n\r\nconst fetchAndRenderPosts = (posts) => {\r\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\r\n    .then((responseData) => {\r\n      console.log(responseData.posts);\r\n    const appPosts = responseData.posts.map((post) => {\r\n      return {\r\n        id: post.id,\r\n        imageUrl: post.imageUrl,\r\n        createdAt: post.createdAt,\r\n        description: post.description,\r\n        name:post.user.name,\r\n        likes: post.likes,\r\n        isLiked: post.isLiked,\r\n       \r\n      };\r\n    });\r\n    posts = appPosts;\r\n    (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)(posts);\r\n  });\r\n};  \r\nfetchAndRenderPosts(posts);\r\n\r\n\r\n\r\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./index.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\r\nconst POSTS_PAGE = \"posts\";\r\nconst USER_POSTS_PAGE = \"user-posts\";\r\nconst AUTH_PAGE = \"auth\";\r\nconst ADD_POSTS_PAGE = \"add-post\";\r\nconst LOADING_PAGE = \"loading\";\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;