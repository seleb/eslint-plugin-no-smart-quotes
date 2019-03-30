/**
 * @fileoverview Prevent the use of curly quote/apostrophe characters
 * @author Sean S. LeBlanc
 */
"use strict";

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
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            Literal(node) {
                if (typeof node.value !== "string") {
                    return;
                }

                const match = node.raw.match(/^(.*(“|”|‘|’).*)$/);

                if (match) {
                    const offendingPunctuation = match[2];
                    const matchedString = match[1];
                    const alternate = {
                        '“': '"',
                        '”': '"',
                        '‘': "'",
                        '’': "'",
                    } [offendingPunctuation];

                    if (typeof matchedString !== 'undefined' && typeof offendingPunctuation !== 'undefined') {
                        const message = `Strings must use straight quotes in: ${ matchedString}. Use ${alternate} instead.`;
                        context.report({
                            node,
                            message: message,
                            data: {
                                offendingPunctuation
                            }
                        });
                    }
                }
            }
        };
    }
};
