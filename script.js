let buttonId = document.getElementById('buttonId');
let h1       = document.getElementById('h1');
let count    = 0;

buttonId.addEventListener('click', function() {

	if (count == 0) {
		setTimeout(secTime, 19500);
	};

	count++;
	h1.textContent = 'Count: ' + count;

	if (count === +100) {
		h1.textContent = 'You Win!';
	};
});

function secTime() {
	alert('Game Over!');
	alert('Your count: ' + count);
	count = 0;
	h1.textContent = 'Count: ' + count;
}

