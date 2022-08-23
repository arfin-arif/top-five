const cartArray = [];
function displayName(element) {
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';
    for (let i = 0; i < element.length; i++) {
        const name = cartArray[i];
        const li = document.createElement('li')
        li.innerText = name;
        playerList.appendChild(li);
    }
}



function addToCart(playerDetails) {
    const playerName = playerDetails.parentNode.children[0].innerText;

    if (cartArray.length < 5) {
        cartArray.push(playerName);
        playerDetails.style.backgroundColor = 'gray';
        playerDetails.disabled = true;
    }
    else {
        alert(' You added Maximum Number of Player')
    }

    displayName(cartArray);

}