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

var ruleTester = new RuleTester();
ruleTester.run("no-smart-quotes", rule, {
    valid: [
        `var string = "It's a straight apostrophe!";`,
        `var string = 'They said "here are straight quotes!"';`,
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
    }]
});
