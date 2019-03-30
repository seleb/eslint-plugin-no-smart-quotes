# Prevent the use of curly quote/apostrophe characters (no-smart-quotes)

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
