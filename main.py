def on_forever():
    if input.light_level() < 100:
        basic.show_leds("""
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            """)
        basic.pause(500)
    else:
        pass
basic.forever(on_forever)
