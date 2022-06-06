let obj = {
    name: "Udai",
    add : {
        country: "India",
        state : {
            code : "DL",
            pin : "111111"
        }
    }
}

// let obj2 = obj;//Full shallow copy as any change in object two will rest in change in both of them
// obj2.name = "abcd",

// let obj2 = {...obj} // Partial SHALLOW COPY as here other sub object property will also change
// obj2.name = "abcd",

// let obj2 = {...obj,add:{...obj.add}}
// obj2.add.country = "abcd"

// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}}  //DEEP COPY

// obj2.add.state.code  = 10

// console.log(obj);
// console.log(obj2);

let obj2 = JSON.parse(JSON.stringify(obj));//converting the object to a string json then after coverting that string to a new object .

obj2.add.state.code  = 10;
console.log(obj);
console.log(obj2);

