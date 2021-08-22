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

# Riemann Zeta Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Riemann zeta][zeta-function] function.

<section class="intro">

The [Riemann zeta][zeta-function] function is the [analytic continuation][analytic-continuation] of the infinite series

<!-- <equation class="equation" label="eq:riemann_zeta_function" align="center" raw="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" alt="Riemann zeta function"> -->

<div class="equation" align="center" data-raw-text="\zeta(s) =\sum_{k=1}^\infty\frac{1}{k^s}" data-equation="eq:riemann_zeta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/riemann-zeta/docs/img/equation_riemann_zeta_function.svg" alt="Riemann zeta function">
    <br>
</div>

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is only convergent when the real part of `s`, `σ`, is greater than `1`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-riemann-zeta
```

</section>

<section class="usage">

## Usage

```javascript
var zeta = require( '@stdlib/math-base-special-riemann-zeta' );
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

```javascript
var linspace = require( '@stdlib/array-linspace' );
var zeta = require( '@stdlib/math-base-special-riemann-zeta' );

var s;
var v;
var i;

s = linspace( -50.0, 50.0, 200 );
for ( i = 0; i < s.length; i++ ) {
    v = zeta( s[ i ] );
    console.log( 's: %d, ζ(s): %d', s[ i ], v );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-riemann-zeta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-riemann-zeta

[test-image]: https://github.com/stdlib-js/math-base-special-riemann-zeta/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-riemann-zeta/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-riemann-zeta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-riemann-zeta?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-riemann-zeta.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-riemann-zeta/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-riemann-zeta/main/LICENSE

[zeta-function]: https://en.wikipedia.org/wiki/Riemann_zeta_function

[analytic-continuation]: https://en.wikipedia.org/wiki/Analytic_continuation

</section>

<!-- /.links -->
