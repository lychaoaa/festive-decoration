basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 100) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(500)
    } else if (input.lightLevel() > 100 && input.lightLevel() < 129) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # . . . #
            . . . . .
            . . # . .
            `)
    } else {
        basic.clearScreen()
        basic.pause(100)
        basic.showNumber(0)
        basic.pause(100)
    }
})
