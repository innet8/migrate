/**
 * @description returns the translation of a string,
 * get translations from json file.
 * @param {Object} json the json file of translations, data structure:
 *      {
 *          language: 'en_US',
 *          translations: {
 *              'key': 'value',
 *              group: {
 *                  'key': 'value'
 *              }
 *          }
 *      }
 * @param {string} key the key of the translation
 * @return {string} the translation
 * */
function translate(json= {
    language: 'en_US',
    translations: {
        key: 'value',
        key2: 'value 2',
    }
}, key) {
    const keys = key.split('.')

    let value = json.translations

    if (keys.length === 1) {
        return !value ? key : value[key]
    }

    // if keys.length > 1, deep search
    for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]]
        if (!value) {
            return key
        }
    }

    // Validation: if value doesn't exist then return key string
    return !value ? key : value;
}

/**
 * @description Get language translations json file by Fetch()
 * // no-cors, *cors, same-origin
 * */
const getJson = (url) => fetch(url, {mode: 'cors'})
    .then((res) => res.json())
    .then((json) => json)

/**
 * @description Replace all elements who have data-i18n attribute with translations key.
 * */
function init(simI18n) {
    // wait for language json file loaded to translate
    getJson(`${simI18n.translations[simI18n.lang]}`)
        .then(json => {
            simI18n.languageJson = json

            simI18n.t = (key) => translate(simI18n.languageJson, key)

            const elements = document.querySelectorAll('[data-i18n]')
            elements.forEach((element) => {
                element.innerHTML = simI18n.t(element.dataset.i18n)
            })
        })
}

/**
 * @description Simple I18n, get translations from json file.
 * @param {Object} options the options of the I18n
 * */
const SimI18n = function (options = {
    lang: 'en_US',
    fallbackLang: 'en_US',
    translations: {},
}) {
    //Factory
    let simI18n = {}
    simI18n.languageJson = {}
    simI18n.lang = options.lang || 'en_US'
    simI18n.fallbackLang = options.fallbackLang || 'en_US'
    simI18n.translations = options.translations || {}

    if (!Object.hasOwn(simI18n.translations, simI18n.lang)) {
        throw new Error('The language is not supported.')
    }

    simI18n.setLang = function (lang) {
        localStorage.setItem('lang', lang)
        this.lang = lang
    }
    simI18n.getLang = function () {
        const currentLang = localStorage.getItem('lang')
        if (!currentLang) {
            localStorage.setItem('lang', this.fallbackLang)
            return this.fallbackLang
        }
        return currentLang
    }

    simI18n.init = () => init(simI18n)

    return simI18n
}