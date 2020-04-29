function isPrime(number) {

	if(isNaN(parseInt(number))) {
		return `Not a number`;
	}

	if(number <= 1) {
		return `Not in Prime number Range`
	}

	if(number === 2 || number === 3
    || (!Number.isInteger(number / 2) && !Number.isInteger(number / 3))) {
		return `${number} is a Prime`;
	} else{
      return `${number} is not a Prime`;
    }
}

console.clear();
console.log(isPrime());
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(121));
console.log(isPrime(131));
console.log(isPrime(97));
console.log(isPrime(111));
console.log(isPrime(17));
console.log(isPrime(10000000000000));