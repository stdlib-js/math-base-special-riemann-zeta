/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var linspace = require( '@stdlib/array-linspace' );
var zeta = require( './../lib' );

var s;
var v;
var i;

s = linspace( -50.0, 50.0, 200 );
for ( i = 0; i < s.length; i++ ) {
	v = zeta( s[ i ] );
	console.log( 's: %d, ζ(s): %d', s[ i ], v );
}
