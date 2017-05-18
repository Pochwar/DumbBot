import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Game),
        document.querySelector('#game')
    );
});

