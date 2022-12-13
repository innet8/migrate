const components = [
    {
        roots: ['#header'],
        component: header
    },
    {
        roots: ['#footer'],
        component: footer
    },
    {
        roots: ['#strengths-wrap'],
        component: advertisement
    },
]

/**
 * render components in array 'components' to nodes in its' roots
 * */
const render = (roots, component) => {
    roots.forEach(root => {
        const rootElement = document.querySelector(root)
        rootElement.appendChild(component())
    })
}