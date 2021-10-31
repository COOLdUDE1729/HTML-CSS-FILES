// global variable
var x = 200;

console.log(x);

function a() {
    // local variable
    var j = "shivam";
    console.log(j);
}
a();
// variable j can't be accessed outside function -a
console.log(j);