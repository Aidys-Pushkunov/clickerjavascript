'use strict'

let buttonId = document.getElementById('button');
let h1       = document.getElementById('h1');
let count    = 0;


buttonId.addEventListener('click', function() {

	if (count == 0) {
		setTimeout(gameOver, 10000);
	};

	count++;

	if(count == 10) h1.textContent = 'Exelent!';
	else if(count == 50) h1.textContent = 'Good';
	else if(count == 100) {
		h1.textContent = 'You win'
		alert('You win!');
	}
	else h1.textContent = 'Count: ' + count;
});

function gameOver() {
	alert('Game Over!');
	alert('Your Count: ' + count);
	count = 0;
	h1.textContent = 'Count: ' + count;
};

