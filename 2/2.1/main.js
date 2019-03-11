/* Функция для определения остатка от деления в зависимости от которого подбирается окончание*/

function getNumWord (num, word1, word2, word5) {
	var dd = num % 100;
	switch(dd) {
	case(dd >= 11 && dd <= 19):
		return word5;
		break;
	}

	var d = num % 10;

	switch(d) {
	case(1):
		return word1;
		break;
	case(2):
	case(3):
	case(4):
		return word2;
		break;
	}
	return word5;
}

function test() {
	var apples = +prompt('Сколько у вас яблок?');
	alert('У вас' + ' ' + apples + ' ' + getNumWord(apples, 'яблоко', 'яблока', 'яблок') + '!');
}

test();