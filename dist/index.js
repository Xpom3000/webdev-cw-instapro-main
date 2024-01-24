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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   disLike: () => (/* binding */ disLike),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   like: () => (/* binding */ like),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\n// Замени на свой, чтобы получить независимый от других набор данных.\n// \"боевая\" версия инстапро лежит в ключе prod\n// import { getToken} from \"./index.js\"\nconst personalKey = \"prod\";\nconst baseHost = \"https://webdev-hw-api.vercel.app\";\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\n// https://wedev-api.sky.pro/api/v1/:personal-key/instapro\n\nfunction getPosts({ token }) {\n  // console.log(getPosts)\n  return fetch(postsHost, {\n    method: \"GET\",\n    headers: {\n      Authorization: token,\n    },\n  })\n    .then((response) => {\n      if (response.status === 401) {\n        throw new Error(\"Нет авторизации\");\n      }\n      return response.json();\n    })\n    .then((data) => {\n      return data.posts;\n    });\n}\n\nfunction like({ id }) {\n  // console.log(likeComment);\n  return fetch(`${postsHost}/${id}/like`, {\n    method: \"POST\",\n    headers: {\n      Authorization: getToken(),\n    },\n  }).then((response) => {\n    return response.json();\n  });\n}\n\nfunction disLike({ id }) {\n  // console.log(likeComment);\n  return fetch(`${postsHost}/${id}/dislike`, {\n    method: \"POST\",\n    headers: {\n      Authorization: getToken(),\n    },\n  }).then((response) => {\n    return response.json();\n  });\n}\n\n\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\nfunction registerUser({ login, password, name, imageUrl }) {\n  return fetch(baseHost + \"/api/user\", {\n    method: \"POST\",\n    body: Text.stringify({\n      login,\n      password,\n      name,\n      imageUrl,\n    }),\n  }).then((response) => {\n    if (response.status === 400) {\n      throw new Error(\"Такой пользователь уже существует\");\n    }\n    return response.json();\n  });\n}\n\nfunction loginUser({ login, password }) {\n  return fetch(baseHost + \"/api/user/login\", {\n    method: \"POST\",\n    body: JSON.stringify({\n      login,\n      password,\n    }),\n  }).then((response) => {\n    if (response.status === 400) {\n      throw new Error(\"Неверный логин или пароль\");\n    }\n    return response.json();\n  });\n}\n\n// Загружает картинку в облако, возвращает url загруженной картинки\nfunction uploadImage({ file }) {\n  const data = new FormData();\n  data.append(\"file\", file);\n\n  return fetch(baseHost + \"/api/upload/image\", {\n    method: \"POST\",\n    body: data,\n  }).then((response) => {\n    return response.json();\n  });\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./api.js?");

/***/ }),

/***/ "./components/add-post-page-component.js":
/*!***********************************************!*\
  !*** ./components/add-post-page-component.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\nfunction renderAddPostPageComponent({ appEl, onAddPostClick }) {\n  const render = () => {\n    // TODO: Реализовать страницу добавления поста\n    const appHtml = `\n      <div class=\"page-container\">\n        <div class=\"header-container\"></div>\n        Cтраница добавления поста\n        <button class=\"button\" id=\"add-button\">Добавить</button>\n      </div>\n      `;\n\n    appEl.innerHTML = appHtml;\n\n    document.getElementById(\"add-button\").addEventListener(\"click\", () => {\n      onAddPostClick({\n        description: \"Описание картинки\",\n        imageUrl: \"https://image.png\",\n      });\n    });\n  };\n\n  render();\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/add-post-page-component.js?");

/***/ }),

