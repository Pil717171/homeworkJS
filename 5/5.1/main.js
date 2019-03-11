function timer () {
	let today = new Date();
	let tomorrow = new Date();
	tomorrow.setDate(today.getDate()+1);
	tomorrow.setHours(0, 0, 0, 0);
	var time = Math.round((+tomorrow - +today)/1000);
	document.querySelector('.time').textContent = time;
}

setInterval(timer, 1000);
