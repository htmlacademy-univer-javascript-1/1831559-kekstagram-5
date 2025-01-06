export function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

export function getRandomArrayElements(array, elementsCount = 1) {
  const arrayLen = array.length;
  const result = [];
  for (let i = 0; i < elementsCount; i++) {
    const index = getRandomInt(0, arrayLen - 1);
    result.push(array[index]);
  }
  return result;
}
