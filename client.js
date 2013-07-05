var shoe = require('shoe');
var es = require('event-stream');


var pump_sock = shoe('/pump');
var data = [ 0x06 ];

pump_sock.write( data , function( ) {
  console.log('wrote', this, arguments);
});

pump_sock.read(function( ) {
  console.log('read', this, arguments);
});

var s = es.mapSync(function (msg) {
    var result = document.getElementById('result');
    console.log(msg, this, arguments);
    result.appendChild(document.createTextNode(msg));
    // return String(Number(msg)^1);
    return 0x03;
});
s.pipe(pump_sock).pipe(s);

( function ( ) {
console.log( "noop");

});

