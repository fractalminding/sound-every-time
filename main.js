'use strict'

let startButton = document.getElementById('start-button')
startButton.onclick = function() {
    let amountOfSeconds = document.getElementById('amount-of-seconds').value
    let audio = document.getElementById('main-audio')
    let timer = setInterval(function() {
        audio.play()
    }, amountOfSeconds * 1000)
}