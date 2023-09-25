input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.pause(2000)
    Ampel3(0, 0, 1)
    basic.pause(7000)
    Ampel3(1, 0, 0)
})
function Ampel3 (Rot: number, Gelb: number, Grün: number) {
    pins.digitalWritePin(DigitalPin.P0, Rot)
    pins.digitalWritePin(DigitalPin.P1, Gelb)
    pins.digitalWritePin(DigitalPin.P2, Grün)
    if (Rot == 1) {
        basic.setLedColor(0xff0000)
    } else if (Gelb == 1) {
        basic.setLedColor(0xffff00)
    } else if (Grün == 1) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.turnRgbLedOff()
    }
}
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.pause(2000)
    Ampel3(0, 0, 1)
    basic.pause(7000)
    Ampel3(1, 0, 0)
})
basic.showString("Ampel2")
Ampel3(1, 1, 1)
