/**
 * @fileoverview Suggest using the bind operator over Function methods or Reflect.apply.
 * @author Erik Desjardins
 * @copyright 2016 Erik Desjardins. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

var rule = require('../rules/plugin-prefer-bind-operator');
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();
ruleTester.run('plugin-prefer-bind-operator', rule, {
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
		'apply(foo, bar); call(foo, bar); bind(foo, bar);'
	],
	invalid: [
	]
});
