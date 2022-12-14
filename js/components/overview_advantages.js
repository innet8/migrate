const advList = [
    'Once the center of the Roman, Byzantine and Ottoman Empires,' +
    'it has a long history of 6,500 years and a heritage of thirteen different civilizations'
    , 'Surrounded by sea on three sides and complicated inland,' +
    'it has an extremely favorable strategic position and extremely rich natural resources'
    , 'It is a modern country with advanced social service facilities and hospitable people'
    , 'The culture is splendid, the scenery is fascinating, and there are many mysterious legends'
]

const advantage = (text = '') => {
    const advantage = document.createElement('div')
    advantage.classList.add('overview-advantage')
    advantage.innerHTML = `
        <img src="/img/svg/advantage_4.svg" alt width="20" height="20">
        <p>
            ${text}
        </p>
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