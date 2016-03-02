# eslint-plugin-prefer-bind-operator [![Build Status](https://travis-ci.org/erikdesjardins/eslint-plugin-prefer-bind-operator.svg?branch=master)](https://travis-ci.org/erikdesjardins/eslint-plugin-prefer-bind-operator)

Suggest using the bind operator over Function methods or Reflect.apply.

Warns for the following:

```js
// with at least one argument
var foo = bar.bind(/* ... */);
foo.call(/* ... */);
foo.apply(/* ... */);
Reflect.apply(foo);
```

## Usage

`npm i --save-dev eslint-plugin-prefer-bind-operator`

```json
{
	"plugins": [
		"prefer-bind-operator"
	],
	"rules": {
		"prefer-bind-operator/prefer-bind-operator": 2
	}
}
```
