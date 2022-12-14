/**
 * render components in array 'components' to nodes in its' roots
 * */
const render = (roots, template) => {
    roots.forEach(root => {
        const rootElement = document.querySelector(root)
        rootElement.appendChild(template)
    })
}

/**
 * Render and push components to some selector's childrenNodes from components array,
 * each component has a array for target nodes.
 * @param {Array} componentsList
 * */
const renderComponents = (componentsList) => {
    /*
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
    * */
    componentsList.forEach(item => {
        render(item.roots, item.component().template)
        if (item.component()?.callback && typeof item.component()?.callback === 'function') {
            item?.component()?.callback()
        }
    })
}