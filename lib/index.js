/**
 * @fileoverview Prevent the use of curly quote/apostrophe characters
 * @author Sean S. LeBlanc
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");
const pkg = require('../package.json');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports = {
    meta: {
        name: pkg.name,
        version: pkg.version,
        namespace: pkg.name.replace('eslint-plugin-', ''),
    },
	rules: requireIndex(__dirname + "/rules"),
};



