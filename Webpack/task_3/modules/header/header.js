import './header.css';
import $ from 'jquery';
import logo from '../../assets/holberton-logo.jpg';

console.log('Init header');

const logoElement = $('<div id="logo"></div>');
logoElement.css('background-image', `url(${logo})`);

$('body').prepend(logoElement);
$('body').prepend('<h1>Holberton Dashboard</h1>');
