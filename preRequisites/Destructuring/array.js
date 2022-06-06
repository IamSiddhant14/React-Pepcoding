let arr = ["hi" , "i" , "am" , "Siddhant"]

//Aam zindagi :
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];

console.log( a , d );

//Mentos zindagi ( Object destructuring)// An convient way of accessing elements of an array

let [e , f , g , h] = arr;
console.log( e , f , g , h );

//To skip values just leave an empty space  :
var [i , j , , k] = arr;
console.log(i , j , k );

var [i , j , k , l , extra ] = arr;
console.log( i , j , k , l , extra);

var [i , j , k , l , extra = "Hlo" ] = arr;
console.log( i , j , k , l , extra);

