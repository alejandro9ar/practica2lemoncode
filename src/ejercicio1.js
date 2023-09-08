const head = ([firstElement]) => firstElement;

const tail = ([, ...rest]) => rest;

const init = (arr) => arr.slice(0, -1);

const last = (arr) => arr[arr.length - 1];

function ejercicio1() {
    console.log("***************** EJERCICIO 1 ****************");
    var array = ["a","b","c","d"];
    console.log("array:", array);
    console.log("head(testArray): ",head(array));
    console.log("tail(testArray): ",tail(array));
    console.log("init(testArray): ",init(array));
    console.log("last(testArray): ",last(array));
}