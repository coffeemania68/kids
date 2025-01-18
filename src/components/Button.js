//Button.js
function createButton(text, onClick, className = '') {
    const button = document.createElement('button');
    button.textContent = text;
    button.className = className;
    button.addEventListener('click', onClick);
    return button;
  }

  export {createButton}
