<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# sabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-strided-special-sabs
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var sabs = require( '@stdlib/math-strided-special-sabs' );
```

#### sabs( N, x, strideX, y, strideY )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ] );

// Compute the absolute values in-place:
sabs( x.length, x, 1, x, 1 );
// x => <Float32Array>[ 2.0, 1.0, 3.0, 5.0, 4.0, 0.0, 1.0, 3.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: index increment for `x`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

sabs( N, x, 2, y, -1 );
// y => <Float32Array>[ 5.0, 3.0, 1.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

// Initial arrays...
var x0 = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

sabs( N, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
```

#### sabs.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Computes the [absolute value][@stdlib/math/base/special/abs] for each element in a single-precision floating-point strided array `x` and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

sabs.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float32Array = require( '@stdlib/array-float32' );
var floor = require( '@stdlib/math-base-special-floor' );

var x = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

var N = floor( x.length / 2 );

sabs.ndarray( N, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var round = require( '@stdlib/math-base-special-round' );
var randu = require( '@stdlib/random-base-randu' );
var Float32Array = require( '@stdlib/array-float32' );
var sabs = require( '@stdlib/math-strided-special-sabs' );

var x = new Float32Array( 10 );
var y = new Float32Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( (randu()*200.0) - 100.0 );
}
console.log( x );
console.log( y );

sabs.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/strided/special/sabs.h"
```

#### stdlib_strided_sabs( N, \*X, strideX, \*Y, strideY )

Computes the absolute value for each element in a single-precision floating-point strided array `X` and assigns the results to elements in a single-precision floating-point strided array `Y`.

```c
#include <stdint.h>

float X[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };
float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

int64_t N = 4;

stdlib_strided_sabs( N, X, 2, Y, 2 );
```

The function accepts the following arguments:

-   **N**: `[in] int64_t` number of indexed elements.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] int64_t` index increment for `X`.
-   **Y**: `[out] float*` output array.
-   **strideY**: `[in] int64_t` index increment for `Y`.

```c
void stdlib_strided_sabs( const int64_t N, const float *X, const int64_t strideX, float *Y, const int64_t strideY );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/strided/special/sabs.h"
#include <stdint.h>
#include <stdio.h>

int main() {
    // Create an input strided array:
    float X[] = { -1.0, -2.0, -3.0, -4.0, -5.0, -6.0, -7.0, -8.0 };

    // Create an output strided array:
    float Y[] = { 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 };

    // Specify the number of elements:
    int64_t N = 4;

    // Specify the stride lengths:
    int64_t strideX = 2;
    int64_t strideY = 2;

    // Compute the absolute value element-wise:
    stdlib_strided_sabs( N, X, strideX, Y, strideY );

    // Print the result:
    for ( int i = 0; i < 8; i++ ) {
        printf( "Y[ %i ] = %f\n", i, Y[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-strided/special/abs`][@stdlib/math/strided/special/abs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a strided array.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/dabs`][@stdlib/math/strided/special/dabs]</span><span class="delimiter">: </span><span class="description">compute the absolute value for each element in a double-precision floating-point strided array.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/sabs2`][@stdlib/math/strided/special/sabs2]</span><span class="delimiter">: </span><span class="description">compute the squared absolute value for each element in a single-precision floating-point strided array.</span>

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-sabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-sabs

[test-image]: https://github.com/stdlib-js/math-strided-special-sabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-strided-special-sabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-sabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-sabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-sabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-sabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-special-sabs/tree/deno
[umd-url]: https://github.com/stdlib-js/math-strided-special-sabs/tree/umd
[esm-url]: https://github.com/stdlib-js/math-strided-special-sabs/tree/esm
[branches-url]: https://github.com/stdlib-js/math-strided-special-sabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-sabs/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs

<!-- <related-links> -->

[@stdlib/math/strided/special/abs]: https://github.com/stdlib-js/math-strided-special-abs

[@stdlib/math/strided/special/dabs]: https://github.com/stdlib-js/math-strided-special-dabs

[@stdlib/math/strided/special/sabs2]: https://github.com/stdlib-js/math-strided-special-sabs2

<!-- </related-links> -->

</section>

<!-- /.links -->
