let userInput: unknown;
let userName: string;
    // you can put anything in unknown (flexible, but strict)
    // ! Don't use unknown all the time
    // :any is more flexible

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    userName = userInput;
}


// * Never type - intends to never return anything
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

generateError('An error occurred!', 500);