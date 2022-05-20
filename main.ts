function walking_sign2 () {
    basic.pause(3000)
    green()
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
    yellow()
    basic.pause(3000)
    red()
    basic.clearScreen()
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 23) {
        green()
        basic.pause(5000)
    }
    red()
})
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
    basic.pause(3000)
    basic.showIcon(IconNames.StickFigure)
    green()
    for (let countdown = 0; countdown <= 15; countdown++) {
        basic.showNumber(15 - countdown)
    }
    yellow()
    basic.pause(3000)
    red()
    basic.clearScreen()
}
function sensor1 () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    distance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(23)
})
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
let count = 0
let range: neopixel.Strip = null
let countdown = 0
let songs = 0
let distance = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(30)
basic.showIcon(IconNames.No)
red()
distance = 6
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        sensor1()
        if (distance <= 5) {
            count += 1
        }
    }
    if (count == 4) {
        basic.pause(5000)
        green()
        basic.pause(2000)
        yellow()
        basic.pause(2000)
        red()
    }
    count = 0
})
