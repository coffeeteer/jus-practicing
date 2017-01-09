//import fs from 'fs' //newer version of this 'var fs = require('fs');'
// var fs = require('fs');
// var output = fs.readFileSync('data.text');

var stores = {
	mark:[
		{name: 'waffle iron', price: '80', quantity: '2'},
		{name: 'blender', price: '200', quantity: '1'},
		{name: 'knife', price: '10', quantity: '4'} 
	],
	nick: [
		{name: 'waffle iron', price: '80', quantity: '1'},
		{name: 'knife', price: '10', quantity: '2'},
		{name: 'pot', price: '20', quantity: '3'}
	]
};
//console.log(stores.mark[0].name);// check to see if object works

//console.log(stores.toString().split('\n'));

var makeJson = JSON.stringify(stores)
	.split('\t')
	.reduce((customers, line) => {
		console.log('hello', line)
		customers[line[0]] = customers[line[0]] || []
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers;
	}, {});
//console.log(stores);
console.log(JSON.stringify(makeJson, null, 2));

