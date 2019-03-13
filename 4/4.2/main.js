function vowels (str) {
	let finalArr = [];
	str = prompt('Введите строку');
	let arr = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	str.split('').forEach((e) => {
		arr.forEach((el) => {
			if (e == el) {
				finalArr.push(e);
			}
		});
	});
	console.log(finalArr.length);
}

// document.querySelector('button').onclick = vowels;