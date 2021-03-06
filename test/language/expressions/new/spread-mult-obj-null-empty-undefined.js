// This file was procedurally generated from the following sources:
// - src/spread/mult-obj-null-empty-undefined.case
// - src/spread/default/member-expr.template
/*---
description: Object Spread operator following other arguments with null, undefined and empty object (`new` operator)
esid: sec-new-operator-runtime-semantics-evaluation
es6id: 12.3.3.1
features: [object-spread]
flags: [generated]
includes: [compareArray.js]
info: |
    MemberExpression : new MemberExpression Arguments

    1. Return EvaluateNew(MemberExpression, Arguments).

    12.3.3.1.1 Runtime Semantics: EvaluateNew

    6. If arguments is empty, let argList be an empty List.
    7. Else,
       a. Let argList be ArgumentListEvaluation of arguments.
       [...]

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/

var callCount = 0;

new function(obj) {
  assert.sameValue(obj.a, 1);
  assert.sameValue(obj.b, 2);
  assert.sameValue(obj.c, 3);
  assert.sameValue(obj.d, 4);
  assert(compareArray(Object.keys(obj), ["a", "b", "c", "d"]));
  callCount += 1;
}({a: 1, ...null, b: 2, ...undefined, c: 3, ...{}, ...{...{}}, d: 4});

assert.sameValue(callCount, 1);
