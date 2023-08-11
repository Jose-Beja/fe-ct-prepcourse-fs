/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x = 3, y = 2) {
   // Retorna el resultado de su suma.
   // Tu código:
   return (x + y);
}

function resta(x = 5, y = 3) {
   // Retorna el resultado de la resta.
   // Tu código:
   return (x - y)
}

function divide(x = 4, y = 2) {
   // Retorna el resultado de su división.
   // Tu código:
   return (x / y )
}

function multiplica(x=2, y=2) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   return (x*y)
}

function obtenerResto(x=20, y=5) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   return(x%y)
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
