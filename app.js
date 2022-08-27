/*
Caso 1

Dado este IBAN:

ES6600190020961234567890

Validar que se informa con dos letras, y los números correspondientes.
*/

const pattern1 = /^[A-Z]{2}\d{22}$/;

var iban1 = "ES6600190020961234567890";

console.log(pattern1.test(iban1));

/*  PREGUNTAR POR QUÉ NO FUNCIONA

function validateIban() {
    if (pattern1.test === true) {
        console.log("El IBAN introducido (" + iban1 + ") es válido");
    } else {
        console.log("El IBAN introducido (" + iban1 + ") no es válido, por favor, revisa los datos");
    }
}

validateIban(iban1)
*/



//-------------------------------------------------------------------------------------------------------------------------------------------//

/*
Caso 2

Vamos a permitir que se incluyan espacios en ciertas áreas, daremos por valida estás dos cadenas:

ES6600190020961234567890

ES66 0019 0020 9612 3456 7890
*/

const pattern2 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){4}\d{4}$/;

var iban2 = "ES6600190020961234567890";
var iban3 = "ES66 0019 0020 9612 3456 7890";

console.log(pattern2.test(iban2), pattern2.test(iban3));



//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Caso 3

Vamos a extraer el código de páis y el dígito de control.
*/
const pattern3 = /^([A-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;


console.log(pattern3.exec(iban2), pattern3.exec(iban3));



//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Validar matrícula coche
Caso 1
Vamos a validar una matrícula de coche moderna, esta compuesta por 4 digitos y tres letras, patrones a validar:

2021 GMD

2345-GMD

4532BDB

0320-AAA
*/

const pattern4 = /^\d{4}(\s|-)?[A-Z]{3}$/;

var matricula1 = "2021 GMD";
var matricula2 = "2345-GMD";
var matricula3 = "4532BDB";
var matricula4 = "0320-AAA";

console.log(pattern4.test(matricula1), pattern4.test(matricula2), pattern4.test(matricula3), pattern4.test(matricula4));




//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Caso 2

Vamos a extraer por un lado la parte numérica y por otro las letras.
*/


const pattern5 = /^(\d{4})(\s|-)?([A-Z]{3})$/;


console.log(pattern5.exec(matricula1), pattern5.exec(matricula2), pattern5.exec(matricula3), pattern5.exec(matricula4));






//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Extraer imágenes de un fichero HTML

Caso 1

De una sola linea extraer el contenido de src
*/

var enlace = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

const pattern6 = /^<img\ssrc="(https:\/\/.{2,}\.png)"\/>$/;

console.log(pattern6.exec(enlace));


//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Caso 2

De un HTML extraer todos los src de todos los objetos img:

<html>
  <body>
    <img
      src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"
    />
    <h1>ejemplo</h1>
    <img
      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
    />
  </body>
</html>
*/


var enlace2 = '<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>';
var enlace3 = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

const pattern7 = /^<img\ssrc="(https:\/\/.{2,}\.(png|jpg))"\/>$/;

console.log(pattern7.exec(enlace2));
console.log(pattern7.exec(enlace3));

// DUDA: Me gustaría saber como llamar a ese enlace desde Js si realmente lo tuviese en el HTML (en vez de escribirlo yo desde aquí como un string) y ya recortarlo desde aquí 





//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Validar sintaxis tarjeta de crédito
En nuestra aplicación tenemos un apartado para que el usuario pueda introducir los datos de su tarjeta de crédito máster card, para ello vamos a tener en cuenta:

Que una máster card tiene una longitud de 16 caracteres (numeros).
Que tiene que empezar con 50,51,52,53,54,55.
Qué lo normal es que se agrupen en conjuntos de 4 digitos.
Ejemplo:

5299 6400 0000 0000

Caso 1

Vamos a validar los siguiente formatos (todos válidos)

5299 6400 0000 0000

5299-6400-0000-0000

5299640000000000
*/

var cardType = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

const pattern8 = /^(\d{4}(\s|-)?){4}$/;

let validateCreditCard = () => {
    for (let i = 0; i < cardType.length; i++) {
        console.log(pattern8.test(cardType[i]));
    }
};
validateCreditCard(cardType);

//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Caso 2

Vamos a extraer cada grupo de cuatro digitos.
*/

var cardType = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];

const pattern9 = /^(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})(\s|-)?(\d{4})?$/;

var cutCreditCard = () => {
    for (let i = 0; i < cardType.length; i++) {
        console.log(pattern9.exec(cardType[i]));
    }
};
cutCreditCard(cardType);


/*OTRA FORMA DE EXTRAERLOS SIN QUE EXTRAIGA GUIONES O ESPACIOS*/

var card1 = "5299 6400 0000 0000";
var card2 = "5299-6400-0000-0000";
var card3 = "5299640000000000";

const pattern10 = /^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/;
const pattern11 = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;
const pattern12 = /^(\d{4})(\d{4})(\d{4})(\d{4})$/;

console.log(pattern10.exec(card1));
console.log(pattern11.exec(card2));
console.log(pattern12.exec(card3));




//-------------------------------------------------------------------------------------------------------------------------------------------//
/*
Buscar Expresiones regulares
*/

/*
Comprobar si una clave es fuerte o no:

Complejo: que tenga al menos los siguiente caracteres: una minuscula, una mayuscula, un numero y un caracter especial.
*/

var contraseñaFacil = "Jes90#";

const pattern13 = /[a-z]+[A-Z]+\d+((_)+)?\W+/;

console.log(pattern13.test(contraseñaFacil));   //DUDA: NO FUNCIONA//


//Moderado: Que tenga al menos los siguientes caracteres: una minuscula, una mayuscula, un numero y al menos 8 caracteres de longitud.//

var contraseñaDificil = "Jesus1990#";

const pattern14 = /([a-z]+[A-Z]+\d+((_)+)?\W+){8,}/;

console.log(pattern14.test(contraseñaDificil));    //DUDA: NO FUNCIONA//


//Validar que una URL esta bien formada (por ejemplo https://www.lemoncode.net ó www.lemoncode.net ó lemoncode.net).//

var url1 = "https://www.lemoncode.es";
var url2 = "www.lemoncode.net";
var url3 = "lemon_code122.com";

const pattern15 = /^(https:\/\/)?(www.)?\w+\.[a-z]+$/;

console.log(pattern15.test(url1));
console.log(pattern15.test(url2));
console.log(pattern15.test(url3));

//Validar que un color en Hexadecimal esta bien formado.//

var hex = "#77aA4O"

const pattern16 = /^#(\d|[a-z]|[A-Z]){6}$/;

console.log(pattern16.test(hex))
