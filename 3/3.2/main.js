// var button = document.querySelector('button');
// button.onclick = profile;

var name, surname, lastname, age, old, day, sex, pen;
/* ф-я получения имени. При введенной пустой строке снова вызывает себя*/
function getName () {
	name = prompt('Введите Ваше имя');
	if (name == '' || name == null) {
		// getName();
		return null;
	}
	else {
		// getSurname();
		return name;
	}
}
/* ф-я получения отчества. При введенной пустой строке снова вызывает себя*/
function getSurname () {
	surname = prompt('Введите Ваше отчество');
	if (surname == '' || name == null) {
		// getSurname();
		return null;
	}
	else {
		// getLastname();
		return surname;
	}
}
/* ф-я получения фамилии. При введенной пустой строке снова вызывает себя*/
function getLastname () {
	lastname = prompt('Введите Вашу фамилию');
	if (lastname == '' || name == null) {
		// getLastname();
		return null;
	}
	else {
		// getAge();
		return lastname;
	}
}
/* ф-я получения количества лет.С помощью регулярного выражения проверяет введены ли цифры в поле. Если в поле имеются буквы либо возраст
нереальный снова вызывает себя. В противном случае вызывает следующую ф-ю*/
function getAge () {
	age = prompt('Сколько Вам лет?');
	if (age.replace (/\d/g, '').length || parseInt(age) > 130 || parseInt(age) < 0 || age == '') {
		// getAge();
		return null;
	}
	else {
		// getOldDay(age);
		return age;
	}
}
/* ф-я подсчета граф: кол-во лет через 5 лет и возраст в днях*/
function getOldDay (arg) {
	arg = parseInt(arg);
	old = arg + 5;
	day = arg*365;
	return {old : old, day : day};
	// getSex();
}
/* ф-я определения пола опрашиваемого. При утвердитнльном ответе переход в функию подсчета для мужчин, в противном случае - для женщин*/
function getSex () {
	sex = confirm('Вы мужчина?');
	if (!sex) {
		sex = 'женский';
		// getPenWoman();
		

	}
	else {
		sex = 'мужской';
		// getPenMan();
	}
	return sex;
}
/* ф-я подсчета пенсионного возраста мужчин*/
function getPenMan () {
	if (age > 68) {
		pen = 'да';
	}
	else {
		pen = 'нет';
	}
	return pen;
}
/* ф-я подсчета пенсионного возраста женщин*/
function getPenWoman () {
	if (age > 63) {
		pen = 'да';
	}
	else {
		pen = 'нет';
	}
	return pen;
}
/* ф-я вывода полученных данных*/
function prof () {
	getName();
	alert('Ваши ФИО:' + ' ' + lastname + ' '  + name + ' ' + surname +'\n' + 'Ваш возраст в годах:' + ' ' + age + '\n'
        + 'Ваш возраст в днях:' + ' ' + day + '\n' + 'Через 5 лет Вам будет:' + ' ' + old + '\n' + 'Ваш пол:' + ' '
        + sex + '\n' + 'Вы на пенсии:' + ' ' + pen);
}
	
