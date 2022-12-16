let currentPage = window.location.pathname.split('/').pop().split('.').shift()
/**
 * to judge is current page equal to the page name in the param
 * @param {string | Array} pageName the name of target page, will be compared with current page
 * @return {boolean} is current page
 * */
function isCurrentPage(pageName = '') {
    /* currentPage will get from window.location.pathname,
    * and will split by '/' and '.' to get the file name.
    * */
    if (typeof pageName === 'string') {
        return pageName === currentPage
    }
    if (typeof pageName === 'object') {
        return pageName.includes(currentPage)
    }
    return false
}

/**
 * Language dropdown menu click event binding.
 * please call this function after rendering!
 * */
function languageDropdownBinding () {
    const languageButton = document.querySelector('#menu-button')
    const languageMenu = document.querySelector('#dropdown__language')
    languageButton.addEventListener('click', (e) => {
        languageMenu.classList.toggle('menu__hidden')
        languageMenu.classList.toggle('menu__block')
    })
}

/**
 * @description language switch, languages: zh_Hans, zh_Hant, en_US
 * @param {string} lang language code
 * */
function changeLang(lang) {
    localStorage.setItem('lang', lang)
    window.location.reload()
}

/**
 * return a html element of navigation bar
 * @return {{template: HTMLElement, callback: function}} the navigation bar
 * */
function header() {
    const header = document.createElement('header')
    header.classList.add('header-container')
    header.innerHTML = `
    <div class="logo-wrap">
        <img src="/img/svg/logo.svg" alt="Tiger Migration Logo">
        <div class="flex flex-col">
            <h1 class="logo-text-primary" data-i18n="header.logo">Tiger Migration</h1>
            <h2 class="logo-text-secondary" data-i18n="header.logoDesc">Professional·Focus on Turkish Immigration</h2>
        </div>
    </div>
    <ul id="header-nav-list">
        <li>
            <a 
                class="${isCurrentPage(['index', '']) ? 'current-page' : ''}" 
                href="/index.html" 
                data-i18n="header.index"
            >
                Home
            </a>
        </li>
        <li>
            <a 
                class="${isCurrentPage('local') ? 'current-page' : ''}" 
                href="/local.html"
                data-i18n="header.local"
            >
                Local Conditions
            </a>
        </li>
        <li>
            <a 
                class="${isCurrentPage('services') ? 'current-page' : ''}" 
                href="/services.html"
                data-i18n="header.services"
            >
                Immigration Services
            </a>
        </li>
        <li>
            <a 
                class="${isCurrentPage('about') ? 'current-page' : ''}" 
                href="/about.html"
                data-i18n="header.about"
            >
                About Us
            </a>
        </li>
    </ul>
    <div class="language-wrap">
        <div class="absolute w-fit h-fit top-1/2 left-1/2 transform -translate-y-1/2">
            <a href="javascript:void(0)" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <span data-i18n="getLang"></span>
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"/>
                </svg>
            </a>
        </div>
        <div id="dropdown__language" class="menu__hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
             tabindex="-1">
            <div class="menu-links" role="none">
                <a href="javascript:void(0)" class="menu-link" onclick="changeLang('zh_Hans')"
                   role="menuitem" tabindex="-1" id="menu-item-1" data-i18n="header.sChinese">Chinese(Simplified)</a>
                <a href="javascript:void(0)" class="menu-link" onclick="changeLang('zh_Hant')"
                   role="menuitem" tabindex="-1" id="menu-item-1" data-i18n="header.tChinese">Chinese(Traditional)</a>
                <a href="javascript:void(0)" class="menu-link" onclick="changeLang('en_US')"
                   role="menuitem" tabindex="-1" id="menu-item-2" data-i18n="header.English">English(United States)</a>
            </div>
        </div>
    </div>
    `
    return {template: header, callback: languageDropdownBinding}
}