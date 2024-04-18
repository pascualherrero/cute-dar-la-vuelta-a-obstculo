input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    // 1. Llegar y pasar al obstáculo.
    // Hay que probar en cuantos segundos llega
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 3)
    cuteBot.turnright()
    // 2. El giro es muy breve (50 milisegundos)
    basic.pause(50)
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 1)
    cuteBot.turnright()
    basic.pause(50)
    // 5. Llegar a la meta
    // Hay que probar en cuantos segundos llega
    // y luego parar todo
    cuteBot.moveTime(cuteBot.Direction.forward, 20, 2)
    cuteBot.stopcar()
    music.play(music.tonePlayable(587, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
basic.showIcon(IconNames.Snake)
