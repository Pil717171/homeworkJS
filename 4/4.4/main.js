function cenz (string, stopWord) {
	let word = string.split(', ');
	stopWord.forEach((e) => {
		for (let i = 0; i < word.length; i++) {
			if (e === word[i]) {
				word.splice(i, 1);
			}
		}
	});
	console.log(word.join(', '));
}

cenz ('нос, шея, нога, рука, голова, нос', ['голова', 'нос', 'рука']);