let switch01 = 0
let switch02 = 0
basic.forever(function () {
    switch01 = pins.digitalReadPin(DigitalPin.P0)
    switch02 = pins.digitalReadPin(DigitalPin.P1)
    serial.writeValue("sw01", switch01)
    serial.writeValue("sw02", switch02)
    if (switch01 == 1 && switch02 == 0) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (switch01 == 0 && switch02 == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (switch01 == 1 && switch02 == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
