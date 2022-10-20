import { globalList } from './homepage.js';

const popCharacter = document.getElementById('commentModal');

const displayCharacter = async (id) => {
  const characterList = await globalList;
  const characterDetail = await characterList[id];
  popCharacter.innerHTML = ' ';
  popCharacter.innerHTML = `  <div class="characterModal">
  <button type='button' id='btnClose'>Close Detail</button>
  <h3>Character Detail</h3>
  <h2 class="Character-namesModal">${characterDetail.fullName}</h2>
      <img src=${characterDetail.imageUrl} alt=${characterDetail.firstName} class="pictureModal">
      <div class='modalDetail'>
       <div class="record"><p class="TTitle">ID:<p class="Ffield">${characterDetail.id}</p></div>
      <div class="record"><p class="TTitle">First Name:</p><p class="Ffield">${characterDetail.firstName}</p></div>
      <div class="record"><p class="TTitle">Last Name:</p><p class="Ffield">${characterDetail.lastName}</p></div>
      <div class="record"><p class="TTitle">Full Name:</p><p class="Ffield">${characterDetail.fullName}</p></div>
      <div class="record"><p class="TTitle">Title:</p><p class="Ffield">${characterDetail.title}</p></div>
      <div class="record"><p class="TTitle">Family:</p><p class="Ffield">${characterDetail.family}</p></div>
      <div class="record"><p class="TTitle">Image Link:</p><p class="Ffield">${characterDetail.imageUrl}</p></div>
          
      </div>`;
};
export { displayCharacter, popCharacter };
