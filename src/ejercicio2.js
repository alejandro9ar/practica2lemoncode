const concat = (a, b) => [...a, ...b];

const concat_multiple = (...arrays) => [].concat(...arrays);

function ejercicio2() {
    console.log("***************** EJERCICIO 2 ****************");
    var array1 = ["a","b","c","d"];
    var array2 = ["e","f","g","h"];
    var array3 = ["i","j"];
    console.log("array1:", array1);
    console.log("array2:", array2);
    console.log("array3:", array3);
    console.log("concat(array1,array2):",concat(array1,array2));
    console.log("concat(array1,array2,array3):",concat_multiple(array1,array2,array3));
}