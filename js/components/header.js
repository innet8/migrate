/**
 * return a html element of navigation bar
 * @return {HTMLElement} the navigation bar
 * */
const header = () => {
    const header = document.createElement('header')
    header.classList.add('header-container')
    header.innerHTML = `
    <div class="logo-wrap">
        <img src="/img/svg/logo.svg" alt="Tiger Migration Logo">
        <div class="flex flex-col">
            <h1 class="logo-text-primary">Tiger Migration</h1>
            <h2 class="logo-text-secondary">Professional·Focus on Turkish Immigration</h2>
        </div>
    </div>
    <ul id="header-nav-list">
        <li><a class="current-page" href="#">Home</a></li>
        <li><a href="#">Local Conditions</a></li>
        <li><a href="#">Immigration Services</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
    <div class="language-wrap">
        <div class="absolute w-fit h-fit top-1/2 left-1/2 transform -translate-y-1/2">
            <a href="javascript:void(0)" id="menu-button" aria-expanded="true" aria-haspopup="true">
                English
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                     fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"/>
                </svg>
            </a>
        </div>
        <div id="dropdown__language" role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
             tabindex="-1">
            <div class="py-1" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm"
                   role="menuitem" tabindex="-1" id="menu-item-0">Turkish</a>
                <a href="#" class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm"
                   role="menuitem" tabindex="-1" id="menu-item-1">Chinese(Traditional)</a>
                <a href="#" class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-4 py-2 text-sm"
                   role="menuitem" tabindex="-1" id="menu-item-2">English(United States)</a>
            </div>
        </div>

    </div>
    `
    return header
}