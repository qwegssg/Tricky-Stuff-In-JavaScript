function Sum(...args) {
    this.result = 0;
    for (let item of args) {
        this.result += item;
    }
}

Sum.prototype.valueOf = function() {
    return this.result;
}

// execution:
var sum = new Sum(1, 2, 3);
console.log(sum.valueOf());