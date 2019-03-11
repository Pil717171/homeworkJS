let form = document.querySelector('form');
let input = document.querySelector('input');
form.addEventListener('submit', function (event) {
	event.preventDefault();
	let date = input.value;
	let dt = date.split('-');
	let month = dt[1];
	let day = dt[2];
	let yearNow = (new Date ().getFullYear());
	let dr = new Date(yearNow, month - 1, day);
	if (+dr < Date.now()) {
		dr = new Date(yearNow + 1, month - 1, day);
		let days = Math.ceil(((+dr) - (Date.now()))/1000/60/60/24);
		console.log(days);
	}
	else {
		days = Math.ceil(((+dr) - (Date.now()))/1000/60/60/24);
		console.log(days);
	}
});  