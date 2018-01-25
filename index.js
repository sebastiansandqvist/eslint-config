module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions":  {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  "rules": {
    "comma-dangle": ["warn", "never"],
    "getter-return": "warn",
    "no-compare-neg-zero": "warn",
    // disallow assignment in conditional expressions
    "no-cond-assign": "error",
    // disallow use of console
    "no-console": "off",
    // disallow use of constant expressions in conditions
    "no-constant-condition": "warn",
    // disallow control characters in regular expressions
    "no-control-regex": "error",
    // disallow use of debugger
    "no-debugger": "warn",
    // disallow duplicate arguments in functions
    "no-dupe-args": "warn",
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": "error",
    // disallow a duplicate case label.
    "no-duplicate-case": "error",
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": "error",
    // disallow empty statements
    "no-empty": ["warn", { "allowEmptyCatch": true }],
    // disallow assigning to the exception in a catch block
    "no-ex-assign": "error",
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": "warn",
    // disallow unnecessary parentheses
    "no-extra-parens": "off",
    // disallow unnecessary semicolons
    "no-extra-semi": "warn",
    // disallow overwriting functions written as function declarations
    "no-func-assign": "error",
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": ["warn", "functions"],
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": "error",
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": "error",
    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": "error",
    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": "error",
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": "error",
    // disallow sparse arrays
    "no-sparse-arrays": "warn",
    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": "error",
    // disallow comparisons with the value NaN
    "use-isnan": "warn",
    // ensure JSDoc comments are valid
    "valid-jsdoc": "error",
    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": "error",
    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": "error",

    // -------------------------- BEST PRACTICES --------------------------

    // Enforces getter/setter pairs in objects
    "accessor-pairs": ["error", { "getWithoutSet": false }],
    // treat var statements as if they were block scoped
    "block-scoped-var": "off",
    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": "off",
    // require return statements to either always or never specify values
    "consistent-return": ["warn", { "treatUndefinedAsUnspecified": true }],
    // specify curly brace conventions for all control statements
    // "curly": [1, "multi"],
    "curly": "off",
    // require default case in switch statements
    "default-case": "warn",
    // encourages use of dot notation whenever possible
    "dot-notation": ["warn", { "allowKeywords": true }], // allows .catch in promises
    // enforces consistent newlines before or after dots
    "dot-location": "off",
    // require the use of === and !==
    "eqeqeq": "warn",
    // make sure for-in loops have an if statement
    "guard-for-in": "off",
    // disallow the use of alert, confirm, and prompt
    "no-alert": "warn",
    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": "error",
    // disallow else after a return in an if
    "no-else-return": "warn",
    // disallow use of labels for anything other then loops and switches
    "no-labels": "error",
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": "warn",
    // disallow use of eval()
    "no-eval": "error",
    // disallow adding to native types
    "no-extend-native": "error",
    // disallow unnecessary function binding
    "no-extra-bind": "error",
    // disallow fallthrough of case statements
    "no-fallthrough": "error",
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": "error",
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": "warn",
    // disallow use of eval()-like methods
    "no-implied-eval": "error",
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "error",
    // disallow usage of __iterator__ property
    "no-iterator": "error",
    // disallow unnecessary nested blocks
    "no-lone-blocks": "error",
    // disallow creation of functions within loops
    "no-loop-func": "warn",
    // disallow use of multiple spaces
    "no-multi-spaces": "error",
    // disallow use of multiline strings
    "no-multi-str": "warn",
    // disallow reassignments of native objects
    "no-native-reassign": "error",
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "error",
    // disallow use of new operator for Function object
    "no-new-func": "error",
    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": "error",
    // disallow use of (old style) octal literals
    "no-octal": "error",
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": "error",
    // disallow reassignment of function parameters
    "no-param-reassign": "off",
    // disallow use of process.env
    "no-process-env": "off",
    // disallow usage of __proto__ property
    "no-proto": "error",
    // disallow declaring the same variable more then once
    "no-redeclare": "error",
    // disallow use of assignment in return statement
    "no-return-assign": "off",
    // disallow use of `javascript:` urls.
    "no-script-url": "error",
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",
    // disallow use of comma operator
    "no-sequences": "error",
    // restrict what can be thrown as an exception
    "no-throw-literal": "error",
    // disallow usage of expressions in statement position
    "no-unused-expressions": "error",
    // disallow unnecessary .call() and .apply()
    "no-useless-call": "error",
    // disallow use of void operator
    "no-void": "off", // could be nice to conditionally return void somefunction() for consistent return rule
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": "off", // ["warn", { "terms": ["todo", "fix", "test"], "location": "start" }],
    // disallow use of the with statement
    "no-with": "error",
    // require use of the second argument for parseInt()
    "radix": "warn",
    // requires to declare all vars on top of their containing scope
    "vars-on-top": "off", // disabled: nice to declare vars within loops
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": ["warn", "inside"],
    // require or disallow Yoda conditions
    "yoda": ["warn", "never"],

      // -------------------------- NODE --------------------------

      // enforce return after a callback
      "callback-return": "off",
    // enforces error handling in callbacks (node environment)
    "handle-callback-err": "warn",
    // disallow mixing regular variable and require declarations
    "no-mixed-requires": ["warn", false],
    // disallow use of new operator with the require function
    "no-new-require": "error",
    // disallow string concatenation with __dirname and __filename
    "no-path-concat": "warn",
    // disallow process.exit()
    "no-process-exit": "off",
    // restrict usage of specified node modules
    "no-restricted-modules": "off",
    // disallow use of synchronous methods (off by default)
    "no-sync": "off",

      // -------------------------- STRICT --------------------------

    "strict": ["warn", "never"],

      // -------------------------- STYLISTIC ISSUES --------------------------

      // enforce spacing inside array brackets
    "array-bracket-spacing": "off",
    // enforce brace style
    "brace-style": ["warn", "stroustrup", {"allowSingleLine": true}],
    // require camel case names
    "camelcase": "warn",
    // enforce spacing before and after comma
    "comma-spacing": "warn",
    // enforce one true comma style
    "comma-style": ["warn", "last"],
    // require or disallow padding inside computed properties
    "computed-property-spacing": "off",
    // enforces consistent naming when capturing the current execution context
    "consistent-this": ["warn", "self"],
    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": "warn",
    // require function expressions to have a name
    "func-names": "off",
    // enforces use of function declarations or expressions
    "func-style": "off",
    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    "id-length": "off",
    // this option sets a specific tab width for your code
    // "indent": [2, "tab"],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    // enforces spacing between keys and values in object literal properties
    "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
    // enforces empty lines around comments
    "lines-around-comment": "off",
    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": ["error", "unix"],
    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": "off",
    // require a capital letter for constructors
    "new-cap": "off",
    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": "warn",
    // allow/disallow an empty newline after var statement
    "newline-after-var": "off",
    // disallow use of the Array constructor
    "no-array-constructor": "error",
    // disallow use of the continue statement
    "no-continue": "off",
    // disallow comments inline after code
    "no-inline-comments": "off",
    // disallow if as the only statement in an else block
    "no-lonely-if": "warn",
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": ["warn", false],
    // disallow multiple empty lines
    "no-multiple-empty-lines": ["warn", {"max": 3}],
    // disallow nested ternary expressions
    "no-nested-ternary": "off",
    // disallow use of the Object constructor
    "no-new-object": "error",
    // disallow space between function identifier and application
    "no-spaced-func": "error",
    // disallow the use of ternary operators
    "no-ternary": "off",
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["warn", { "skipBlankLines": true }],
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": "off",
    // disallow the use of Boolean literals in conditional expressions
    "no-unneeded-ternary": "warn",
    // require or disallow padding inside curly braces
    "object-curly-spacing": "off", // opt
    // allow just one var statement per function
    "one-var": ["warn", "never"],
    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": "off",
    // enforce operators to be placed before or after line breaks
    "operator-linebreak": ["error", "after"],
    // enforce padding within blocks
    "padded-blocks": "off",
    // require quotes around object literal property names
    "quote-props": "off",
    // specify whether double or single quotes should be used
    "quotes": "off",
    // require identifiers to match the provided regular expression
    "id-match": "off",
    // enforce spacing before and after semicolons
    "semi-spacing": ["warn", {"before": false, "after": true}],
    // require or disallow use of semicolons instead of ASI
    "semi": ["warn", "always"],
    // sort variables within the same declaration block
    "sort-vars": "off",
    // require a space after certain keywords
    "keyword-spacing": ["warn", {"before": true, "after": true}],
    // require or disallow space before blocks
    "space-before-blocks": ["warn", "always"],
    // require or disallow space before function opening parenthesis
    "space-before-function-paren": ["warn", "never"],
    // require or disallow spaces inside parentheses
    "space-in-parens": ["warn", "never"],
    // require spaces around operators
    "space-infix-ops": ["warn", {"int32Hint": false}],
    // Require or disallow spaces before/after unary operators
    "space-unary-ops": ["warn", { "words": true, "nonwords": false }],
    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": ["warn", "always"],
    // require regex literals to be wrapped in parentheses
    "wrap-regex": "warn",

    // -------------------------- ES6 --------------------------

    // require parens in arrow function arguments
    "arrow-parens": "error",
    // require space before/after arrow function's arrow
    "arrow-spacing": "error",
    // verify super() callings in constructors
    "constructor-super": "error",
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": ["warn", {"before": false, "after": true}],
    // disallow modifying variables of class declarations
    "no-class-assign": "error",
    // disallow modifying variables that are declared using const
    "no-const-assign": "error",
    // disallow unnecessary return await
    "no-return-await": "warn",
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": "error",
    // require let or const instead of var
    "no-var": "off",
    // require method and property shorthand syntax for object literals
    "object-shorthand": "off",
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": "warn",
    // suggest using the spread operator instead of .apply()
    "prefer-spread": "off",
    // suggest using Reflect methods where applicable
    "prefer-reflect": "off",
    // Suggest using template literals instead of string concatenation.
    "prefer-template": "off",
    // disallow generator functions that do not have yield
    "require-yield": "off",

    // -------------------------- LEGACY --------------------------

    "max-depth": ["warn", 15],
    "max-len": "off",

    // -------------------------- VARIABLES --------------------------

    // enforce or disallow variable initializations at definition
    "init-declarations": "off",
    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "off",
    // disallow deletion of variables
    "no-delete-var": "error",
    // disallow labels that share a name with a variable
    "no-label-var": "error",
    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",
    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "warn",
    // disallow use of undefined when initializing variables
    "no-undef-init": "warn",
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "warn",
    // disallow use of undefined variable
    "no-undefined": "off",
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": ["warn", {"vars": "local", "args": "after-used"}],
    // disallow use of variables before they are defined
    "no-use-before-define": "warn",

    // -------------------------- MANUAL CHANGES --------------------------
    "no-prototype-builtins": "warn",
    "no-unsafe-finally": "warn",
    "no-case-declarations": "warn",
    "no-empty-pattern": "error",
    "no-extra-label": "error",
    "no-self-assign": "warn",
    "no-unused-labels": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn"
  }
};
