const overlay = document.getElementById('videoOverlay');
const video = document.getElementById('promoVideo');
const music = document.getElementById('bgMusic');

function startShow() {
    overlay.style.display = 'flex';
    
    // Reset both to start
    video.currentTime = 0;
    music.currentTime = 0;
    
    // Ensure volume is up
    music.volume = 1.0;
    
    // Play both together
    video.play();
    music.play();
}

function stopShow() {
    overlay.style.display = 'none';
    
    // Stop both together
    video.pause();
    music.pause();
}