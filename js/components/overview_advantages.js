const advList = [
    'overview-advantages.adv-1',
    'overview-advantages.adv-2',
    'overview-advantages.adv-3',
    'overview-advantages.adv-4'
]

const advantage = (text = '') => {
    const advantage = document.createElement('div')
    advantage.classList.add('overview-advantage')
    advantage.innerHTML = `
        <img src="/img/svg/advantage_4.svg" alt width="20" height="20">
        <p data-i18n="${text}"></p>
    `
    return advantage
}

function overviewAdvantages() {
    const advantages = document.createElement('div')
    advantages.classList.add('overview-advantages')
    advList.forEach((adv) => {
        advantages.appendChild(advantage(adv))
    })
    return {template: advantages}
}