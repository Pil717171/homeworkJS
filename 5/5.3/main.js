var users = [
	{
		id: 6,
		name: 'Bill', 
		dob: '1990-05-03'
	},
	{
		id: 9,
		name: 'Yanek', 
		dob: '1990-05-02'
	},
	{
		id: 15,
		name: 'Roman', 
		dob: '1989-05-14'
	},
	{
		id: 5,
		name: 'Ivan', 
		dob: '1975-07-21'
	},
];


function sorted (array, field, param3) {
	function compare(a, b) {
		if (a[field] < b[field])
			return -1;
		if (a[field] > b[field])
			return 1;
		return 0;
	}
	array.sort(compare);
	if(param3 == 'desc') {
		array.reverse();
	}
    
	console.log(array);
}
    
sorted(users, 'dob', 'desc');



    
    
    
    
