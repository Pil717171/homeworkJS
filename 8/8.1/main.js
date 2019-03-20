function Timer (startTime, finishTime) {
	this.startTime = startTime;
	this.finishTime = finishTime;
	this.start = () => {
		this.interval = setInterval(this.update, 1000);
	};
	this.update = () => {
		if (startTime > finishTime) {
			--startTime;
		} else {
			return false;
		}
		timeField.innerHTML = startTime;
	};
	this.pause = () => {
		clearInterval(this.interval);
	};
	this.reset = () => {
		startTime = this.startTime;
		timeField.innerHTML = startTime;
	};
}

var startBut = document.querySelector('.start');
var pauseBut = document.querySelector('.pause');
var resetBut = document.querySelector('.reset');
var timeField = document.querySelector('span');

var timer = new Timer (5, 0);
startBut.onclick = timer.start;
pauseBut.onclick = timer.pause;
resetBut.onclick = timer.reset;




