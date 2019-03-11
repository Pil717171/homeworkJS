var thing = [
	{
		name: 'БМВ',
		id: 1,
		unit: 'шт.',
		quantity: 4,
		price: 100, 
	},
	{
		name: 'макароны',
		id: 2,
		unit: 'упаковки',
		quantity: 3,
		price: 10, 
	},
	{
		name: 'яйца',
		id: 3,
		unit: 'десяток',
		quantity: 7,
		price: 2, 
	}
];

function price (arr) {
	let array = [];
	let res;
	arr.forEach(function (e) {
		let total = e.price * e.quantity;
		array.push(total);
		res = array.reduce(function (acc, cur) {
			return acc + cur;
		}, 0);
	});
	console.log(res);
} 

price(thing);