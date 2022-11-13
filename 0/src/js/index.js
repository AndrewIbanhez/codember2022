const {readFileSync, promises: fsPromises} = require('fs');

const input = readFileSync("users.txt", "utf-8");

const users = input.split("\n\r\n");

console.log(users.length);

let nusrcorr = 0; 
let nusrinc = 0;
let lusrcorr;

users.forEach(e => {
    let ndobdot = e.split(":").length - 1;
    if (ndobdot >= 6) 
    {
        nusrcorr++;
        lusrcorr = e;
    }
    else
        nusrinc++;
});
console.log("Correctos: " + nusrcorr + "\nIncorrectos: " + nusrinc + "\nLastUsr: " + lusrcorr);

