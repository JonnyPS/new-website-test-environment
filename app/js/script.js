'use strict';

var demo = document.getElementById('demo');

var myFunc = function myFunc(text, el) {
  el.innerHTML = text;
};

myFunc("I made it in the show ... es6 - coming from the future!" + '<br>' + " - this script is compiled from " + '<span style="font-style:italic";>app/es6 directory</span>' + '<br>' + "and plain old es5 dumped into " + '<span style="font-style:italic";>app/js/directory</span>', demo);