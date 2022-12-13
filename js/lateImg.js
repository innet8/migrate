// Images need to be loaded lately
const lateImages = ['.strength-img'];
/**
 * late init image when window onload
 * @param {string} selector - selector of image
 * */
const lateImg = (selector) => {
    const imgEl = $(selector);
    const imgSrc = imgEl.attr('data-src');

    fetch(imgSrc)
        .then(r => {
            if (r.ok) {
                // imgEl.attr('src', imgSrc);
                return r.blob();
            }
            throw new Error(r.statusText);
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            imgEl.attr('src', url);
        })
        .catch(e => {
            console.error(`Failed to lately load image in '${selector}', error msg: ${e.message}`);
        })
}