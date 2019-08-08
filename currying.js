function add(a, b, c) {
    return a + b + c;
}

function curryingAdd(fn, argLen, currArgs) {
    return function(...args) {

        console.log("args: " + args);

        if (currArgs != undefined) {
            args = args.concat(currArgs);
        }
        // end of recursion:
        if (args.length == argLen) {

            console.log("this: " + this);

            // the value of "this" is depended on the execution context!
            // "this" here refers to the Window object
            return fn.apply(this, args);
        } else {
            return curryingAdd(fn, argLen, args);
        }
    }
}

var sum3 = curryingAdd(add, 3);

console.log(sum3(1, 2, 3)); // 6
console.log(sum3(1, 2)(3)); // 6
console.log(sum3(1)(2, 3)); // 6
console.log(sum3(1)(2)(3)); // 6
