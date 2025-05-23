/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var abs = require( '@stdlib/math-base-special-abs' );
var linspace = require( '@stdlib/array-base-linspace' );
var pow = require( '@stdlib/math-base-special-pow' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var zeta = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( zeta instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/cpp/output.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zeta, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', opts, function test( t ) {
	var v = zeta( NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided a NaN' );
	t.end();
});

tape( 'the function evaluates the Riemann zeta function', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;
	var i;

	s = data.x;
	expected = data.expected;
	for ( i = 0; i < s.length; i++ ) {
		v = zeta( s[i] );
		delta = abs( v - expected[i] );
		tol = 34.0 * EPS * abs( expected[i] );
		t.ok( delta <= tol, 'within tolerance. s: '+s[i]+'. v: '+v+'. E: '+expected[i]+'. Δ: '+delta+'. tol: '+tol+'.' );
	}
	t.end();
});

tape( 'the function evaluates the Riemann zeta function for very small values', opts, function test( t ) {
	var v = zeta( 1.0e-10 );

	// Checked against Julia:
	t.equal( v, -0.5000000000918938 );

	t.end();
});

tape( 'if evaluated at a pole (`s = 1`), the function returns `NaN`', opts, function test( t ) {
	var v = zeta( 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value when provided 1' );
	t.end();
});

tape( 'the function returns `1` for all input values greater than or equal to `56`', opts, function test( t ) {
	var s;
	var v;
	var i;

	s = linspace( 56.0, 100.0, 200 );
	for ( i = 0; i < s.length; i++ ) {
		v = zeta( s[ i ] );
		t.strictEqual( v, 1.0, 'returns expected value when provided '+s[i] );
	}
	v = zeta( PINF );
	t.strictEqual( v, 1.0, 'returns expected value when provided +infinity' );

	t.end();
});

tape( 'the function returns `0` for all even negative integers', opts, function test( t ) {
	var s;
	var v;
	var i;

	s = linspace( -2.0, -200.0, 100 );
	for ( i = 0; i < s.length; i++ ) {
		v = zeta( s[ i ] );
		t.strictEqual( v, 0.0, 'returns 0 when provided '+s[i] );
	}
	s = -pow( 2.0, 32 ); // |s| is greater than MAX_INT32
	v = zeta( s );
	t.strictEqual( v, 0.0, 'returns 0 when provided '+s );
	t.end();
});

tape( 'the function handles negative values which are larger in magnitude than the maximum factorial', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// Wolfram: zeta( -170.7 )
	expected = 4.236821692180446371109004075383326908604561232133963e171;

	s = -170.7;
	v = zeta( s );
	delta = abs( v - expected );
	tol = 53.0 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	// Wolfram: zeta( -171.1 )
	expected = 1.762429756041972327545919944532107376580768035147432e172;

	s = -171.1;
	v = zeta( s );
	delta = abs( v - expected );

	// Note: FF seems to return less precise results (https://travis-ci.org/math-io/riemann-zeta/jobs/115748766). For Node/Chrome, 286.0*eps.
	tol = 355.0 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function handles negative integer values which are larger in magnitude than twice the index of the maximum Bernoulli number', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// Only value satisfies this criterion without overflowing: -259. (|-257|+1)/2| = 128, which is the index of the largest Bernoulli number. -261 overflows.

	// Wolfram: zeta( -259 )
	expected = 8.760156344622921514904073013488223219302793651253880e306;

	s = -259;
	v = zeta( s );
	delta = abs( v - expected );

	// NOTE: the tolerance here is larger than for the JavaScript implementation due to compiler optimizations which may be performed resulting in result divergence. For discussion, see https://github.com/stdlib-js/stdlib/pull/2298#discussion_r1624765205
	tol = 656.0 * EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function returns `+-infinity` for large negative non-integer values', opts, function test( t ) {
	var s;
	var v;
	var i;

	s = linspace( -259.78778778778684, -10000.123, 103 );
	for ( i = 0; i < s.length; i++ ) {
		v = zeta( s[ i ] );
		t.ok( v === PINF || v === NINF, 'returns '+v+' when provided '+s[i] );
	}
	t.end();
});

tape( 'if provided `0` (special value), the function returns `-0.5`', opts, function test( t ) {
	var v = zeta( 0.0 );
	t.strictEqual( v, -0.5, 'returns expected value' );
	t.end();
});

tape( 'if provided `-1` (special value), the function returns `-1/12`', opts, function test( t ) {
	var v = zeta( -1.0 );
	t.strictEqual( v, -1.0/12.0, 'returns expected value' );
	t.end();
});

tape( 'if provided `-13` (special value), the function returns `-1/12`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	expected = -1.0/12.0;

	s = -13.0;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `4` (special value), the function returns `~1.0823`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A0013662
	expected = 1.082323233711138191516003696541167;

	s = 4.0;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `3` (special value), the function returns `~1.202`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A002117
	expected = 1.2020569031595942853997;

	s = 3.0;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `2` (special value), the function returns `~1.645`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A013661
	expected = 1.6449340668482264364724151666460251892189499012067984377355582293700074704032; // eslint-disable-line max-len

	s = 2.0;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `3/2` (special value), the function returns `~2.612`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A078434
	expected = 2.61237534868548834334856756792407163057080065240006340757332824881492776768827286099624386812631195238297; // eslint-disable-line max-len

	s = 1.5;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});

tape( 'if provided `1/2` (special value), the function returns `~-1.46`', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var s;
	var v;

	// https://oeis.org/A059750
	expected = -1.4603545088095868128894991525152980124672293310125814905428860878; // eslint-disable-line max-len

	s = 0.5;
	v = zeta( s );
	delta = abs( v - expected );
	tol = EPS * abs( expected );

	t.ok( delta <= tol, 'within tolerance. s: '+s+'. v: '+v+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );
	t.end();
});
