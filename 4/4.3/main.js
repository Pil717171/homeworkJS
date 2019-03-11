

document.addEventListener('submit', (e) => {
	e.preventDefault();
	let password = document.querySelector('#password').value;
	let email = document.querySelector('#e-mail').value.trim();
	let name = document.querySelector('#name').value.trim();
	let lastName = document.querySelector('#last-name').value.trim();
	console.log(password);
	if (password.length < 5) {
		alert('Длина пароля должна быть не менее 5 символов');
	}
	else {
		return true;
	}
    
});





