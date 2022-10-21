import { displayCharacter } from './popup.js';

const gameOfThronesAPI = async () => {
  const gettingList = await fetch('https://thronesapi.com/api/v2/Characters');
  const convertList = await gettingList.json();
  return convertList;
};
const mainId = document.getElementById('mainId');
const popSection = document.getElementById('commentModal');
const open = () => {
  popSection.style.display = 'flex';
  mainId.style.display = 'none';
};

const characterElement = document.getElementById('character-list');
const globalList = gameOfThronesAPI();
const displayCharacters = async (start, range) => {
  const characterList = await globalList;
  const finalList = await characterList.slice(start, range);

  finalList.forEach((actor) => {
    const character = document.createElement('div');
    character.classList.add('character');
    const Img = document.createElement('img');
    Img.src = actor.imageUrl;
    Img.classList.add('picture');
    character.appendChild(Img);
    const div1 = document.createElement('div1');
    div1.classList.add('div1');
    const btn = document.createElement('button');
    btn.classList.add('like-btn');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = '0 likes';
    div1.appendChild(btn);
    div1.appendChild(paragraph);
    character.appendChild(div1);
    const p = document.createElement('p');
    p.classList.add('Character-names');
    p.innerHTML = actor.fullName;
    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('id', 'comment-btn');
    commentBtn.setAttribute('class', 'comments');
    commentBtn.innerHTML = 'Comments';
    character.appendChild(p);
    character.appendChild(commentBtn);
    characterElement.appendChild(character);
    commentBtn.addEventListener('click', (e) => {
      open();
      displayCharacter(e);
    });
  });
};

export { gameOfThronesAPI, displayCharacters, globalList };
