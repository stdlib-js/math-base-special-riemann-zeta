<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Riemann Zeta Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Riemann zeta][zeta-function] function.

<section class="intro">

The [Riemann zeta][zeta-function] function is the [analytic continuation][analytic-continuation] of the infinite series

<!-- <equation class="equation" label="eq:riemann_zeta_function" align="center" raw="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" alt="Riemann zeta function"> -->

```math
\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}
```

<!-- <div class="equation" align="center" data-raw-text="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" data-equation="eq:riemann_zeta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/riemann-zeta/docs/img/equation_riemann_zeta_function.svg" alt="Riemann zeta function">
    <br>
</div> -->

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is only convergent when the real part of `s`, `σ`, is greater than `1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
zeta = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-riemann-zeta@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-riemann-zeta/tags). For example,

```javascript
zeta = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-riemann-zeta@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var zeta = require( 'path/to/vendor/umd/math-base-special-riemann-zeta/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-riemann-zeta@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.zeta;
})();
</script>
```

#### zeta( s )

Evaluates the [Riemann zeta][zeta-function] function as a function of a real variable `s` (i.e., `t = 0`).

```javascript
var v = zeta( 1.1 );
// returns ~10.584

v = zeta( -4.0 );
// returns 0.0

v = zeta( 70.0 );
// returns 1.0

v = zeta( 0.5 );
// returns ~-1.46

v = zeta( 1.0 ); // pole
// returns NaN

v = zeta( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-riemann-zeta@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var s = linspace( -50.0, 50.0, 200 );

var i;
for ( i = 0; i < s.length; i++ ) {
    console.log( 's: %d, ζ(s): %d', s[ i ], zeta( s[ i ] ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-riemann-zeta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-riemann-zeta

[test-image]: https://github.com/stdlib-js/math-base-special-riemann-zeta/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-riemann-zeta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-riemann-zeta?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-riemann-zeta.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-riemann-zeta/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/blob/main/branches.md

[zeta-function]: https://en.wikipedia.org/wiki/Riemann_zeta_function

[analytic-continuation]: https://en.wikipedia.org/wiki/Analytic_continuation

</section>

<!-- /.links -->
