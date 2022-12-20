/**
 * @description component initialization
 * */
function headerMobileInit() {
    const sideBtn = document.querySelector('.side-menu-btn')
    const bgMask = document.querySelector('.header-mask')
    const langCheckbox = document.querySelector('#is-language-opened')
    const openMenu = function () {
        swiper.slidePrev()
    }
    const swiper = new Swiper('#swiper-header', {
        slidesPerView: 'auto',
        initialSlide: 1,
        resistanceRatio: 0,
        slideToClickedSlide: true,
        on: {
            slideChangeTransitionStart: function () {
                let slider = this;
                if (slider.activeIndex === 0) {
                    // sideBtn.classList.add('cross')
                    bgMask.classList.add('header-mask__active')
                    // required because of slideToClickedSlide
                    sideBtn.removeEventListener('click', openMenu, true)
                } else {
                    // sideBtn.classList.remove('cross')
                    bgMask.classList.remove('header-mask__active')
                }
            },
            slideChangeTransitionEnd: function () {
                let slider = this;
                if (slider.activeIndex === 1) {
                    sideBtn.addEventListener('click', openMenu, true)
                }
            },
        },
    })

    // when bgMask has class '.header-mask__active' it should close the menu
    bgMask.addEventListener('click', function () {
        if (this.classList.contains('header-mask__active')) {
            swiper.slideNext()
        }
    })

    // when checked in langCheckbox is true, change css variable --language-list-height to fit the content
    langCheckbox.addEventListener('change', function () {
        // get children quantity of language-list
        let languages = document.querySelector('.language-list').childElementCount

        if (this.checked) {
            document.documentElement.style.setProperty(
                '--language-list-height',
                `calc(var(--mobile-header-link-height) * ${languages})`
            )
        } else {
            document.documentElement.style.setProperty('--language-list-height', '0')
        }
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
function headerMobile() {
    const header = document.createElement('header')
    header.classList.add('header-container__mobile')
    header.innerHTML = `
    <div id="swiper-header">
        <div class="swiper-wrapper">
            <div class="swiper-slide" id="header-menu">
            
                <div class="header-content" id="inner-logo-wrap">
                    <img src="/img/svg/logo.svg" alt="Tiger Migration Logo">
                    <h1 class="logo-text-primary" 
                        style="margin-left: 1em;" 
                        data-i18n="header.logo"
                    >
                        Tiger Migration
                    </h1>
                </div>
                
                <a href="/index.html" data-i18n="header.index">
                    Home
                </a>
                <a href="/local.html" data-i18n="header.local">
                    Local Conditions
                </a>
                <a href="/services.html" data-i18n="header.services">
                    Immigration Services
                </a>
                <a href="/about.html" data-i18n="header.about">
                    About Us
                </a>
                <div id="mobile-language-switcher">
                    <label id="is-language-opened__label" for="is-language-opened">
                        <input id="is-language-opened" type="checkbox" data-i18n="header.language">
                        <span data-i18n="header.language">Language</span>
                        <svg 
                            id="is-language-opened__icon" 
                            width="10" 
                            height="6" 
                            viewBox="0 0 10 6" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M1.5 4.75L5 1.25L8.5 4.75" 
                                stroke="#666" 
                                stroke-width="1.25" 
                                stroke-linecap="round" 
                                stroke-linejoin="round"
                            />
                        </svg>
                    </label>
                    
                    <div class="language-list">
                        <a href="javascript:void(0)" onclick="changeLang('zh_Hans')"
                           data-i18n="header.sChinese">Chinese(Simplified)</a>
                        <a href="javascript:void(0)" onclick="changeLang('zh_Hant')"
                           data-i18n="header.tChinese">Chinese(Traditional)</a>
                        <a href="javascript:void(0)" onclick="changeLang('en_US')"
                           data-i18n="header.English">English(United States)</a>
                    </div>
                </div>
            </div>
<!--            <div class="swiper-slide" id="header-content">-->
            <div class="swiper-slide"></div>
        </div>
        <div class="header-content" id="outer-logo-wrap">
            <div class="side-menu-btn">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <img src="/img/svg/logo.svg" alt="Tiger Migration Logo">
            <h1 class="logo-text-primary" style="margin-left: 1em;" data-i18n="header.logo">Tiger Migration</h1>
        </div>
        <div class="header-mask"></div>
    </div>
    `
    return {
        template: header,
        isForMobile: true,
        callback: headerMobileInit
    }
}