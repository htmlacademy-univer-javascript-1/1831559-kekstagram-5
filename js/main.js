const names = [
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

const messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const photoDescriptions = [
  "Удивительная красота",
  "Вдохновляющая композиция",
  "Искренняя эмоция",
  "Чудесный момент",
  "Глубокое впечатление",
  "Идеальный свет",
  "Теплая атмосфера",
  "Великолепный пейзаж",
  "Сказочная нежность",
  "Приятная гармония",
  "Завораживающая перспектива",
  "Живая деталь",
  "Невероятная природа",
  "Трогательная искренность",
  "Радостная энергия",
  "Искусный баланс",
  "Волшебное мгновение",
  "Чистое вдохновение",
  "Яркие эмоции",
  "Потрясающая игра",
  "Летнее тепло",
  "Ласковая улыбка",
  "Прекрасный закат",
  "Душевная глубина",
  "Нежное прикосновение",
  "Пленяющий взгляд",
  "Эстетическая гармония",
  "Энергия жизни",
  "Чистая радость",
  "Бесконечное спокойствие"
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
  const authorAvatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  const messageText = getRandomArrayElements(messages, 2).join(" ");
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
  const photoUrl = `photos/${getRandomInt(1, 25)}.jpg`;
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

const photos = createPhotos(25);
