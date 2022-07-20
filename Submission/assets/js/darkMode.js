function modeTrigger() {
    let element = document.body;
    let mode = document.querySelector('.mode-trigger').innerText;
   
    element.classList.toggle('dark-mode');

    if (mode === 'Dark Mode') {
        document.querySelector('.mode-trigger').innerText = 'Light Mode'
    } else {
        document.querySelector('.mode-trigger').innerText = 'Dark Mode'
    }
};