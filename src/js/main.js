import '../styles/main.scss';

import $ from 'jquery';
import {message} from './messages';

document.getElementById("title").innerText = message;

$('h1').css('background-color', 'red');

setTimeout(() => {
    $('h1').css('background-color', 'yellow');
}, 2000);