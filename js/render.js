const components = [
    {
        root: '#header',
        component: header
    },
    {
        root: '#footer',
        component: footer
    },
]

const render = (root, component) => root.appendChild(component())