# Ocssipital [![NPM version][npm-image]][npm-link] [![Build status][travis-image]][travis-link]

> A grid creation boilerplate for [SASS](http://sass-lang.com/)

# Features

- Supports flexbox grids
- Fully responsive with media queries
- Customizable breakpoints and class names
- Includes gutters and spacing

# Demos
- [Basic](https://mango.github.io/ocssipital/demos/basic.html)

# Installation

1. Download the repository
2. `npm install`dependencies

# Usage

### Basic usage

Working with Ocssipital is very easy. You can see an example below:

```html
<div class="grid-container">
  <div class="grid-column-1">One</div>
  <div class="grid-column-2">Two</div>
  <div class="grid-column-3">Three</div>
</div>
```

### Size per viewport

In addition to the base size, you can also add a column size according to a specific viewport:

```html
<div class="grid-container">
  <!-- Size 12 on small screens -->
  <div class="grid-column-4 grid-column-12-s">One</div>
  <!-- Size 6 on medium screens -->
  <div class="grid-column-4 grid-column-6-m">Two</div>
  <!-- Size 3 on large screens -->
  <div class="grid-column-4 grid-column-3-l">Three</div>
</div>
```

### Gaps

Additionally, if you want to leave "holes" or gaps in your columns, you can do so:

```html
<div class="grid-container">
  <!-- Creates a gap of size 3 from the left side -->
  <div class="grid-column-3 grid-gap-left-3">A 3 column gap to the left</div>
  <!-- Creates a gap of size 3 from the right side -->
  <div class="grid-column-3 grid-gap-right-6">A 6 column gap to the right</div>
</div>
```

### Visibility

If you wish to show/hide elements according to the viewport, you can use visibility classes:

```html
<div class="grid-container">
  <!-- Only visible on small screens -->
  <div class="grid-column-4 grid-visible-s">One</div>
  <!-- Only visible on large screens -->
  <div class="grid-column-4 grid-visible-l">Two</div>
</div>
```

# Customization

### SASS settings

```sass
/* styles/scss/ocssipital.scss */
$settings:(
    columns: (
      count:12,
      prefix:"grid-column",
      flexbox:true,
      debug:false
    ),
    container: (
      enable:true,
      name:"grid-container"
    ),
    gaps:(
      enable:true,
      prefix:"grid-gap"
    ),
    gutter:(
      enable:false,
      unit:"px",
      size:0
    ),
    visibility:(
      enable:true,
      prefix:"grid-visible"
    ),
    mediaqueries:(
      enable:true
    ),
    viewports:(
      s: (
        max-width:520px,
        create_columns:true
      ),
      m: (
        max-width:1000px,
        create_columns:true
      ),
      l: (
        min-width:1001px,
        create_columns:true
      ),
      retina: (
        high-resolution:true
      )
  );
```

### SASS settings customization

- columns
  - `count`: **(int)** the amount of columns
  - `prefix`: **(string)** the prefix of the column class name. *By default: "grid-column"*
  - `flexbox`: **(boolean)** wether to use flexbox or floats. *By default: true*
  - `debug`: **(boolean)** Adds visual queues to show the grid. *By default: false*
- container
  - `enable`: **(boolean)** wether to create a container for your grid. *By default: true*
  - `prefix`: **(string)** the prefix of the container class name. *By default: "grid-container"*
- gaps
  - `enable`: **(boolean)** wether to create gaps for your grid. *By default: true*
  - `prefix`: **(string)** the prefix of the gaps class name. *By default: "grid-gap"*
- gutter
  - `enable`: **(boolean)** wether to create gutters for your grid. *By default: false*
  - `unit`: **(string)** the unit for the gutter. *Options available: "px"*
  - `size`: **(int)** the size to be multiplied with the gutter unit.
- visibility
  - `enable`: **(boolean)** wether to create visibility elements for your grid. *By default: true*
  - `prefix`: **(string)** the prefix of the visibility class names. *By default: "grid-visible"*
- mediaqueries
  - `enable`: **(boolean)** wether to create mediaqueries for the grid or not. *By default: true*
- viewports
  - `size`: **(string)** the identification of the viewport size you want to use. *Examples: small, medium, etc."
    - `min-width`: **(string)** the min-width value for the viewport's mediaquery.
    - `max-width`: **(string)** the max-width value for the viewport's mediaquery.
    - `min-height`: **(string)** the min-height value for the viewport's mediaquery.
    - `max-height`: **(string)** the max-height value for the viewport's mediaquery.
    - `high-resolution`:  **(boolean)** if true, adds retina display and high-pixel density values to the viewport's mediaquery.
    - `create_columns`: **(boolean)** if true, creates columns for the current viewport. If set to *false*, the viewport will still be accesible for the *mediaquery() sass mixin*, but columns won't be created.

### Changing prefixes

If you change, for example, the column prefix from *"grid-column"* to **"col"**, you can later use in your HTML:

```html
<div class="grid-container">
  <div class="col-1">One</div>
  <div class="col-2">Two</div>
  <div class="col-3">Three</div>
</div>
```

### Compiling Ocssipital with your own settings
In the command line, run:
```
npm run build
```
That will compile **styles/scss/ocssipital.scss** into **styles/css/ocssipital.css**

# SASS Mixins

### Mediaquery
Call on a specific viewport (defined in the settings) and create custom styles for it:

#### Usage

```css
@include mediaquery($size){}
```

#### Example

```css
@include mediaquery(s){
  p {color:red;}
}
```

### Change Column
Changes an element's current column size for a different one.

#### Usage

```css
@include change_column($column_number){}
```

#### Example
```html
<div class="grid-column-4 myDiv">MyDiv</div>
```
```sass
@include mediaquery(s){
  /* For the small viewport, change the column from size 4 to size 12 of .myDiv */
  .myDiv {
    @include change_column(12);
  }
}
```

# Browser support

- **For [flexbox](http://caniuse.com/#feat=flexbox) layouts:** IE11+, Firefox 38+, Chrome 31+, Safari 9+, Opera 32+
- **For float layouts:** IE8+, Firefox, Chrome, Safari, Opera

# With ❤ by

- Ignacio Ricci (VP of Product @ Mango)
 - E-mail: [ignacio.ricci@gmail.com](mailto:ignacio.ricci@gmail.com)
 - Twitter: [@ignacioricci](http://twitter.com/ignacioricci)
 - Web: [http://ignacioricci.com](http://ignacioricci.com)

- Guille Paz (Front-end developer | Web standards lover)
 - E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
 - Twitter: [@pazguille](http://twitter.com/pazguille)
 - Web: [http://pazguille.me](http://pazguille.me)

# License
MIT license. Copyright © 2015 [Mango](http://getmango.com).

[npm-image]: https://img.shields.io/npm/v/ocssipital.svg?style=flat
[npm-link]: https://npmjs.org/package/ocssipital
[travis-image]: https://img.shields.io/travis/Mango/ocssipital.svg?style=flat
[travis-link]: https://travis-ci.org/Mango/ocssipital