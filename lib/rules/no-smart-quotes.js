/**
 * @fileoverview Prevent the use of curly quote/apostrophe characters
 * @author Sean S. LeBlanc
 */
"use strict";

const matchAll = require("string.prototype.matchall")

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevent the use of curly quote/apostrophe characters",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: "code",
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        let SMART_QUOTES_REGEX = /[“”‘’]/g;
        let REPLACEMENTS = {
            '“': '"',
            '”': '"',
            '‘': "'",
            '’': "'",
        };

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        function handle(node) {
            if (typeof node.value !== "string") {
                return;
            }

            const original = node.raw || node.value;
            const matches = Array.from(matchAll(original, SMART_QUOTES_REGEX));

            if (matches.length === 0) {
                return;
            }

            context.report({
                node,
                message: "Strings must use straight quotes.",
                fix(fixer) {
                    const stringQuoteType = original.charAt(0);

                    let fixed = ""
                    let matchIndex = 0;

                    for (let index = 0; index < original.length; index++) {
                        let char = original.charAt(index);
                        const match = matches[matchIndex];

                        if (match && index === match.index) {
                            matchIndex++;

                            let replacement = REPLACEMENTS[match[0]];

                            if (replacement) {
                                if (replacement === stringQuoteType) {
                                    replacement = '\\' + replacement;
                                }

                                char = replacement;
                            }
                        }

                        fixed += char;
                    }

                    return [
                        fixer.replaceText(node, fixed),
                    ];
                },
            });
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            JSXText: handle,
            Literal: handle,
        };
    }
};
