function Timer (startTime, finishTime, mesage) {
	this.startTime = startTime;
	this.finishTime = finishTime;
	this.mesage = mesage;
	this.start = () => {
		this.interval = setInterval(this.update, 1000);
	};
	this.update = () => {
		if (this.startTime > this.finishTime) {
			this.startTime--;
		} else {
			return false;
		}
		area.value = `${this.mesage}  ${this.startTime}`;
	};
}

var areaButton = document.querySelector('.area-button');
var input = document.querySelector('.input');
var area = document.querySelector('.area');
var form = document.querySelector('form');


var heart1 = new Timer(6, 0, 'Измерение начнется через');
var heart2 = new Timer(16, 0, 'Держите руку на пульсе');

function heart () {
	heart1.start();
	setTimeout(heart2.start, heart1.startTime*1000);
	setTimeout(function () {
		area.value = 'Введите в поле выше количество ударов';
	}, (heart2.startTime + heart1.startTime + 1)*1000);
}

areaButton.onclick = heart;
form.addEventListener('submit', (e) => {
	e.preventDefault();
	var result = input.value*4;
	input.value ='';
	area.value = `Ваш пульс составляет ${result} ударов в минуту`;
});