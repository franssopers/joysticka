input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    basic.clearScreen()
})
joystickbit.initJoystickBit()
led.setBrightness(8)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        basic.showArrow(ArrowNames.East)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        basic.showArrow(ArrowNames.South)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        basic.showArrow(ArrowNames.West)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        basic.showArrow(ArrowNames.North)
    }
})
