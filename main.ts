let light2 = 0
let triggered = false
basic.forever(function () {
    light2 = input.lightLevel()
    serial.writeValue("light", light2)
    if (light2 < 100 && !(triggered)) {
        // Two beeps for alert
        music.playTone(880, music.beat(BeatFraction.Eighth))
        music.rest(music.beat(BeatFraction.Eighth))
        music.playTone(880, music.beat(BeatFraction.Eighth))
        triggered = true
    }
    if (light2 >= 100) {
        triggered = false
    }
    basic.pause(200)
})
