input.onGesture(Gesture.Shake, function () {
    RandomNumber = randint(0, 3)
    if (RandomNumber == 0) {
        basic.showString("Answer Unclear")
    } else if (RandomNumber == 1) {
        basic.showString("No")
    } else {
        basic.showString("Yes")
    }
})
let RandomNumber = 0
basic.showString("Magic 8 Ball")
basic.forever(function () {
	
})
