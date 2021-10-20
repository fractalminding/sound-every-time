'use strict'
let timer, secondsMeter, amountOfSeconds, audio
let secondsMeterElement = document.getElementById('seconds-meter')
let startButton = document.getElementById('start-button')
startButton.onclick = function() {
    amountOfSeconds = document.getElementById('amount-of-seconds').value
    audio = document.getElementById('main-audio')
    secondsMeterActions()
    timer = setInterval(function() {
        secondsMeterActions()
    }, amountOfSeconds * 1000)
}

function secondsMeterActions() {
    let startTime = new Date().getTime()
    let endTime = startTime + amountOfSeconds * 1000
    clearInterval(secondsMeter)
    audio.play()
    secondsMeter = setInterval(function() {
        let currentTime = new Date().getTime()
        let timeDifference = endTime - currentTime
        let diffHours = Math.floor(timeDifference / 3600000)
        timeDifference -= diffHours * 3600000
        let diffMinutes = Math.floor(timeDifference / 60000)
        timeDifference -= diffMinutes * 60000
        let diffSeconds = Math.floor(timeDifference / 1000)
        timeDifference -= diffSeconds * 1000
        let diffMilliseconds = String(timeDifference)[0]
        let diffString = 
            `${diffHours}:${diffMinutes}:${diffSeconds}.${diffMilliseconds}`
        secondsMeterElement.innerHTML = diffString
    }, 100)
}

let pauseButton = document.getElementById('pause-button')
pauseButton.onclick = function() {
    clearInterval(timer)
    clearInterval(secondsMeter)
}