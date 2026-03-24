/**
 * @fileoverview Prevent the use of curly quote/apostrophe characters
 * @author Sean S. LeBlanc
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-smart-quotes"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    languageOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            },
        },
    },
});
ruleTester.run("no-smart-quotes", rule, {
    valid: [
        `var string = "It's a straight apostrophe!";`,
        `var string = 'They said "here are straight quotes!"';`,
        `<>"Here's some quotes!"</>`,
        `<div attr="It's a smart apostrophe!" />`,
        "var template = `It's a straight apostrophe!`;",
        'var template = `They said "here are straight quotes!"`;',
        `<template>"Here's some quotes!"</template>`,
    ],
    invalid: [{
        code: "var string = 'It’s a smart apostrophe!';",
        output: "var string = 'It\\'s a smart apostrophe!';",
        errors: [{
            message: `Strings must use straight quotes.`,
        }]
    }, {
        code: "var string = 'They said “here are smart quotes!”';",
        output: "var string = 'They said \"here are smart quotes!\"';",
        errors: [{
            message: `Strings must use straight quotes.`,
        }],
    }, {
        code: `<>“Here’s some quotes!”</>`,
        output: `<>"Here's some quotes!"</>`,
        errors: [{
            message: `Strings must use straight quotes.`,
        }],
    }, {
        code: `<div attr="It’s a smart apostrophe!" />`,
        output: `<div attr="It's a smart apostrophe!" />`,
        errors: [{
            message: `Strings must use straight quotes.`,
        }],
    }, {
        code: "var template = `It’s a straight apostrophe!`;",
        output: "var template = `It's a straight apostrophe!`;",
        errors: [{
            message: `Strings must use straight quotes.`,
        }],
    }, {
        code: "var template = `They said “here are smart quotes!”`;",
        output: 'var template = `They said "here are smart quotes!"`;',
        errors: [{
            message: `Strings must use straight quotes.`,
        }],
    }, {
        code: `<template>“Here’s some quotes!”</template>`,
        output: `<template>"Here's some quotes!"</template>`,
        errors: [
            {
                message: 'Strings must use straight quotes.',
            },
        ],
    }],
});
