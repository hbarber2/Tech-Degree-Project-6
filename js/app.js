const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const buttons = document.querySelectorAll('button');

startGame.addEventListener('click', () => {
	const overlay = document.getElementById('overlay');
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


const randomPhraseArray = getRandomPhraseAsArray(phrases);

function addPhraseToDisplay(arr) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] !== ' ') {
			 arr[i].className = 'letter';
			 }
		const li = document.createElement('li');
		phrase.appendChild(li);
		li.textContent = arr[i];
	}
};

const addToDisplay = addPhraseToDisplay(randomPhraseArray);


function checkLetter(btn) {
	let li = document.querySelectorAll('.letter');
	const match = [];
	for(let i = 0; i < li.length; i++) {
		if(li[i] === btn) {
			li.className = 'show';
			match.push(li[i]);
		}else {
			console.log('null');
		}
	}
	return match;
};


