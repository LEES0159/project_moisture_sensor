let ms0 = 0
basic.forever(function () {
    ms0 = pins.analogReadPin(AnalogPin.P0)
    datalogger.log(datalogger.createCV("ms0", ms0))
    if (ms0 <= 300) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(5000)
})
