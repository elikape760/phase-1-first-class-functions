function A() {
    console.log("spy");
}

function receivesAFunction(spy) {
    return spy();
}
receivesAFunction(say);

function returnsANamedFunction() {
    function alert() {
        console.log("Complete")
    }
    return alert;
}

function returnsAnAnonymousFunction() {
   let a = function() {
        console.log("Complete");
    }
    console.log(a);
    return a => "";
    
}



// const returnsAnAnonymousFunction = {
//     name: "Annonymous Function",
//     invoke(){
//         return "You called me";
//     }
// };
// console.log(returnsAnAnonymousFunction.invoke());
