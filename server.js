var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/public');
var net = require('net');
var shoe = require('shoe');

var server = http.createServer(ecstatic);
server.listen(9999);

console.log('using port 9999');

var sock = shoe(function (stream) {
    // var pump = net.connect('bewest.io', 8080);
    var pump = net.connect({ 'host': 'bewest.io', 'port': 8080 });
    // var pump = net.connect({ 'host': 'localhost', 'port': 8923 });
    pump.on('error', function( ) {
      console.log('error');
      console.log('uhm...', this, arguments);
    });
    pump.on('end', function( ) {
      stream.end( );
    });
    stream.on('end', function ( ) {
      pump.end( );
    });
    pump.on('connect', function() {
      console.log('connect', this, arguments, pump);
      stream.pipe(pump).pipe(stream);

    });
    /*
    var iv = setInterval(function () {

        stream.write(Math.floor(Math.random() * 2));
    }, 250);
    
    stream.on('end', function () {
        clearInterval(iv);
    });
    */
    
    // stream.pipe(process.stdout, { end : false });
});
sock.install(server, '/pump');
