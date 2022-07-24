const createPhoneNumber = (numbers: number[]) => numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');


// Test cases
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
