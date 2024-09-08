document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.querySelector('.fa-circle-play');
    const audio = new Audio('assects/music/song5.mp3'); // Path to your audio file
    const progressBar = document.querySelector('.range'); // The progress bar

    // Play or pause the song
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('fa-circle-play');
            playPauseBtn.classList.add('fa-circle-pause');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('fa-circle-pause');
            playPauseBtn.classList.add('fa-circle-play');
        }
    });

    // Update progress bar as the song plays
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    });

    // Scrubbing functionality (seek through the song)
    progressBar.addEventListener('input', () => {
        const scrubTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = scrubTime;
    });

    // Reset play button when song ends
    audio.addEventListener('ended', () => {
        playPauseBtn.classList.remove('fa-circle-pause');
        playPauseBtn.classList.add('fa-circle-play');
    });
});
