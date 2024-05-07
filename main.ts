input.onButtonPressed(Button.AB, function () {
    basic.pause(100000)
})
basic.showLeds(`
    # . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    basic.pause(10000)
    for (let index = 0; index < 100000000; index++) {
        music.play(music.stringPlayable("C5 C5 C5 C C C C5 C5 ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C C C5 C5 C5 C C ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C C5 C5 C5 C C C C5 ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C5 C C C C5 C5 C5 ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C C C C5 C5 C5 C C ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C C5 C5 C5 C C C C5 ", 203), music.PlaybackMode.UntilDone)
        music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 203), music.PlaybackMode.UntilDone)
    }
})
