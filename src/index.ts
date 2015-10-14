import $ from 'jquery';
import setHeading from './lib/headings';

$(() => {
    $('header').html(setHeading('Get started with TypeScript and ES6!'));
});
