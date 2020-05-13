# eslint-plugin-no-smart-quotes

Prevent the use of curly quote/apostrophe characters

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-smart-quotes`:

```
$ npm install eslint-plugin-no-smart-quotes --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-smart-quotes` globally.

## Usage

Add `no-smart-quotes` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-smart-quotes"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-smart-quotes/no-smart-quotes": "error"
    }
}
```
