let obj = {
    name:"Udai",
    add: {
        country:"India",
        state:{ 
            code:"DL",
            pin:"111111"
        }
    }
}

let{name} = obj;

var{add:{country}} = obj;
var{add:{country : abcd}} = obj;

console.log(country);
console.log(abcd);

var{add:{state:{code}}} = obj;
let{add:{state:{code:cd}}} = obj

console.log(code);
console.log(cd);

