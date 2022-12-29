//example for type explisitly  
//is type ko jo bhi obj follow krega usmy yeh sb hona chahye
type imranType = {
    name: { firstName: string, lastName: string }
    age: number,
    teaching: boolean,
    dob: Date,
    certifications: string[],
}

let imran: imranType;
imran = {
    name: { firstName: "Ariba", lastName: "Memon" },
    age: 21,
    teaching: true,
    dob: new Date(),
    certifications: ["Mern Stack", "Docker"],
}

// imran = "Alexander" //not run in this ts typechecker ki wja sy not allow
export { }