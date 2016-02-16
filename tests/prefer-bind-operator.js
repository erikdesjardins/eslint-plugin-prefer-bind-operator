/**
 * @fileoverview Suggest using the bind operator over Function methods or Reflect.apply.
 * @author Erik Desjardins
 * @copyright 2016 Erik Desjardins. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

var rule = require('../rules/prefer-bind-operator');
var RuleTester = require('eslint').RuleTester;

var bindMessage = 'Expected bind operator or arrow function.';
var callMessage = 'Expected bind operator.';

var ruleTester = new RuleTester();
ruleTester.run('prefer-bind-operator', rule, {
	valid: [
		// variables
		'var apply; var call; var bind;',
		// properties
		'a.apply; a.call; a.bind;',
		// deep properties
		'a.b.apply; a.b.call; a.b.bind;',
		// too few arguments
		'a.apply(); a.call(); a.bind();',
		// deep properties, too few arguments
		'a.b.apply(); a.b.call(); a.b.bind();',
		// bare function calls
		'apply(); call(); bind();',
		// bare function calls with arguments
		'apply(foo); call(foo); bind(foo);',
		// bare function calls, multiple arguments
		'apply(foo, bar); call(foo, bar); bind(foo, bar);',
		// bare Reflect.apply
		'Reflect.apply',
		// too few arguments
		'Reflect.apply()',
		// binding `this` to a literal, probably not a Function.prototype method call
		'a.apply("foo"); a.call("foo"); a.bind("foo");',
		'a.apply(4); a.call(5); a.bind(1);'
	],
	invalid: [
		// apply
		{
			code: 'a.apply(foo);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// apply, multiple args and deep property access
		{
			code: 'a.b.apply(foo, bar);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 5
			}]
		},
		// apply, this = null
		{
			code: 'a.apply(null);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// call
		{
			code: 'a.call(foo);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// call, multiple args and deep property access
		{
			code: 'a.b.call(foo, bar);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 5
			}]
		},
		// call, this = null
		{
			code: 'a.call(null);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// bind
		{
			code: 'a.bind(foo);',
			errors: [{
				message: bindMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// bind, multiple args and deep property access
		{
			code: 'a.b.bind(foo, bar);',
			errors: [{
				message: bindMessage,
				type: 'Identifier',
				line: 1,
				column: 5
			}]
		},
		// bind, this = null
		{
			code: 'a.bind(null);',
			errors: [{
				message: bindMessage,
				type: 'Identifier',
				line: 1,
				column: 3
			}]
		},
		// Reflect.apply
		{
			code: 'Reflect.apply(foo);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 9
			}]
		},
		// Reflect.apply, multiple args
		{
			code: 'Reflect.apply(foo.bar, baz);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 9
			}]
		},
		// Reflect.apply, this = null
		{
			code: 'Reflect.apply(foo, null);',
			errors: [{
				message: callMessage,
				type: 'Identifier',
				line: 1,
				column: 9
			}]
		}
	]
});
