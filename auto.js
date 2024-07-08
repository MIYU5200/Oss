var audio = document.getElementById('1');

audio.addEventListener('loadedmetadata', function() {

    audio.volume = 0.0;
    
    audio.play();

    audio.addEventListener('playing', function() {
        audio.volume = 0.5;
    }, { once: true });
});

document.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        audio.volume = 0.5; 
    }
});
