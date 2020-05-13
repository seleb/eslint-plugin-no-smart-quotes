# Prevent the use of curly quote/apostrophe characters (no-smart-quotes)

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.

## Rule Details

This rule aims to prevent the use of curly quote/apostrophe characters in order to provide more typographic simplicity/consistency.

Examples of **incorrect** code for this rule:

```js
const a = "It's a straight apostrophe!";
const b = 'They said "here are straight quotes!"';
```

Examples of **correct** code for this rule:

```js
const a = "It's a straight apostrophe!";
const b = 'They said "here are straight quotes!"';
```

## When Not To Use It

When you prefer to use the fancier typographic characters.
