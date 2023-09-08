function clone(source) {
    return { ...source };
}

function merge(source, target) {
    return { ...target, ...source };
}

function ejercicio3() {
    console.log("***************** EJERCICIO 3 ****************");
    const object1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
    const object2 = { name: "Luisa", age: 31, married: true };
    console.log("object1:", object1);
    console.log("object2:", object2);
    console.log("clone(object1):",clone(object1));
    console.log("merge(object1,object2):",merge(object1,object2));
}