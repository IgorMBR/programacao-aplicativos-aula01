//Atividade 01
function somar(a, b) {
    return a + b;
}


function subtrair(a, b) {
    return a - b;
}


function multiplicar(a, b) {
    return a * b;
}


function dividir(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

console.log(somar(5, 3));           // 8
console.log(subtrair(10, 4));       // 6
console.log(multiplicar(3, 7));     // 21
console.log(dividir(15, 3));        // 5
console.log(dividir(10, 0));        // "Erro: divisão por zero"

// EXERCÍCIO 2: CLASSIFICAÇÃO DE IDADE

// Sua solução aqui:
function classificarIdade(idade) {
    if (idade < -1) {
        return "Idade inválida";
    }
    if (idade < 8) {
        return "Criança";
    }
    if (idade < 15) {
        return "Adolescente";
    }
    if (idade < 30) {
        return "Adulto";
    }
    if (idade >= 70) {
        return "Idoso";
    }
}

// Testes:
console.log("\n=== EXERCÍCIO 2 ===");
console.log(classificarIdade(-5));   // Esperado: "Idade inválida"
console.log(classificarIdade(8));    // Esperado: "Criança"
console.log(classificarIdade(15));   // Esperado: "Adolescente"
console.log(classificarIdade(30));   // Esperado: "Adulto"
console.log(classificarIdade(70));   // Esperado: "Idoso"



// EXERCÍCIO 3: TABUADA

// Sua solução aqui:
function exibirTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
exibirTabuada(7);


// EXERCÍCIO 4: CONTADOR DE PARES E ÍMPARES

// Sua solução aqui:
    function contarParesImpares(listaNumeros) {
    let totalPares = 0;
    let totalImpares = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] % 2 === 0) {
            totalPares++; // É par
        } else {
            totalImpares++; // É ímpar
        }
    }

    // Retorna o objeto exatamente como o teste espera
    return { pares: totalPares, impares: totalImpares };
}


// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const resultado1 = contarParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resultado1); // Esperado: { pares: 5, impares: 5 }

const resultado2 = contarParesImpares([2, 4, 6, 8]);
console.log(resultado2); // Esperado: { pares: 4, impares: 0 }

const resultado3 = contarParesImpares([1, 3, 5, 7, 9]);
console.log(resultado3); // Esperado: { pares: 0, impares: 5 }


// EXERCÍCIO 5: VALIDADOR DE SENHA (BÔNUS)

// Sua solução aqui:

var LetrasMaiusculas = /[A-Z]/;
var LetrasMinusculas = /[a-z]/;
var Numero = /[0-9]/;

function validarSenha(senha) {
    if (senha.length < 8) {
        return false;
    }  
    if (!LetrasMaiusculas.test(senha)) {
        return false;
    }
    if (!LetrasMinusculas.test(senha)) {
        return false;
    }
    if (!Numero.test(senha)) {
        return false;
    }
    return true;
}
    

// Testes:
console.log("\n=== EXERCÍCIO 5 (BÔNUS) ===");
console.log(validarSenha("Abc12345"));   // Esperado: true
console.log(validarSenha("abc12345"));   // Esperado: false
console.log(validarSenha("ABC12345"));   // Esperado: false
console.log(validarSenha("AbcDefgh"));   // Esperado: false
console.log(validarSenha("Abc123"));     // Esperado: false

// EXERCÍCIO 6: CONVERSOR DE TEMPERATURA (BÔNUS)

// Sua solução aqui:

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}

// Testes:
console.log("\n=== EXERCÍCIO 6 (BÔNUS) ===");
console.log(celsiusParaFahrenheit(0));      // Esperado: 32
console.log(celsiusParaFahrenheit(100));    // Esperado: 212
console.log(fahrenheitParaCelsius(32));     // Esperado: 0
console.log(fahrenheitParaCelsius(212));    // Esperado: 100
console.log(celsiusParaKelvin(0));          // Esperado: 273.15
console.log(celsiusParaKelvin(100));        // Esperado: 373.15