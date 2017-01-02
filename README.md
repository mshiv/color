# Color 

Web application to display a user-entered color.

## Requirements

There should be two visible items on the page: an input box and a div with a border (so you know it's there even when the color is the same as the page color). The div should show whatever color the user supplies in the input dynamically ("purple", "#0f0", "#fff000", etc.). 

No special handling is required, should the input be invalid. 
Pressing enter in the input box should have no effect. 
The input box should initially prompt the user with something like "Enter a color or code".

Use a modern Javascript MV* library like React, Backbone, Ember, Angular, etc. 
Inline styling and javascript code is fine. 
For page styling, feel free to make things sparse but presentable.

## Tools used

* [React] (https://facebook.github.io/react/) : JavaScript library
* [Webpack] (http://webpack.github.io/docs/what-is-webpack.html) : Module bundler

Webpack makes use of the [Babel](https://github.com/babel/babel-loader) module to load into JavaScript. 

## About

This app is built with React and packaged using Webpack. 
Standard HTML Color names are valid inputs, as are hexadecimal color codes (3 and 6 digit). Hex codes need to start with a "#".
