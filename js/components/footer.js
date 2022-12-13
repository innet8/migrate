/**
 * return a html element of footer
 * @return {HTMLElement} the footer
 * */
const footer = () => {
    const header = document.createElement('footer')
    header.classList.add('footer-wrap')
    header.innerHTML = `
    <div>
        ©2022 By Tiger.com All rights reserved.
    </div>
    `
    return header
}