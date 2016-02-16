/**
 * @fileoverview Suggest using the bind operator over Function methods or Reflect.apply.
 * @author Erik Desjardins
 * @copyright 2016 Erik Desjardins. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

module.exports = function(context) {
	return {
		CallExpression: function(node) {
			if (!node.arguments.length) {
				return;
			}

			var firstArg = node.arguments[0];
			if (firstArg.type === 'Literal' && firstArg.value !== null) {
				// probably $.fn.bind or something else
				return;
			}

			if (node.callee.type !== 'MemberExpression') {
				return;
			}

			var method = node.callee.property;

			if (method.name === 'call' || method.name === 'apply') {
				context.report({
					node: method,
					message: 'Expected bind operator.'
				});
			} else if (method.name === 'bind') {
				context.report({
					node: method,
					message: 'Expected bind operator or arrow function.'
				});
			}
		}
	};
};
