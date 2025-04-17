import { writeFileSync } from 'fs';
const array = [2,10,"a",4,"b",6,"d",true,"e",9,1,"z",12,"r", "c", false]

function validarCondicion(condicion) {
    return condicion === "number" || condicion === "boolean" || condicion === "string";
}

function validarArray(array) {
    return Array.isArray(array) && array.length !== 0;
}

function filterAndSortArray(array, condicion) {
    if (!validarCondicion(condicion) || !validarArray(array)) {
        return "Condicion no valida";
    }

    const arrayFiltrado = array.filter(item => typeof item === condicion);
    const arrayOrdenado = arrayFiltrado.sort((a, b) => {
        if (condicion === "number" || condicion === "boolean") {
            return a - b;
        } else {
            return a.localeCompare(b);
        }
    });

    writeFileSync('output.txt', JSON.stringify(arrayOrdenado, null, 2));
    
    return arrayOrdenado;
}

console.table(filterAndSortArray(array, "string"));


