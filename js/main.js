const NAMES = [
  "Александр",
  "Александра",
  "Алексей",
  "Алина",
  "Андрей",
  "Анна",
  "Антон",
  "Анастасия",
  "Артем",
  "Виктория",
  "Богдан",
  "Валерия",
  "Борис",
  "Василиса",
  "Василий",
  "Вероника",
  "Виктор",
  "Дарья",
  "Владимир",
  "Евгения",
  "Владислав",
  "Екатерина",
  "Георгий",
  "Елена",
  "Даниил",
  "Ирина",
  "Денис",
  "Ксения",
  "Евгений",
  "Маргарита",
  "Егор",
  "Мария",
  "Иван",
  "Наталья",
  "Игорь",
  "Ольга",
  "Кирилл",
  "Полина",
  "Максим",
  "Светлана",
  "Матвей",
  "Татьяна",
  "Михаил",
  "Юлия",
  "Никита",
  "Яна",
  "Николай",
  "Олеся",
  "Павел",
  "Роман"
];

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getRandomArrayElements(array, elementsCount = 1) {
  const arrayLen = array.length;
  const result = [];
  for (let i = 0; i < elementsCount; i++) {
    const index = getRandomInt(0, arrayLen - 1);
    result.push(array[index]);
  }
  return result;
}

const commentsIdsSet = new Set();

function createComment() {
  let id = getRandomInt(0, 750);
  while (commentsIdsSet.has(id)) {
    id = getRandomInt(0, 750);
  }
  const messageId = id;
  const authorAvatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  const messageText = getRandomArrayElements(MESSAGES, 2).join(" ");
  const authorName = getRandomArrayElements(NAMES);

  return {
    id: messageId,
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
  const photoId = id;
  const photoUrl = `photos/${getRandomInt(1, 25)}.jpg`;
  const photoDescription = `Описание фотографии с id: ${photoId}`;
  const likesQuantity = getRandomInt(15, 200);
  const comments = createComments(30);

  return {
    id: photoId,
    url: photoUrl,
    description: photoDescription,
    likes: likesQuantity,
    comments: comments
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

const PHOTOS = createPhotos(25);
