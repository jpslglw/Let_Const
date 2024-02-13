//// Let and Const
var PI = 3.14;
PI = 42; // stop me from doing this!

// Solution:
const PI = 3.14;

//// What is the difference between var and let?
// var is a window object which can be reassignedd and redeclared as well as accessed outside a block. However it is scoped inside a function if declared in function.
// let is a block-scoped (defined only in block) variable which can get reassigned but not redeclared like var.

//// What is the difference between var and const?
// const is also a block-scoped (defined only in block) variable, which can not get reassigned or redeclared like var.

//// What is the difference between let and const?
// the only difference is that one can not reassign with const like let.

//// What is hoisting?
// Is a way to explain how the JS compiler works. Hoisting means a variable is defined first (hoisted) during compilation before value assignment. This is true for var.