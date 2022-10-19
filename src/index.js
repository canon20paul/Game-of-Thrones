import './index.css';
import { displayCharacters } from './homepage.js';
// const CharactersList = gameOfThronesAPI();
window.onload = displayCharacters(0, 10);