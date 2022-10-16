let ms0 = 0
serial.writeLine("\"ms0 ON\"")
radio.setGroup(1)
radio.setFrequencyBand(7)
radio.setTransmitPower(7)
basic.forever(function () {
    ms0 = pins.analogReadPin(AnalogPin.P0)
    // This is to send readings only if exceed THRESHOLD
    // To remove this and use PAUSE 5000ms to continuously send at regular intervals
    if (ms0 >= 600) {
        radio.sendValue("\"ms0\"", ms0)
        serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    }
})
basic.forever(function () {
    ms0 = pins.analogReadPin(AnalogPin.P0)
    radio.sendValue("\"ms0\"", ms0)
    serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    basic.pause(5000)
})
