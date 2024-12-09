import { getRandomInt, getRandomArrayElements } from "./utils.js";
import { names, messages, photoDescriptions } from "./constantsForData.js";

const commentsIdsSet = new Set();

function createComment() {
  let id = getRandomInt(0, 750);
  while (commentsIdsSet.has(id)) {
    id = getRandomInt(0, 750);
  }
  const authorAvatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  const messageText = getRandomArrayElements(messages, 2).join("\n");
  const authorName = getRandomArrayElements(names).join("");

  return {
    id,
    avatar: authorAvatar,
    message: messageText,
    name: authorName
  };
}

function createComments(maxCommentsCount) {
  const commentsCount = getRandomInt(0, maxCommentsCount);
  const result = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = createComment();
    result.push(comment);
  }
  return result;
}

function createPhotoObject(id) {
  const photoUrl = `photos/${id}.jpg`;
  const photoDescription = getRandomArrayElements(photoDescriptions).join("");
  const likesQuantity = getRandomInt(15, 200);
  const comments = createComments(30);

  return {
    id,
    url: photoUrl,
    description: photoDescription,
    likes: likesQuantity,
    comments
  };
}

function createPhotos(quantity) {
  const result = [];
  for (let i = 1; i <= quantity; i++) {
    const photo = createPhotoObject(i);
    result.push(photo);
  }
  return result;
}

export function createMockPhotoData() {
  return createPhotos(25);
}
