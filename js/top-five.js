const cartArray = [];
// cartArray.length = 5;
function displayName(element) {
    const playerList = document.getElementById('player-list');

    for (let i = 0; i < element.length; i++) {
        console.log(cartArray[i]);
        const name = cartArray[i];
        const li = document.createElement('li')
        li.innerText = 'Arfin'
        playerList.appendChild(li);
    }
}

function addToCart(playerDetails) {
    // console.log(playerDetails.parentNode.children[0].innerText);
    const playerName = playerDetails.parentNode.children[0].innerText;
    // console.log(playerName);
    const playerObject = {
        playerName: playerName
    }
    // console.log(playerObject)
    cartArray.push(playerObject)
    // console.log(cartArray);
    displayName(cartArray);
}