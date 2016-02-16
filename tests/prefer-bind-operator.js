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
	],
	invalid: [
	]
});
