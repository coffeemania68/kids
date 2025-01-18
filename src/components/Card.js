//Card.js

function createCard(content, className = '') {
    const card = document.createElement('div');
    card.className = `bg-white p-6 rounded-lg shadow-md ${className}`;
    card.innerHTML = content;
    return card;
  }

  export {createCard}
