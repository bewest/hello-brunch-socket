// window.shoe = 
var shoe = require('shoe');
var es = require('event-stream');
window.require.register('shoe', function( ) {
  return shoe;
});
// window.es   = require('event-stream');
window.require.register('event-stream', function( ) {
  return es;
});




