function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b * a;
}
console.log("Arbaz Ansari");
// module.exports = add;
// module.exports = sub; // sub will overwrite add

function sayHelloFromMath() {
    return "Hello from Math";
}

// to solve the issue
module.exports = {
    addfn: add,
    subfn: sub,
    mulfn: mul,
    sayHelloFromMath: sayHelloFromMath,
};
