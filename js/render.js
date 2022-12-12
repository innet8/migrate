const components = [{
    root: '#header',
    component: header
}]

const render = (root, component) => root.appendChild(component())