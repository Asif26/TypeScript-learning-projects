"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book = Math.random() > 0.5
    ? { name: "The Prince", origin: "Italy", pages: 5 }
    : { name: "The Secret of the Self", origin: "Pakistan", words: 500 };
console.log(book.words);
