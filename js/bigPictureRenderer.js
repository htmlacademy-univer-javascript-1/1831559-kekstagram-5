function setChildImageSource(parentElement, photoObject) {
  parentElement.querySelector("img").setAttribute("src", photoObject.url);
}

function fillSocialInfoElement(parentElement, photoObject) {
  parentElement.querySelector(".likes-count").textContent = photoObject.likes;
  parentElement.querySelector(".comments-count").textContent = photoObject.comments.length;
  parentElement.querySelector(".social__caption").textContent = photoObject.description;
}

function fillCommentsElement(parentElement, photoObject) {
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

function showBigPicture(photoObject) {
  const bigPicture = document.querySelector(".big-picture");
  document.querySelector("body").classList.add("modal-open");

  bigPicture.classList.remove("hidden");
  bigPicture.querySelector(".social__comment-count").classList.add("hidden");
  bigPicture.querySelector(".comments-loader").classList.add("hidden");

  setChildImageSource(bigPicture, photoObject);
  fillSocialInfoElement(bigPicture, photoObject);
  fillCommentsElement(bigPicture, photoObject);
}

function hideBigPicture() {
  const bigPicture = document.querySelector(".big-picture");
  bigPicture.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

function handlePictureClick(event, photosData) {
  if (!event.target.classList.contains("picture__img")) {
    return;
  }

  const photoObject = photosData.find(
    (photo) => photo.url === event.target.getAttribute("src")
  );

  if (photoObject) {
    showBigPicture(photoObject);
    addCloseListeners();
  }
}

function addCloseListeners() {
  const pictureCancel = document.querySelector("#picture-cancel");

  const handleCancelClick = () => {
    hideBigPicture();
    removeCloseListeners();
  };

  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      hideBigPicture();
      removeCloseListeners();
    }
  };

  pictureCancel.addEventListener("click", handleCancelClick);
  document.addEventListener("keydown", handleEscKey);

  function removeCloseListeners() {
    pictureCancel.removeEventListener("click", handleCancelClick);
    document.removeEventListener("keydown", handleEscKey);
  }
}

export function initBigPictureFeature(photosData) {
  document.querySelector(".pictures").addEventListener("click", (event) => {
    handlePictureClick(event, photosData);
  });
}

