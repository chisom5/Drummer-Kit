function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return false;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

}

function removeTransition(e) {
    if (e.propertyName != 'transform') {
        return false;
    }
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);