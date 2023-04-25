function add(n1: number, n2: number) {
    return n1 + n2;
}


// :void means that the function doesn't have a return statement
// :undefined rarely need to use if you want to just type return and return nothing
function printResult(num: number) {
    console.log('Result: ' + num);
}

function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

// * Function types
    // allows us describe which type of function specifically we want to use somewhere
    // function types define the parameters and return type of a function

let combineValues: (a: number, b: number) => number ;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
})