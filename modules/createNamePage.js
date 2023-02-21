import { GAME_MOD } from "../constants/gameMode.js";
import { gameMode } from "../script.js";

function createNamePage() {
    const pageDiv = document.createElement('div');
    pageDiv.classList.add('playersInfo')

    const playerInfo = document.createElement('div');
    playerInfo.classList.add('playerInfo');

    if (gameMode === GAME_MOD.bot) {
        playerInfo.appendChild(createPageElements('player1-name'));
    } else {
        playerInfo.appendChild(createPageElements('player1-name'));
        playerInfo.appendChild(createPageElements('player2-name'));
    }
    
    pageDiv.appendChild(playerInfo);

    const playerBtn = document.createElement('button');
    playerBtn.type = 'submit';
    playerBtn.innerHTML = "Submit";
    playerBtn.classList.add('submitNameBtn');
    pageDiv.appendChild(playerBtn);

    document.querySelector('.content').appendChild(pageDiv);
}


function createPageElements(clas) {
    const playerDiv = document.createElement('div');

    const playerH3 = document.createElement('h3');
    playerH3.innerHTML = 'Player enter your name';
    playerDiv.appendChild(playerH3);

    const playerInput = document.createElement('input');
    playerInput.type = 'text';
    playerInput.classList.add(clas)
    playerInput.placeholder = 'Enter your name here';
    playerDiv.appendChild(playerInput);

    return playerDiv
}

export default createNamePage;