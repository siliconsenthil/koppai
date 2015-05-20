var b = require('bonescript');
var outputPin1 = "P8_13";
var outputPin2 = "P8_7";
var on = 0;
var off = 1;

b.pinMode(outputPin1, 'out');
b.pinMode(outputPin2, 'out');
b.digitalWrite(outputPin1, off);
b.digitalWrite(outputPin2, off);

exports.moveForward = function(){
  b.digitalWrite(outputPin1, on);
  setInterval(function(){
    b.digitalWrite(outputPin1, off);
  }, 2000);
}

exports.moveBackward = function(){
  b.digitalWrite(outputPin2, on);
  setInterval(function(){
    b.digitalWrite(outputPin2, off);
  }, 2000);
}
