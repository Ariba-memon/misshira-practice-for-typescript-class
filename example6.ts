// type Alexandar = { age: number; name: string };

// let alexandar: Alexandar = { age: 21, name: "Ariba" };

// let alexandar2:Alexandar={
//     age: 21, name: "Ariba",
//     location:"USA",
// }
//this show error because location is not given in alexandar

//nested obj types

// type Author = {
//     firstName: string,
//     lastName: string
// }
// type Book =
//     {
//         author: Author;
//         name: string;
//         pages?: number
//     };



// const book: Book = {
//     author: {
//         firstName: "Niccolo",
//         lastName: "Machiavelli",
//     },
//     name: "The Price",
//     pages: 10
// }

//? is for additional property jo ky required nh h

//union of type

//ik waqt m ik hi type select hoge

//ts yeh khud sy karrha h
// const book = Math.random() > 0.5
//     ? { name: "The Prince", origin: "Italy", pages: 5 }
//     : { name: "The Secrets of the cell", origin: "Pakistan", words: 500 }
// book.pages
// export { }

// function handleData(age: any): any {
//     if (age !== undefined) {
//         let message = `you are ${age} old version ab baz ajao insan ban jao`;
//         return message

//     }
//     return false
// }
// handleData("undefined")
