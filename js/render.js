/**
 * @description returns is this device a mobile device
 * @return {boolean} is mobile device
 * */
function isThisDeviceMobile() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
        return true
    }
    return window.innerWidth <= 768
}

/**
 * render components in array 'components' to nodes in its roots
 * */
function render(roots, template) {
    roots.forEach(root => {
        const rootElement = document.querySelector(root)
        rootElement.appendChild(template)
    })
}

/**
 * Render and push components to some selector's childrenNodes from components array,
 * each component has an array for target nodes.
 * Data structure of componentsList:
 * [{
 *       roots: ['#root1', '#root2'],
 *       component: function() {
 *           return {
 *               template: HTMLElement,
 *               callback: () => {}
 *           }
 *       }
 *  }]
 * @param {Array} componentsList
 * */
const renderPage = (componentsList) => {
    componentsList.forEach(item => {
        // if this device is mobile && this component is not for mobile,
        // render its alternative mobile components
        if (isThisDeviceMobile()
            && !item.component()?.isForMobile
            && typeof item.alternative === 'function'
        ) {
            render(item.roots, item.alternative()?.template)
            if (typeof item.alternative()?.callback === 'function') {
                item.alternative()?.callback()
            }
            return
        }

        render(item.roots, item.component().template)
        if (typeof item.component()?.callback === 'function') {
            item.component()?.callback()
        }
    })
}