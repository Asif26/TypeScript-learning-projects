type imranType = {
    name: string,
    age: number,
    teaching: boolean,
    dob: Date ,
    certificate: [], 

}

let imran: imranType;
 imran = {
    name: { firstName: "Asif", lastName: "Ali" },
    age: 26,
    teaching: true,
    dob: new Date(),
    certificate: ["Aws", "Docker", "Rust"],
 }
export {}