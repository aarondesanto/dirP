var mkdirp = require('mkdirp');

var args = process.argv;

mkdirp(args[2], function (err) {
    if (err) console.error(err);
    else console.log('$ ' + args[2] + ' created');
});
