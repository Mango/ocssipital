# Ocssipital

> A grid creation boilerplate for <a href="http://sass-lang.com/" target="_blank">SASS</a>

## Features

- Supports native flexbox grids
- Customizable class names and viewport sizes
- Less than 1 Kb! (min & gzip)

## Installation

Run SASS on the project folder

## Usage

Working with Ocssipital is easy. You can see an example below:

```html
<div class="grid-container">
  <div class="grid-column-1">One</div>
  <div class="grid-column-2">Two</div>
  <div class="grid-column-3">Three</div>
</div>
```

You can also change the column size according to the viewport. The larger the size, the wider the column.

```html
<div class="grid-container">
  <!-- Small screens -->
  <div class="grid-column-12-s">One</div>
  <!-- Medium screens -->
  <div class="grid-column-6-m">Two</div>
  <!-- Large screens -->
  <div class="grid-column-3-l">Three</div>
</div>
```

Additionally, if you want to leave "holes" or gaps in your columns, you can do so with a class, rather than creating an empty element that looses semantics:

```html
<div class="grid-container">
  <div class="grid-column-3 grid-gap-left-3">A 3 column gap to the left</div>
  <div class="grid-column-3 grid-gap-right-6">A 6 column gap to the right</div>
</div>
```

## Settings

#### Flexbox (Boolean)
Defines whether to use flexbox or floats. By default: true.

```css
$flexbox:true;
```

#### Column Count (Int)
Defines the amount of maximum columns for the grid. By default: 12.

```css
$column_count:12;
```

#### Column Prefix (String)
Defines the class prefix for each column. By default: grid-column.

```css
$column_prefix:"grid-column";
```

#### Column Container (String)
Defines the name of the container of the grid. By default: grid-container.

```css
$container_name:"grid-container";
```

#### Viewports (Array)
Defines your website viewports and breakpoints. By default: s, m, l, xl.

```css
$viewports:(s, 0, 639px, true), (m, 640px, 1024px, true), (l, 1025px, 1199px, true), (xl, 1200px, 0, true);
```

You can change the viewport name and min/max widths.
Use the last boolean parameter to create columns for that viewport or not.

#### Debugging (Boolean)
Highlights all columns to be able to debug the layout. By default: false.

```css
$debug:false;
```

#### Grid Gaps (Boolean)
Enables gaps as empty placeholders for your layout. By default: true.

```css
$gaps:true;
```

#### Grid Gap Prefix (String)
Defines the class prefix for the gaps. By default: grid-gap.

```css
$gap_prefix:"grid-gap";
```

#### Grid Gutter Unit (String)
Defines the measuring unit for the gutter (atm. only px). By default: px.


```css
$grid_gutter_unit:"px";
```

#### Grid Gutter Size (Int)
Defines the size of the gap in the current unit. By default: 0.

```css
$grid_gutter_size:0;
```

## Mixins

#### Mediaqueries
Use this mixin to include custom styles in a specific viewport.

```css       
@include mediaquery($viewport){}
```

#### Change Column
Changes an element's current column size for a different one.

```css
@include change_column($number){}
```

## With ❤ by

- Ignacio Ricci (VP of Product @ Mango)
 - E-mail: [ignacio.ricci@gmail.com](mailto:ignacio.ricci@gmail.com)
 - Twitter: [@ignacioricci](http://twitter.com/ignacioricci)
 - Web: [http://ignacioricci.com](http://ignacioricci.com)

- Guille Paz (Front-end developer | Web standards lover)
 - E-mail: [guille87paz@gmail.com](mailto:guille87paz@gmail.com)
 - Twitter: [@pazguille](http://twitter.com/pazguille)
 - Web: [http://pazguille.me](http://pazguille.me)

## License
MIT license. Copyright © 2015 [Mango](http://getmango.com).
