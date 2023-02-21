import turnAlerter from "./turnAlerter.js";
import getName from "./getName.js";
import { player1, player2 } from "../data/playerInfo.js";
import createNamePage from "./createNamePage.js";


function setNames() {
    player1.activePlayer = true;
    turnAlerter();
}

function activeGameSection() {
    createNamePage();
    document.querySelector('.main__gameMode').style.display = 'none';
    document.querySelector('main').classList.add('active');

    document.querySelector('.submitNameBtn').addEventListener('click', () => {
        getName();
        if (player1.name === "" || player2.name === "") {
            alert('Fill all fields')
        } else if (player1.name === player2.name && (player1.name !== "" || player2.name !== "")) {
            alert('Names cannot be similar');
        } else {
            document.querySelector('.main__gameSection').classList.add('active');
            document.querySelector('.main__countriesDetails').classList.add('active');
            document.querySelector('.playersInfo').style.display = 'none';
            setNames();
        }
    })
}


export {activeGameSection, setNames}