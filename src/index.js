import './index.css';
import { displayCharacters } from './homepage.js';
import { displayCharacter } from './popup.js';
import { Likes } from './likes.js';

window.onload = function () {
  displayCharacters(0, 12);
  document.getElementById('commentModal').hidden = true;
};
/* eslint-disable */
document.getElementById('character-list').addEventListener('click', async (e) => {
  /* eslint-disable */
  if (!isNaN(e.target.id)) {
    displayCharacter(e.target.id);
    window.scrollTo(0, 0);
    document.getElementById('commentModal').hidden = false;
    document.body.style.overflow = 'hidden';
  } else if (e.target.id === 'like-btn') {
    const likeShow = document.getElementById(`likeTotal${e.target.title}`);
    const likesBank = await Likes.likesCollectionApi();
    let num = parseInt(likeShow.innerHTML, 10);
    num += 1;
    likeShow.innerHTML = '';
    likeShow.innerHTML = `${num}Likes`;
    /* eslint-disable */
      const actorLikes = await likesBank.filter((x) => x.item_id == e.target.title)
      await Likes.newLike(e.target.title)
         

  }
   else{return false}
});

document.getElementById('commentModal').addEventListener('click', async(e) => {
   if (e.target.id == 'btnClose') {
  document.getElementById('commentModal').hidden = true;
  document.body.style.overflow = 'auto';
  }else {return false}
});

