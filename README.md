# Flexbox Layout Library for Angular 2

[![Join the chat at https://gitter.im/ng2-flex/Lobby](https://badges.gitter.im/ng2-flex/Lobby.svg)](https://gitter.im/ng2-flex/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/ng2-flex.svg)](https://badge.fury.io/js/ng2-flex)

This library was made with the intention to help software developers that wants a simple layout system out of the box for Angular 2. This library uses Flexbox, so the compatibility with old browsers is limited.

## Installation/Setup

### Install with NPM
Install with npm `npm install --save ng2-flex`

### Add Module as a Dependency to Your App
Import `FlexModule` and add it to the `imports` of your app's `AppModule`
```javascript
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexModule } from 'ng2-flex';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Usage

### Container

You need to specify the `flxContainer` as the first element in your html body.

Example:
```html
<flx-container>
  ...
</flx-container>
```

Example: DIV as container
```html
<div flx-container>
  ...
</div>
```

### Grid System

Grid system is compound of three components:

The `flx-grid` allows you to generate a Grid Layout System. Inside of this component we add rows using the `flx-row` component and, inside of those rows, we add the columns using the `flx-column` component.

Example:
```html
<flx-grid>
  <flx-row>
    Header
  </flx-row>
  <flx-row>
    <flx-column>Main Content</flx-column>
    <flx-column>Side bar</flx-column>
  </flx-row>
  <flx-row>
    Footer
  </flx-row>
</flx-grid>
```

Example (using HTML5 elements):
```html
<flx-grid>
  <header flx-row>
    Header
  </header>
  <flxRow>
    <main flx-column>Main Content</main>
    <aside flx-column>Side bar</aside>
  </flxRow>
  <footer flx-row>
    Footer
  </footer>
</flxGrid>
```

#### Properties of flx-row and flx-column

* size
  * Type: `string|SizeMapping`
  * Description: Size of the Row/Column in pixels or percentage of the parent. The size can be a string or a instance of [SizeMapping](http://) object.
  * Example: 
  ```html
  <flx-row [size]="'50%'"></flx-row>
  <flx-column [size]="'100px'"></flx-column>
  <flx-row [size]="{small: '20%', medium: '30%'}"></flx-row>
  ```

* switchSize
  * Type: `string`
  * Description: Device size when the row shows inside elements as column and column shows inside elements as row.
  * Available values: 
    * extraSmall
    * small
    * medium
    * large
  * Example:
  ```html
  ```

* separation
  * Type: `string`
  * Description: How inner elements distribute extra space in the main axis (Row: X Axis, Column: Y Axis).
  * Available values: 
    * between
    * all
  * Example:
  ```html
  ```

* wrap
  * Type: `string`
  * Description:
  * Available values:
    * nowrap
    * wrap
    * wrapReverse 
  * Example:
  ```html
  ```

* wrapAlignment
  * Type: `string`
  * Description:
  * Available values:
    * start
    * center
    * end
    * stretch
    * all
    * between
  * Example:
  ```html
  ```

* horizontalAlignment
  * Type: `string`
  * Description:
  * Available values:
    * left
    * center
    * right
  * Example:
  ```html
  ```

* verticalAlignment
  * Type: `string`
  * Description:
  * Available values:
    * top
    * center
    * bottom
  * Example:
  ```html
  ```

* order
  * Type: `number|SizeMapping`
  * Description:
  * Example:
  ```html
  ```

### Structural Directives

#### flxSize

It allow us to **load** an element in the DOM when the device size is the same than the specified in the directive. Is the same behavior that has `ngIf` directive but with a device size instead of a boolean value.

Example:
```html
```

#### flxMaxSize
It allow us to **load** an element in the DOM while the device size is less than or equal that the specified in the directive.

Example:
```html
```

#### flxMinSize
It allow us to **load** an element in the DOM while the device size is more than or equal that the specified in the directive.

Example:
```html
```

### Attribute Directives

#### flxClass
It allow us to set classes for different device sizes. Is the same behavior that has `ngClass` but we specify device sizes instead of boolean values.
We can add more than one size for the same class with the pipe `|` character as a separator.

Example:
```html
```

### Pipes

#### checkSize
 * Input: `DeviceSize`
 * Output: `boolean`
 * Params: allowedSizes - `string`
 * Description:

#### deviceSize
 * Input: `string`
 * Output: `DeviceSize`
 * Params: N/A
 * Description:

#### sizeMap
 * Input: `object`
 * Output: `SizeMapping`
 * Params: N/A
 * Description:
 
