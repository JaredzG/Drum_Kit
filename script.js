// Sounds that will play upon keypress
let audioSounds = document.querySelectorAll('audio');

document.addEventListener('keypress', playSound);

// Plays appropriate sound after calling stopSound
function playSound(event) {
    stopSound(event);
    for (const audioSound of audioSounds)
        if (event.key === audioSound.previousElementSibling.previousElementSibling.textContent.toLowerCase())
            audioSound.play();
}

// Stops and resets a sound that is currently playing
function stopSound(event) {
    for (const audioSound of audioSounds)
        if (event.key === audioSound.previousElementSibling.previousElementSibling.textContent.toLowerCase())
            if (!audioSound.paused && audioSound.currentTime) {
                audioSound.pause();
                audioSound.currentTime = 0;
            }
}

// Divs that will be highlighted when their sound plays
let soundDivs = document.querySelectorAll('.play-sound');

document.addEventListener('keydown', applyPlayingClass);
document.addEventListener('keyup', applyPlayingClass);

// Toggles the 'playing' class for special CSS rules when a sound plays
function applyPlayingClass(event) {
    for (const soundDiv of soundDivs) {
        if (event.key === soundDiv.firstElementChild.textContent.toLowerCase()) {
            soundDiv.classList.toggle('playing');
        }
    }
}