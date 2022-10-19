import _ from 'lodash';
import './index.css';
import { gameOfThronesAPI, displayCharacters } from './homepage.js'
//const CharactersList = gameOfThronesAPI();
window.onload =displayCharacters(0,10);