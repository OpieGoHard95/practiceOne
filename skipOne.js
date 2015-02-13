// Coded by Jared Smith
// Practice problem to print out every other number from an array
// 2/13/15

var numbers = [];
var numberSkip = [];
for (var count = 0; count <= 10; count = count + 1) {
	numbers.push(count);
	if (count % 2 == 0)
	 numberSkip.push(count);
	
}


console.log(numbers);
console.log(numberSkip);

