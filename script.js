let boom = document.getElementById('boom-sound');
let clap = document.getElementById('clap-sound');
let hihat = document.getElementById('hihat-sound');
let kick = document.getElementById('kick-sound');
let openhat = document.getElementById('openhat-sound');
let ride = document.getElementById('ride-sound');
let snare = document.getElementById('snare-sound');
let tink = document.getElementById('tink-sound');
let lowtom = document.getElementById('lowtom-sound');
let hightom = document.getElementById('hightom-sound');

document.addEventListener('keypress', playSound);

function playSound(event) {
    stopSound(event.key);
    switch(event.key) {
        case 'a' :
            boom.play();
            break;
        case 's' :
            clap.play();
            break;
        case 'd' :
            hihat.play();
            break;
        case 'f' :
            kick.play();
            break;
        case 'g' :
            openhat.play();
            break;
        case 'h' :
            ride.play();
            break;
        case 'j' :
            snare.play();
            break;
        case 'k' :
            tink.play();
            break;
        case 'l' :
            lowtom.play();
            break;
        case ';' :
            hightom.play();
            break;
    }
}

function stopSound(key) {
    switch(key) {
        case 'a' :
            if (!boom.paused && boom.currentTime) {
                boom.pause();
                boom.currentTime = 0;
            }
            break;
        case 's' :
            if (!clap.paused && clap.currentTime) {
                clap.pause();
                clap.currentTime = 0;
            }
        case 'd' :
            if (!hihat.paused && hihat.currentTime) {
                hihat.pause();
                hihat.currentTime = 0;
            }
        case 'f' :
            if (!kick.paused && kick.currentTime) {
                kick.pause();
                kick.currentTime = 0;
            }
        case 'g' :
            if (!openhat.paused && openhat.currentTime) {
                openhat.pause();
                openhat.currentTime = 0;
            }
        case 'h' :
            if (!ride.paused && ride.currentTime) {
                ride.pause();
                ride.currentTime = 0;
            }
        case 'j' :
            if (!snare.paused && snare.currentTime) {
                snare.pause();
                snare.currentTime = 0;
            }
        case 'k' :
            if (!tink.paused && tink.currentTime) {
                tink.pause();
                tink.currentTime = 0;
            }
        case 'l' :
            if (!lowtom.paused && lowtom.currentTime) {
                lowtom.pause();
                lowtom.currentTime = 0;
            }
        case ';' :
            if (!hightom.paused && hightom.currentTime) {
                hightom.pause();
                hightom.currentTime = 0;
            }
    }
}