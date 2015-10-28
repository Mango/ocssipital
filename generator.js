'use strict';

// Require dependencies
var fs = require('fs');
var mkdirp = require('mkdirp');
var sass = require('node-sass');
var colors = require('colors');

// Config
var data = {
  "input_name": __dirname + '/styles/scss/demo.scss',
  "output_dir": __dirname + '/styles/css/',
  "output_name": __dirname + '/styles/css/demo.css',
  "nested": false
}

// Render Sass
function renderSass(){

  // Output style
  var outputStyle = 'compressed';
  if (data.nested === true){
    outputStyle = 'nested';
  }

  // Get CSS
  sass.render({
    file: data.input_name,
    precision: 8,
    outputStyle: outputStyle
  }, function(err, css) {
    if (err){
      console.log('Error: could not compile: '.red + data.input_name.red);
      console.log(err);
    } else {
      mkdirp(data.output_dir, function(err){
        if (err) {
          console.error(err);
        } else {
          fs.writeFileSync(data.output_name, css.css, 'utf8');
        }
      });
      console.log('Success: '.green + data.input_name.green + ' was compiled to'.green + data.output_name.green);
    }
  });
  
}

renderSass();