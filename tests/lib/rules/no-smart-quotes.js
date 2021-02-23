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
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    }
});
ruleTester.run("no-smart-quotes", rule, {
    valid: [
        `var string = "It's a straight apostrophe!";`,
        `var string = 'They said "here are straight quotes!"';`,
        `<>"Here's some quotes!"</>`,
    ],
    invalid: [{
        code: "var string = 'It’s a smart apostrophe!';",
        output: "var string = 'It\\'s a smart apostrophe!';",
        errors: [{
            message: `Strings must use straight quotes.`,
            type: "Literal"
        }]
    }, {
        code: "var string = 'They said “here are smart quotes!”';",
        output: "var string = 'They said \"here are smart quotes!\"';",
        errors: [{
            message: `Strings must use straight quotes.`,
            type: "Literal"
        }],
    }, {
        code: `<>“Here’s some quotes!”</>`,
        output: `<>"Here's some quotes!"</>`,
        errors: [{
            message: `Strings must use straight quotes.`,
            type: "JSXText"
        }],
    }]
});
