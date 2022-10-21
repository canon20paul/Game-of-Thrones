import { Likes } from './likes.js';

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
  const likesBank = await Likes.likesCollectionApi();

  finalList.forEach(async (actor) => {
    /* eslint-disable */
    const actorLikes = await likesBank.filter((e) => e.item_id == actor.id); 

    const livecount = actorLikes[0].likes;

    characterElement.innerHTML += `  <div class="character" id="character">
      <img src=${actor.imageUrl} alt=${actor.firstName} class="picture" id="picture">
      <div class='div1' id='div1'>
      <button type='button' class='like-btn' id='like-btn' title='${actor.id}'></button>
      <p id="likeTotal${actor.id}" class="likeTotal${actor.id}"> ${livecount}Likes </p>
      </div>
      <p id="Character-names" class="Character-names">${actor.fullName}</p>
      <button type='button' id='${actor.id}'>Comments</button>
      </div>`;
  });
};
export { gameOfThronesAPI, displayCharacters, globalList };
