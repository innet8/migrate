/**
 * return a html element of advertisement divider
 * @return {{template: HTMLDivElement}} the advertisement
 * */
function advertisement() {
    const advertisement = document.createElement('div');
  advertisement.classList.add('advertisement')
  advertisement.innerHTML = `
    <div class="adv-separator">
        <div class="adv-bg"></div>
        <div class="adv-texts">
            <h2 class="adv-head" data-i18n="advertisement-1.head">Tiger Migration</h2>
            <h1 class="adv-primary-title font-medium" data-i18n="advertisement-1.title">Focus on Turkish Immigration</h1>
            <ul class="adv-tags">
                <li class="adv-tag half-opacity-tag" data-i18n="advertisement-1.tags.tag-1">Midland Direct</li>
                <li class="adv-tag half-opacity-tag" data-i18n="advertisement-1.tags.tag-2">Conscientious Service</li>
                <li class="adv-tag half-opacity-tag" data-i18n="advertisement-1.tags.tag-3">Success Guarantee</li>
            </ul>
        </div>
        <img src="/img/homepage/dartboard.png" alt class="adv-dartboard">
    </div>
  `
  return {template: advertisement, isForMobile: true}
}