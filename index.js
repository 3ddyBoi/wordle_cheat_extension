(function () {
    'use strict';

    const localStorageGameState = JSON.parse(localStorage.getItem('gameState'));
    const solutionString = localStorageGameState.solution;

    const element = document.createElement('div');
    const text = document.createTextNode(`Solution: ${solutionString}`);

    element.className = 'title';
    element.appendChild(text);

    const parent = document
        .querySelector('body > game-app')
        .shadowRoot.querySelector('#game > header');

    const existingText = document
        .querySelector('body > game-app')
        .shadowRoot.querySelector('#game > header > div.title');

    parent.replaceChild(element, existingText);
})();
