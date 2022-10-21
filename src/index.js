import './index.css';
import { displayCharacters } from './homepage.js';
import { displayCharacter } from './popup.js';

window.onload = function () {
  displayCharacters(0, 12);
  document.getElementById('commentModal').hidden = true;
};

document.getElementById('character-list').addEventListener('click', (e) => {
  displayCharacter(e.target.id);
  window.scrollTo(0, 0);
  document.getElementById('commentModal').hidden = false;
  document.body.style.overflow = 'hidden';
});

document.getElementById('commentModal').addEventListener('click', () => {
  document.getElementById('commentModal').hidden = true;
  document.body.style.overflow = 'auto';
});
