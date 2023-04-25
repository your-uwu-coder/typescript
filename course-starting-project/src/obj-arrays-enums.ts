// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
const person = {
    name: 'Lynn',
    age: 30,
    hobbies: ['Lifting', 'Baking'],
    role: [2, 'author']
}

//Tuple:
    // person.role.push('admin')
        // * push is an exception which is allowed in tuples 
    //person.role[1] = 10
        // ! ERROR because line 5 [1] is strictly a string
    //person.role = [0, 'admin', 'user'];
        // ! ERROR because we gave line 5 only two types

// Enums:
    // enum Role { ADMIN, READ_ONLY, AUTHOR};
        // const person = {
        //  role: Role.ADMIN
        // }

let favoriteActivities: string[];
// any[] - flexible, but the flexibility comes with a price. A type that means "do whatever you want"
favoriteActivities = ['Reading'];

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // ! console.log(hobby.map()) won't work because typescript detects that hobbies are a type of strings -- .map only iterates through arrays
}