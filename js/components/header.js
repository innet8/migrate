/**
 * render a navigation bar
 * @return {HTMLElement} the navigation bar
 * */
const header = () => {
    const header = document.createElement('header')
    header.classList.add('header-container')
    header.innerHTML = ``
    return header
}