/***/ "./components/auth-page-component.js":
/*!*******************************************!*\
  !*** ./components/auth-page-component.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthPageComponent: () => (/* binding */ renderAuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"./api.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-component.js */ \"./components/upload-image-component.js\");\n\n\n\n\nfunction renderAuthPageComponent({ appEl, setUser }) {\n  let isLoginMode = true;\n  let imageUrl = \"\";\n\n  const renderForm = () => {\n    const appHtml = `\n      <div class=\"page-container\">\n          <div class=\"header-container\"></div>\n          <div class=\"form\">\n              <h3 class=\"form-title\">\n                ${\n                  isLoginMode\n                    ? \"Вход в&nbsp;Instapro\"\n                    : \"Регистрация в&nbsp;Instapro\"\n                }\n                </h3>\n              <div class=\"form-inputs\">\n    \n                  ${\n                    !isLoginMode\n                      ? `\n                      <div class=\"upload-image-container\"></div>\n                      <input type=\"text\" id=\"name-input\" class=\"input\" placeholder=\"Имя\" />\n                      `\n                      : \"\"\n                  }\n                  \n                  <input type=\"text\" id=\"login-input\" class=\"input\" placeholder=\"Логин\" />\n                  <input type=\"password\" id=\"password-input\" class=\"input\" placeholder=\"Пароль\" />\n                  \n                  <div class=\"form-error\"></div>\n                  \n                  <button class=\"button\" id=\"login-button\">${\n                    isLoginMode ? \"Войти\" : \"Зарегистрироваться\"\n                  }</button>\n              </div>\n            \n              <div class=\"form-footer\">\n                <p class=\"form-footer-title\">\n                  ${isLoginMode ? \"Нет аккаунта?\" : \"Уже есть аккаунт?\"}\n                  <button class=\"link-button\" id=\"toggle-button\">\n                    ${isLoginMode ? \"Зарегистрироваться.\" : \"Войти.\"}\n                  </button>\n                </p> \n               \n              </div>\n          </div>\n      </div>    \n`;\n\n    appEl.innerHTML = appHtml;\n\n    // Не вызываем перерендер, чтобы не сбрасывалась заполненная форма\n    // Точечно обновляем кусочек дом дерева\n    const setError = (message) => {\n      appEl.querySelector(\".form-error\").textContent = message;\n    };\n\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\n      element: document.querySelector(\".header-container\"),\n    });\n\n    const uploadImageContainer = appEl.querySelector(\".upload-image-container\");\n\n    if (uploadImageContainer) {\n      (0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__.renderUploadImageComponent)({\n        element: appEl.querySelector(\".upload-image-container\"),\n        onImageUrlChange(newImageUrl) {\n          imageUrl = newImageUrl;\n        },\n      });\n    }\n\n    document.getElementById(\"login-button\").addEventListener(\"click\", () => {\n      setError(\"\");\n\n      if (isLoginMode) {\n        const login = document.getElementById(\"login-input\").value;\n        const password = document.getElementById(\"password-input\").value;\n\n        if (!login) {\n          alert(\"Введите логин\");\n          return;\n        }\n\n        if (!password) {\n          alert(\"Введите пароль\");\n          return;\n        }\n\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\n          login: login,\n          password: password,\n        })\n          .then((user) => {\n            setUser(user.user);\n          })\n          .catch((error) => {\n            console.warn(error);\n            setError(error.message);\n          });\n      } else {\n        const login = document.getElementById(\"login-input\").value;\n        const name = document.getElementById(\"name-input\").value;\n        const password = document.getElementById(\"password-input\").value;\n        if (!name) {\n          alert(\"Введите имя\");\n          return;\n        }\n        if (!login) {\n          alert(\"Введите логин\");\n          return;\n        }\n\n        if (!password) {\n          alert(\"Введите пароль\");\n          return;\n        }\n\n        if (!imageUrl) {\n          alert(\"Не выбрана фотография\");\n          return;\n        }\n\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\n          login: login,\n          password: password,\n          name: name,\n          imageUrl,\n        })\n          .then((user) => {\n            setUser(user.user);\n          })\n          .catch((error) => {\n            console.warn(error);\n            setError(error.message);\n          });\n      }\n    });\n\n    document.getElementById(\"toggle-button\").addEventListener(\"click\", () => {\n      isLoginMode = !isLoginMode;\n      renderForm();\n    });\n  };\n\n  renderForm();\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/auth-page-component.js?");

/***/ }),

