var player = document.getElementById('play');

function PlayControler() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}