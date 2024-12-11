import { photosData } from "./picturesRenderer.js";

function createImageElement(parentElement, photoObject) {
  parentElement.querySelector("img").setAttribute("src", photoObject.url);
}

function createSocialInfoElement(parentElement, photoObject) {
  parentElement.querySelector(".likes-count").textContent = photoObject.likes;
  parentElement.querySelector(".comments-count").textContent = photoObject.comments.length;
  parentElement.querySelector(".social__caption").textContent = photoObject.description;
}


function createCommentsElement(parentElement, photoObject) {
  const commentsContainer = parentElement.querySelector(".social__comments");
  commentsContainer.innerHTML = "";

  photoObject.comments.forEach((comment) => {
    const commentItem = document.createElement("li");
    commentItem.classList.add("social__comment");

    const image = document.createElement("img");
    image.classList.add("social__picture");
    image.setAttribute("src", comment.avatar);
    image.setAttribute("alt", comment.name);
    image.setAttribute("width", "35");
    image.setAttribute("height", "35");
    commentItem.appendChild(image);

    const commentText = document.createElement("p");
    commentText.textContent = comment.message;
    commentItem.appendChild(commentText);

    commentsContainer.appendChild(commentItem);
  });
}

function openBigPicture() {
  document.querySelector(".pictures").addEventListener("click", (ev) => {
    document.querySelector("body").classList.add("modal-open");
    const bigPicture = document.querySelector(".big-picture");
    bigPicture.classList.remove("hidden");
    bigPicture.querySelector(".social__comment-count").classList.add("hidden");
    bigPicture.querySelector(".comments-loader").classList.add("hidden");

    const photoObject = photosData.find((photo) => photo.url === ev.target.getAttribute("src"));

    createImageElement(bigPicture, photoObject);
    createSocialInfoElement(bigPicture, photoObject);
    createCommentsElement(bigPicture, photoObject);
  });
}

function closeBigPicture() {
  document.querySelector("#picture-cancel").addEventListener("click", () => {
    document.querySelector(".big-picture").classList.add("hidden");
    document.querySelector("body").classList.remove("modal-open");
  });

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      document.querySelector(".big-picture").classList.add("hidden");
      document.querySelector("body").classList.remove("modal-open");
    }
  });
}

openBigPicture();
closeBigPicture();
