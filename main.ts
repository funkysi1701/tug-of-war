input.onButtonPressed(Button.A, function () {
    ScOrE += -1
    draw()
})
function draw () {
    basic.clearScreen()
    led.plot(ScOrE, 2)
    if (ScOrE == 0) {
        basic.showString("A  Win")
    } else if (ScOrE == 4) {
        basic.showString("B  win")
    }
}
input.onButtonPressed(Button.B, function () {
    ScOrE += 1
    draw()
})
let ScOrE = 0
ScOrE = 2
draw()
basic.forever(function () {
	
})
