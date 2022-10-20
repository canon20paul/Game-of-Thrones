const gameOfThronesAPI = async () => {
  const gettingList = await fetch('https://thronesapi.com/api/v2/Characters');
  const convertList = await gettingList.json();
  return convertList;
};
const characterElement = document.getElementById('character-list');
const globalList = gameOfThronesAPI();
const displayCharacters = async (start, range) => {
  const characterList = await globalList;
  const finalList = await characterList.slice(start, range);

  finalList.forEach((actor) => {
    characterElement.innerHTML += `  <div class="character">
      <img src=${actor.imageUrl} alt=${actor.firstName} class="picture">
      <div class='div1'>
      <button type='button' class='like-btn'></button>
      <p> 0 likes </p>
      </div>
      <p class="Character-names">${actor.fullName}</p>
      <button type='button' id='${actor.id}'>Comments</button>
      </div>`;
  });
};

export { gameOfThronesAPI, displayCharacters, globalList };
