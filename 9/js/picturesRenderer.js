function createPictureElement(photo, template) {
  const pictureElement = template.cloneNode(true);

  const image = pictureElement.querySelector(".picture__img");
  image.setAttribute("src", photo.url);
  image.setAttribute("alt", photo.description);

  pictureElement.querySelector(".picture__likes").textContent = photo.likes;
  pictureElement.querySelector(".picture__comments").textContent = photo.comments.length;

  return pictureElement;
}

function renderPhotos(photos, container, template) {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo, template);
    fragment.appendChild(pictureElement);
  });

  container.appendChild(fragment);
}

export function initPhotoGallery(photosData) {
  const picturesContainer = document.querySelector(".pictures");
  const pictureTemplate = document.querySelector("#picture").content.querySelector(".picture");

  renderPhotos(photosData, picturesContainer, pictureTemplate);
}
