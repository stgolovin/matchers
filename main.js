function sortArr(characters) {
  characters.sort((a, b) => b.health - a.health);
  return characters;
}
export default sortArr;
