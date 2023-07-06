const fontSizeAdjustmentInput = document.getElementById('font-size-control');
const textForSizing = document.getElementById('text');

fontSizeAdjustmentInput.addEventListener('input', onFontSizeControl);
function onFontSizeControl( event) { 
    textForSizing.style.fontSize = event.currentTarget.value + 'px';
}
