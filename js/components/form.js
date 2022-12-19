/**
 * textarea input event binding
 * text words limit
 * */
const textareaInput = () => {
    const textarea = document.querySelector("#form-msg")
    const limitEl = document.querySelector(".form-msg-limit")
    limitEl.innerText = textarea.value.length
}

/**
 * return a html element of purchase request form
 * @return {{template: HTMLElement}} the form
 * */
function form() {
    const form = document.createElement('div')
    form.classList.add("form-section-wrap", "section-wrap")
    form.innerHTML = `
    <div class="section-contents">
        <div class="form-section-title-wrap section-title-wrap">
            <div class="half-opacity-tag section-top rounded-full" data-i18n="callForm.tag">Call to action</div>
            <div class="section-title text-left" data-i18n="callForm.title">Fill out the purchase request</div>
            <div class="section-intro" data-i18n="callForm.desc">
                Online Matching of Desired Properties
            </div>
        </div>
        <div class="img-container">
            <img
                class="form-img"
                src="/img/homepage/bg_form.png"
                alt
                width="432"
                height="600"
            >
        </div>
    </div>
    <div class="section-form">
        <div class="form-name-wrap">
            <div class="form-input-item">
                <label for="form-name" data-i18n="callForm.name">Your Name</label>
                <input 
                    id="form-name" 
                    type="text" 
                    placeholder="Please enter your name" 
                    data-i18n-attr="placeholder:callForm.namePlaceholder"
                >
            </div>
            <div class="form-input-item">
                <label for="form-phone" data-i18n="callForm.phone">Contact Number</label>
                <input 
                    id="form-phone" 
                    type="text" 
                    placeholder="Please enter contact number"
                    data-i18n-attr="placeholder:callForm.phonePlaceholder"
                >
            </div>
            <div class="form-input-item">
                <label for="form-email" data-i18n="callForm.email">Email</label>
                <input 
                    id="form-email" 
                    type="text" 
                    placeholder="Please enter email"
                    data-i18n-attr="placeholder:callForm.emailPlaceholder"
                >
            </div>
            <div class="form-input-item relative">
                <label for="form-msg" data-i18n="callForm.message">Message</label>
                <textarea
                    id="form-msg"
                    maxlength="240"
                    onchange="this.value=this.value.substring(0, 240)"
                    onkeydown="this.value=this.value.substring(0, 240)"
                    onkeyup="this.value=this.value.substring(0, 240)"
                    oninput="textareaInput()"
                    onpropertychange="textareaInput()"
                    placeholder="Please leave a message here and we'll be replying as soon as possible."
                    data-i18n-attr="placeholder:callForm.messagePlaceholder"
                ></textarea>
                <div class="textarea-bl" onselectstart="return false;">
                    <span class="form-msg-limit">0</span>/240
                </div>
            </div>
            <a href="javascript:void(0)" onclick="submitBtnClick()">
                <div class="submit" data-i18n="callForm.submit">
                    Submit
                </div>
            </a>
        </div>
    </div>
  `
    return {template: form, isForMobile: true}
}