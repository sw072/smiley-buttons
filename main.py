_h = 15
_v = 65


def up():
    basic.show_leds("""
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    """)
    SuperBit.servo2(SuperBit.enServo.S1, _v)

def down():
    basic.show_leds("""
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        """)
    SuperBit.servo2(SuperBit.enServo.S1, _h)

def init():
    basic.show_icon(IconNames.HAPPY)
    SuperBit.servo2(SuperBit.enServo.S1, _h)

init()
input.on_button_pressed(Button.A, up)
input.on_button_pressed(Button.B, down)
