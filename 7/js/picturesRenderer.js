import { createMockPhotoData } from "./createData.js";

const picturesContainer = document.querySelector(".pictures");
const fragment = document.createDocumentFragment();

const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");

const photosData = createMockPhotoData();
photosData.forEach((photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const image = pictureElement.querySelector(".picture__img");
  image.setAttribute("src", photo.url);
  image.setAttribute("alt", photo.description);

  pictureElement.querySelector(".picture__likes").textContent = photo.likes;

  pictureElement.querySelector(".picture__comments").textContent = photo.comments.length;

  fragment.appendChild(pictureElement);
});

picturesContainer.appendChild(fragment);

