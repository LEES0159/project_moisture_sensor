let ms0 = 0
serial.writeLine("\"ms0 ON\"")
radio.setGroup(1)
radio.setFrequencyBand(7)
radio.setTransmitPower(7)
basic.forever(function () {
    ms0 = pins.analogReadPin(AnalogPin.P0)
    if (ms0 <= 300) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    radio.sendValue("\"ms0\"", pins.analogReadPin(AnalogPin.P0))
    serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    datalogger.log(datalogger.createCV("ms0", [control.eventTimestamp(), pins.analogReadPin(AnalogPin.P0)]))
    basic.pause(5000)
})
basic.forever(function () {
    radio.sendValue("\"ms0\"", pins.analogReadPin(AnalogPin.P0))
    serial.writeString("" + (pins.analogReadPin(AnalogPin.P0)))
    datalogger.log(datalogger.createCV("ms0", [control.eventTimestamp(), pins.analogReadPin(AnalogPin.P0)]))
    basic.pause(5000)
})
