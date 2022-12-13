/**
 * return a html element of advertisement divider
 * @return {HTMLElement} the advertisement
 * */
const advertisement = () => {
    const advertisement = document.createElement('div');
  advertisement.classList.add('advertisement')
  advertisement.innerHTML = `
    <div class="adv-separator">
        <div class="adv-bg"></div>
        <div class="adv-texts">
            <h2 class="text-xl font-medium uppercase">Tiger Migration</h2>
            <h1 class="adv-primary-title font-medium">Focus on Turkish Immigration</h1>
            <ul class="adv-tags">
                <li class="adv-tag half-opacity-tag">Midland Direct</li>
                <li class="adv-tag half-opacity-tag">Conscientious service</li>
                <li class="adv-tag half-opacity-tag">Success Guarantee</li>
            </ul>
        </div>
        <img src="/img/homepage/dartboard.png" alt class="adv-dartboard">
    </div>
  `


  return advertisement
}