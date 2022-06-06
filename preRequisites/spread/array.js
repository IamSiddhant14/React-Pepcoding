let arr1 = [ 1, 2, 3, 4];
let arr2 = arr1 ;

arr2.push(5);

console.log(arr1);
console.log(arr2);


//Here since all the changes where directly done in the same heap memory hence the change will refelect in both of them

//  so as to fix this we will be using spread operator which is done using putting "..." in front of our array now instead of being an array it will now became a list( array -> list -> creating a new list with diffrent refrence)

// Like :

let a = [1 , 2 , 3];
let b = [ 1, 2];

console.log(a);
console.log(...b);

let c = [...a]; //converting the elements of array "a" in a list then after that storing that elements in a totaly new array 

c.push(5); // Now this change will only be there in array c unlike the previous case

console.log(a);
console.log(c);

