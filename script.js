function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('light-dark-switch')
    const root = document.documentElement;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            root.style.setProperty('color-scheme', 'normal');
        } else {
            root.style.setProperty('color-scheme', 'dark')
        }
    });

    if (checkbox.checked) {
        root.style.setProperty('color-scheme', 'normal');
    } else {
        root.style.setProperty('color-scheme', 'dark')
    }
})