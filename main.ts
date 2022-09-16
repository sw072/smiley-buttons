let _h = 15
let _v = 65
function init() {
    basic.showIcon(IconNames.Happy)
    SuperBit.Servo2(SuperBit.enServo.S1, _h)
}

init()
input.onButtonPressed(Button.A, function up() {
    basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
    SuperBit.Servo2(SuperBit.enServo.S1, _v)
})
input.onButtonPressed(Button.B, function down() {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    SuperBit.Servo2(SuperBit.enServo.S1, _h)
})