/***/ "./components/header-component.js":
/*!****************************************!*\
  !*** ./components/header-component.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeaderComponent: () => (/* binding */ renderHeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n\n\n\nfunction renderHeaderComponent({ element }) {\n  element.innerHTML = `\n  <div class=\"page-header\">\n    <h1 class=\"logo\">instapro</h1>\n    <button class=\"header-button add-or-login-button\">\n      ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ?\n        `<div title=\"Добавить пост\" class=\"add-post-sign\"></div>` :\n        \"Войти\"}\n    </button>\n    ${_index_js__WEBPACK_IMPORTED_MODULE_0__.user ? `<button title=\"${_index_js__WEBPACK_IMPORTED_MODULE_0__.user.name}\" class=\"header-button logout-button\">Выйти</button>`\n      : \"\"\n    }  \n  </div>\n  \n`;\n\n  element\n    .querySelector(\".add-or-login-button\")\n    .addEventListener(\"click\", () => {\n      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.ADD_POSTS_PAGE);\n      } else {\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.AUTH_PAGE);\n      }\n    });\n\n  element.querySelector(\".logo\").addEventListener(\"click\", () => {\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.POSTS_PAGE);\n  });\n\n  element.querySelector(\".logout-button\")?.addEventListener(\"click\", _index_js__WEBPACK_IMPORTED_MODULE_0__.logout);\n\n  return element;\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/header-component.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ \"./routes.js\");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ \"./components/header-component.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ \"./index.js\");\n\n\n\n// import { format } from 'date-fns'\n// import { ru } from 'date-fns/locale'\n\n\n// const now = new Date();\n// const getDate = format(new Date(task.created_at), 'dd/MM/yyyy hh:mm')\n\n\n\n\nfunction renderPostsPageComponent() {\n  // TODO: реализовать рендер постов из api\n  console.log(\"Актуальный список постов:\", _index_js__WEBPACK_IMPORTED_MODULE_2__.posts);\n  let likeImg;\n  let likes;\n  const appElement = document.getElementById(\"app\");\n  const appEl = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts\n    .map((post) => {\n      if (post.likes.length === 1) {\n        likes = post.likes[0].name;\n      }else if (post.likes.length > 1) {\n        likes = `${post.likes[0].name} и еще ${post.likes.length - 1}`;\n      } else {\n        likes = \"\"\n      }\n\n      if (post.isLiked) {\n        likeImg = '<img src=\"./assets/images/like-active.svg\"></img>';\n      } else { \n        likeImg = '<img src=\"./assets/images/like-not-active.svg\"></img>';\n      }\n      return `\n        <li class=\"post\" id=\"post\">\n          <div class=\"post-header\" data-user-id=\"${post.user.id}\">\n              <img  class=\"post-header__user-image\" src=${post.user.imageUrl}>\n              <p class=\"post-header__user-name\">${post.user.name}</p>\n          </div>\n      \n          <div class=\"post-image-container\">\n            <img class=\"post-image\" src=\"${post.imageUrl}\">\n          </div>\n          <div class=\"post-likes\">\n            <button data-post-id=\"${post.likes.id}\" class=\"like-button\" >\n             ${likeImg}\n            </button>\n            <p class=\"post-likes-text\">Нравится: <strong>${post.likes.length}</strong></p>\n          </div>\n          <p class=\"post-text\">\n            <span class=\"user-name\">${post.user.name}</span>${post.description}</p>\n          <p class=\"post-date\">${post.createdAt} назад </p>\n        </li>\n      `\n    })\n    .join(\"\");\n  /**\n   * TODO: чтобы отформатировать дату создания поста в виде \"19 минут назад\"\n   * можно использовать https://date-fns.org/v2.29.3/docs/formatDistanceToNow\n   */\n  const appHtml = `\n    <div class=\"page-container\">\n      <div class=\"header-container\"></div>\n      <ul class=\"posts\" id=\"posts\">${appEl}</ul>\n    </div>`;\n\n    appElement.innerHTML = appHtml;\n\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\n    element: document.querySelector(\".header-container\"),\n  });\n\n  const likeButtonElement = document.querySelectorAll(\".like-button\");\n  for (let likeEl of likeButtonElement) {\n    likeEl.addEventListener(\"click\", (event) => {\n      console.log(\"Привет\", event.currentTarget.id);\n      const currentPost = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts.find(post => post.id === event.currentTarget.id);\n      if (currentPost.isLiked) {\n        disLike({\n          id: event.currentTarget.id, token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)()\n        }).then(() => {\n          (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)();\n        })\n      }\n      })\n    }\n\n  for (let userEl of document.querySelectorAll(\".post-header\")) {\n    userEl.addEventListener(\"click\", () => {\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\n        userId: userEl.dataset.userId,\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./components/posts-page-component.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromLocalStorage: () => (/* binding */ getUserFromLocalStorage),\n/* harmony export */   removeUserFromLocalStorage: () => (/* binding */ removeUserFromLocalStorage),\n/* harmony export */   saveUserToLocalStorage: () => (/* binding */ saveUserToLocalStorage)\n/* harmony export */ });\n\n\nfunction saveUserToLocalStorage(user) {\n  window.localStorage.setItem(\"user\", JSON.stringify(user));\n}\n\nfunction getUserFromLocalStorage(user) {\n  try {\n    return JSON.parse(window.localStorage.getItem(\"user\"));\n  } catch (error) {\n    return null;\n  }\n}\n\nfunction removeUserFromLocalStorage(user) {\n  window.localStorage.removeItem(\"user\");\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./helpers.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-post-page-component.js */ \"./components/add-post-page-component.js\");\n/* harmony import */ var _components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page-component.js */ \"./components/auth-page-component.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ \"./routes.js\");\n/* harmony import */ var _components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-page-component.js */ \"./components/posts-page-component.js\");\n/* harmony import */ var _components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading-page-component.js */ \"./components/loading-page-component.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ \"./helpers.js\");\n\n\n\n\n\n\n\n\nlet user = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.getUserFromLocalStorage)();\nlet page = null;\nlet posts = [];\n\nconst getToken = () => {\n  const token = user ? `Bearer ${user.token}` : undefined;\n  return token;\n};\n\nconst logout = () => {\n  user = null;\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.removeUserFromLocalStorage)();\n  goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n};\n\n/**\n * Включает страницу приложения\n */\nconst goToPage = (newPage, data) => {\n  if (\n    [\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE,\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE,\n    ].includes(newPage)\n  ) {\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\n      // Если пользователь не авторизован, то отправляем его на авторизацию перед добавлением поста\n      page = user ? _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE : _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE;\n      return renderApp();\n    }\n\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\n      renderApp();\n\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\n        .then((newPosts) => {\n          console.log(newPosts);\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE;\n          posts = newPosts;\n          renderApp();\n        })\n        .catch((error) => {\n          console.error(error);\n          goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n        });\n    }\n\n\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\n      // TODO: реализовать получение постов юзера из API\n      console.log(\"Открываю страницу пользователя:\", data.userId);\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE;\n      posts = [];\n      fetchAndRenderPosts(posts);\n      return renderApp();\n    }\n\n    page = newPage;\n    renderApp();\n\n    return;\n  }\n\n  throw new Error(\"страницы не существует\");\n};\n\nconst renderApp = () => {\n  const appEl = document.getElementById(\"app\");\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE) {\n    return (0,_components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__.renderLoadingPageComponent)({\n      appEl,\n      user,\n      goToPage,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE) {\n    return (0,_components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderAuthPageComponent)({\n      appEl,\n      setUser: (newUser) => {\n        user = newUser;\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.saveUserToLocalStorage)(user);\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n      },\n      user,\n      goToPage,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\n    return (0,_components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent)({\n      appEl,\n      onAddPostClick({ description, imageUrl }) {\n        // TODO: реализовать добавление поста в API\n        // fetchAndRenderPosts(posts);\n        console.log(\"Добавляю пост...\", { description, imageUrl });\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n      },\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\n    return (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\n      appEl,\n    });\n  }\n\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\n    // TODO: реализовать страницу фотографию пользвателя\n    appEl.innerHTML = \"Здесь будет страница фотографий пользователя\";\n    return;\n  }\n};\n\n// export const fetchAndRenderPosts = (posts) => {\n//   getPosts({ token: getToken() })\n//     .then((responseData) => {\n//       console.log(posts);\n//       const appPosts = responseData.posts.map((post) => {\n//       console.log(responseData)\n//       return {\n//         id: post.id,\n//         imageUrl: post.imageUrl,\n//         createdAt: post.createdAt,\n//         description: post.description,\n//         name:post.user.name,\n//         likes: post.likes,\n//         isLiked: post.isLiked,\n//       };\n//     });\n//     posts = appPosts;\n//     renderPostsPageComponent(posts);\n//   });\n// };  \n// fetchAndRenderPosts(posts);\n\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./index.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\nconst POSTS_PAGE = \"posts\";\nconst USER_POSTS_PAGE = \"user-posts\";\nconst AUTH_PAGE = \"auth\";\nconst ADD_POSTS_PAGE = \"add-post\";\nconst LOADING_PAGE = \"loading\";\n\n\n//# sourceURL=webpack://webdev-cw-instapro-main/./routes.js?");

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