const sharp = require('sharp');

let path = process.argv[2];
let width = Number(process.argv[3]);

function resize( path, width) {
    sharp(path)
        .resize(width)
        .toFile('./temp/output_resize.jpg', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Resize success');
            }
        })
}

resize(path, width);