function walking_sign2 () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    if (songs < 1) {
        music.stopAllSounds()
    } else {
        countdown = 15
        for (let index = 0; index < 15; index++) {
            countdown += -1
            music.playTone(262, music.beat(BeatFraction.Half))
            basic.showNumber(countdown)
        }
    }
    basic.clearScreen()
}
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
input.onButtonPressed(Button.A, function () {
    walking_sign()
})
function walking_sign () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(3, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showIcon(IconNames.StickFigure)
    for (let countdown = 0; countdown <= 15; countdown++) {
        basic.showNumber(15 - countdown)
    }
}
input.onButtonPressed(Button.B, function () {
    songs = 1
    walking_sign2()
})
function yellow () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function red () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let countdown = 0
let songs = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
strip.setBrightness(30)
basic.forever(function () {
    green()
    basic.pause(350000)
    yellow()
    basic.pause(10000)
    basic.showIcon(IconNames.No)
    red()
    basic.pause(10000)
    basic.clearScreen()
})
