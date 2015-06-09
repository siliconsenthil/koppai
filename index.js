var raspi = require('raspi-llio');

var pin16 = new raspi.GPIO(16, raspi.GPIO.OUTPUT);
var pin20 = new raspi.GPIO(20, raspi.GPIO.OUTPUT);
var pin21 = new raspi.GPIO(21, raspi.GPIO.INPUT);

pin16.digitalWrite(raspi.GPIO.HIGH);
pin20.digitalWrite(raspi.GPIO.HIGH);
pin21.digitalWrite(raspi.GPIO.HIGH);
