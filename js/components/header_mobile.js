/**
 * @description component initialization
 * */
function headerMobileInit() {
    const sideBtn = document.querySelector('.side-menu-btn')
    const bgMask = document.querySelector('.header-mask')
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
                    sideBtn.classList.add('cross')
                    bgMask.classList.add('header-mask__active')
                    // required because of slideToClickedSlide
                    sideBtn.removeEventListener('click', openMenu, true)
                } else {
                    sideBtn.classList.remove('cross')
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
                <div class="header-menu__divider"></div>
                <a href="javascript:void(0)" onclick="changeLang('zh_Hans')"
                   data-i18n="header.sChinese">Chinese(Simplified)</a>
                <a href="javascript:void(0)" onclick="changeLang('zh_Hant')"
                   data-i18n="header.tChinese">Chinese(Traditional)</a>
                <a href="javascript:void(0)" onclick="changeLang('en_US')"
                   data-i18n="header.English">English(United States)</a>
                
            </div>
            <div class="swiper-slide" id="header-content">
                <div class="side-menu-btn">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <img src="/img/svg/logo.svg" alt="Tiger Migration Logo">
                <h1 class="logo-text-primary" style="margin-left: 1em;" data-i18n="header.logo">Tiger Migration</h1>
            </div>
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