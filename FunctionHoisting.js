foo();
var foo = function() {
    console.log("print 1");
}
// Uncaught TypeError: foo is not a function

bar();
function bar() {
    console.log("print 2");
}
// print 2
