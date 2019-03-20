function f () {
	let rand = Math.round(100*Math.random());
	let remaid = rand%2;
	try { if (remaid) {
		console.log(`${rand} нечетное число`); 
	} else {
		throw 'Ошибка - четное число';
	}

	} catch (error) {
		console.log(`${rand} ${error} `);
	}
}

let idInterval = setInterval(f, 1000);

setTimeout(function() {
	clearInterval(idInterval);
}, 20000);
    
