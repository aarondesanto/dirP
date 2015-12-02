var mkdirp = require('mkdirp');

var args = process.argv[2];

mkdirp(args, function (err) {
    if (err) console.error(err);
    else console.log('$ ' + args + ' created');
});
