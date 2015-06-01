var b = require('bonescript');
var _ = require('lodash');
var wheel = require('./wheel');

var fl1 = "P8_7";
var fl2 = "P8_8";

var fr1 = "P8_9";
var fr2 = "P8_10";

var bl1 = "P8_11";
var bl2 = "P8_12";

var br1 = "P8_13";
var br2 = "P8_14";

_.each([fl1, fl2, fr1, fr2, bl1, bl2, br1, br2], function(pin){
  b.pinMode(pin, 'out');
});

var directionMap = {
  forward: 'FFFF',
  reverse: 'RRRR',
  stop: 'SSSS'
}

var flWheel = wheel.build(fl1, fl2);
var frWheel = wheel.build(fr1, fr2);
var blWheel = wheel.build(bl1, bl2);
var brWheel = wheel.build(br1, br2);

var wheels = [flWheel, frWheel, blWheel, brWheel];

_.each(wheels, function(wheel){
  wheel.stop();
});

console.log(wheels);


exports.execute = function(direction){
  _.each(directionMap[direction].split(''), function(command, index){
    console.log(wheels[index], command);
    if(command == 'F') {
      wheels[index].forward();
    }

    if(command == 'R') {
      wheels[index].reverse();
    }

    if(command == 'S') {
      wheels[index].stop();
    }
  });
}

exports.moveForward = function(pin1, pin2){
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
