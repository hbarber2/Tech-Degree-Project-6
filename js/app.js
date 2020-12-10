const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.getElementById('list');
let missed = 0;
const startGame = document.querySelector('.btn__reset');
const button = document.getElementsByTagName('button');
const heart = document.querySelectorAll('.tries img');
const overlay = document.getElementById('overlay');

startGame.addEventListener('click', () => {
	overlay.style.display = 'none';
});

let phrases = [
	'Happy Birthday',
	'Merry Christmas',
	'Happy Fourth of July',
	'Cheers to the New Year',
	'Have a good Arbor Day'
];

function getRandomPhraseAsArray(arr) {
	let string = phrases[Math.floor(Math.random() * phrases.length)];
		let newString = string.split('');
		return newString;
	};


let randomPhraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
	for (let i = 0; i < arr.length; i++) {
		let li = document.createElement('li');
		li.textContent = arr[i];
		ul.appendChild(li);
		if(arr[i] !== ' ') {
			 li.className = 'letter';
		}
	}
};

let addToDisplay = addPhraseToDisplay(randomPhraseArray);


function checkLetter(btn) {
	let li = document.querySelectorAll(".letter");
	let match = null;
	for(let i = 0; i < li.length; i++) {
		if(li[i].textContent.toLowerCase() === btn.textContent) {
			li[i].classList.add('show');
			match = li[i].textContent;
		}
	}
	return match;
};

qwerty.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON'){
			e.target.className = 'chosen';
		} else if (e.target) {
			alert('Please click a button.')
		}
	let btnCheck = checkLetter(e.target);
	if (btnCheck === null) {
		missed += 1;
		heart[missed - 1].src = "images/lostHeart.png";
		}
	checkWin();
});



function checkWin() {
	let letters = document.querySelectorAll('.letter');
	let show = document.getElementsByClassName('show');
		if (letters.length === show.length) {
			overlay.className = 'win';
			overlay.style.display = 'flex';
			document.querySelector('h2').textContent = 'You won!';
		}else if (missed > 4) {
			overlay.className = 'lose';
			overlay.style.display = 'flex';
			document.querySelector('h2').textContent = 'You lost :(';
	}
	

};

