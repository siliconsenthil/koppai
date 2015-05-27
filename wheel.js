var b = require('bonescript');
var on = 1;
var off = 0;

function move(pin1, pin2){
  console.log('move', pin1, pin2);
  b.digitalWrite(pin1, off);
  b.digitalWrite(pin2, on);
}

function stop(pin1, pin2){
  console.log('stop', pin1, pin2);
  b.digitalWrite(pin1, off);
  b.digitalWrite(pin2, off);
}

exports.build = function(pin1, pin2){
  return {
    forward: function(){
      move(pin1, pin2);
    },
    reverse: function(){
      move(pin2, pin1);
    },
    stop: function(){
      stop(pin1, pin2);
    }
  };
}
