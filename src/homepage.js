const gameOfThronesAPI = async () => {
    const gettingList = await fetch('https://thronesapi.com/api/v2/Characters');
    const convertList = await gettingList.json();
    
    return convertList
};
const characterElement = document.getElementById('character-list');
const globalList =  gameOfThronesAPI();
const displayCharacters = async (start, range) => {
   
    const characterList = await globalList
    const finalList = await characterList.slice(start,range)

finalList.forEach((actor) => {
    characterElement.innerHTML += `  <div class="character">
    <p class="Character-id">${actor.id}</p>
    <p class="Character-names">${actor.fullName}</p>
    <img src=${actor.imageUrl} alt=${actor.firstName} class="picture">

    </div>`
})

}

export { gameOfThronesAPI ,displayCharacters, globalList };