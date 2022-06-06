let obj = {

    namee : "Siddhant",
    state : "Bhopal",
    country : "India"

}

var name = obj.name;
var state = obj["state"];

var { namee , state , country } = obj ;// Here the key name must match the variable name

var { namee , state , country , extra } = obj ;
console.log( namee , state , country , extra );

var { namee , state , country , extra="default value" } = obj ;

console.log( namee , state , country , extra );

var { namee : firstName , state , country } = obj ;// changing the key name from name to firstName

console.log( firstName , state , country );

