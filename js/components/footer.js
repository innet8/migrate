/**
 * return a html element of footer
 * @return {{template: HTMLElement}} the footer
 * */
function footer() {
    const header = document.createElement('footer')
    header.classList.add('footer-wrap', 'container')
    header.innerHTML = `
    <div data-i18n="footer.copyrights">
        ©2022 By Tiger.com All rights reserved.
    </div>
    `
    return {template: header, isForMobile: true}
}