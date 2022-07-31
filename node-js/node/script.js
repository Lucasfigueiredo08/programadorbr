let fs = require('fs')

// fs.writeFile('teste.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// })

// fs.appendFile('teste.txt', ' - Olá World', (err) => {
//     if (err) throw err;
//     console.log('The file has been updated!');
// })

// fs.unlink('teste.txt', (err) => {
//     if (err) throw err;
//     console.log('The file has been deleted!');
// })

// fs.rename('teste.txt', 'Lucas.txt', (err) => {
//     if (err) throw err;
//     console.log('The file has been renamed!');
// })

fs.readFile('Lucas.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})