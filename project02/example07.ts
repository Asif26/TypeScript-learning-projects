type Book = {
    author: {
        firstName: string;
        lastname: string;
    };
    name:string;
    pages?:number;

};

const book: Book = {
    author: {
        firstName:"Niccolo",
        lastname: "Machiavelli",
    },
    name:"The Prince",
    pages:10,
}