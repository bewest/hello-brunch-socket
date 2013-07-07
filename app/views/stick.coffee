App = require 'app'

console.log('this is stick')

# client = require('client')
shoe = require('shoe')
es = require('event-stream')

pump_sock = shoe('/pump')
data = [ 0x06 ]

pump_sock.write( data , ( ) ->
  console.log('wrote', this, arguments...)
)

#pump_sock.read(function( ) {
#  console.log('read', this, arguments)
#})

s = es.mapSync( (msg) ->
  result = document.getElementById('result')
  console.log('this is stick')
  console.log(msg, this, arguments...)
  result.appendChild(document.createTextNode(msg))
  # return String(Number(msg)^1)
  return 0x03
)
s.pipe(pump_sock).pipe(s)

( ( ) ->
console.log( "noop")

)


module.exports = App.StickView = Em.View.extend(
  templateName: 'stick'
)
