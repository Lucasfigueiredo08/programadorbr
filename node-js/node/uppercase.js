let fs = require('fs');

let args = process.argv.slice(2);

let fileName = args[0];
let fileContent = args[1];

fs.readFile('Lucas.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    
    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})