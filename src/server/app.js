/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 7203;

var routes;

var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());
// app.use(errorHandler.init);

routes = require('./routes/index')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.use(express.static('./src/client/app/'));
app.use(express.static('./'));
app.use(express.static('./tmp'));
app.use('/*', express.static('./src/client/app/index.html'));


app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('\n__dirname = ' + __dirname +
        '\nprocess.cwd = ' + process.cwd());
});
