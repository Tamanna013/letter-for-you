
if (!window.bgMusic) {
    var audio = new Audio('Perfect.mp3');
    audio.id = 'bg-music';
    audio.loop = true;
    audio.volume = 0.8;

    window.bgMusic = audio;

    if (sessionStorage.getItem('audioState') === 'playing') {
        audio.play().catch(() => console.log("Autoplay blocked, waiting for user interaction."));
    }

    audio.onplay = function () {
        sessionStorage.setItem('audioState', 'playing');
    };
    audio.onpause = function () {
        sessionStorage.setItem('audioState', 'paused');
    };

    window.addEventListener('click', function () {
        if (sessionStorage.getItem('audioState') === 'playing' && audio.paused) {
            audio.play();
        }
    });
}