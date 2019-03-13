function f (password, email, name, lastName) {
	document.addEventListener('submit', (e) => {
		e.preventDefault();
		password = document.querySelector('#password').value;
		email = document.querySelector('#e-mail').value.trim();
		name = document.querySelector('#name').value.trim();
		lastName = document.querySelector('#last-name').value.trim();
		if (password.length < 5) {
			alert('Длина пароля должна быть не менее 5 символов');
		}
		else {
			return true;
		}
	});
}

f();






