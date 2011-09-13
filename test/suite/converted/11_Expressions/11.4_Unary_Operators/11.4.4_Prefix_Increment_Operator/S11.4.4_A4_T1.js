// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator ++x returns ToNumber(x) + 1
 *
 * @section 11.4.4, 11.6.3
 * @path 11_Expressions/11.4_Unary_Operators/11.4.4_Prefix_Increment_Operator/S11.4.4_A4_T1.js
 * @description Type(x) is boolean primitive or Boolean object
 */

//CHECK#1
var x = false; 
if (++x !== 0 + 1) {
  $ERROR('#1: var x = false; ++x === 0 + 1. Actual: ' + (++x));
}

//CHECK#2
var x = new Boolean(true);
if (++x !== 1 + 1) {
  $ERROR('#2: var x = new Boolean(true); ++x === 1 + 1. Actual: ' + (++x));
}
