import { displayCharacters } from './homepage.js';

let ArrayOfFetchedData;
const mainId = document.getElementById('mainId');
const popCharacter = document.getElementById('commentModal');
const close = () => {
  popCharacter.style.display = 'none';
  mainId.style.display = 'block';
};

const gameOfThronesAPI = async () => {
  const gettingList = 'https://thronesapi.com/api/v2/Characters';
  const response = await fetch(gettingList);
  const fetchedData = await response.json();
  ArrayOfFetchedData = fetchedData;
};
gameOfThronesAPI();
const displayCharacter = (e) => {
  for (let i = 0; i < ArrayOfFetchedData.length; i += 1) {
    if (
      ArrayOfFetchedData[i].fullName ===
      e.target.parentNode.children[2].innerHTML
    ) {
      const characterModal = document.createElement('div');
      characterModal.classList.add('characterModal');
      const closeBtn = document.createElement('button');
      closeBtn.setAttribute('id', 'btnClose');
      closeBtn.innerHTML = 'X';
      closeBtn.addEventListener('click', () => {

        close();
       // displayCharacters();
      });

      characterModal.appendChild(closeBtn);

      const Img = document.createElement('img');
      Img.classList.add('pictureModal');
      Img.src = ArrayOfFetchedData[i].imageUrl;
      characterModal.appendChild(Img);

      const h = document.createElement('h3');
      h.innerHTML = ArrayOfFetchedData[i].fullName;
      characterModal.appendChild(h);

      const modalDetail = document.createElement('div');
      modalDetail.classList.add('modalDetail');

      const id = document.createElement('p');
      id.classList.add('Ffield');
      id.innerHTML = 'ID : ' + ArrayOfFetchedData[i].id;
      modalDetail.appendChild(id);

      const firstName = document.createElement('p');
      firstName.classList.add('Ffield');
      firstName.innerHTML = 'First Name : ' + ArrayOfFetchedData[i].firstName;
      modalDetail.appendChild(firstName);

      const lastName = document.createElement('p');
      lastName.classList.add('Ffield');
      lastName.innerHTML = 'Last Name ' + ArrayOfFetchedData[i].lastName;
      modalDetail.appendChild(lastName);

      const fullName = document.createElement('p');
      fullName.classList.add('Ffield');
      fullName.innerHTML = 'Full Name:' + ArrayOfFetchedData[i].fullName;
      modalDetail.appendChild(fullName);

      const title = document.createElement('p');
      title.classList.add('Ffield');
      title.innerHTML = 'Title : ' + ArrayOfFetchedData[i].title;
      modalDetail.appendChild(title);

      characterModal.appendChild(modalDetail);
      popCharacter.appendChild(characterModal);
    }
  }
};
export { displayCharacter , gameOfThronesAPI } ;
