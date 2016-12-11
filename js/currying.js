var dragon = (name, size, element) => name + ' - ' + size + ' - ' + element ;

console.log(dragon("a","b","c"));

var testCurring = name =>
					size =>
						element =>
							name + '-' +
							size + '-' +
							element;
console.log(testCurring('aaaa')('bbbb')('cccc'));