// Variables para almacenar los valores de la operación
let operacion = '';
let valorActual = '';

// Funciones flecha para operaciones básicas
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error';

// Función para ajustar la altura de la caja de texto
const ajustarAltura = () => {
    const resultadoInput = document.getElementById('resultado');
    resultadoInput.style.height = 'auto'; // Restablecemos la altura para recalcular
    resultadoInput.style.height = `${resultadoInput.scrollHeight}px`; // Ajustamos la altura según el contenido
};

// Función para agregar números y caracteres al input
const agregar = num => {
    valorActual += num;
    document.getElementById('resultado').value = valorActual;
    ajustarAltura();  // Ajustar altura después de agregar contenido
};

// Función para limpiar el input
const limpiar = () => {
    valorActual = '';
    operacion = '';
    document.getElementById('resultado').value = '';
    ajustarAltura();  // Restablecemos la altura
};

// Función para borrar el último dígito
const borrar = () => {
    valorActual = valorActual.slice(0, -1);
    document.getElementById('resultado').value = valorActual;
    ajustarAltura();  // Ajustar altura tras borrar
};

// Función para operar
const operar = operador => {
    if (valorActual === '') return;  // Evitar errores si no hay valores
    operacion = `${valorActual} ${operador}`;
    valorActual = '';
    document.getElementById('resultado').value = operacion;
    ajustarAltura();  // Ajustar altura tras la operación
};

// Función para calcular el resultado
const calcular = () => {
    if (operacion === '') return;  // Evitar errores si no hay operación
    let [num1, operador] = operacion.split(' ');
    num1 = parseFloat(num1);
    const num2 = parseFloat(valorActual);

    let resultado;
    switch (operador) {
        case '+':
            resultado = sumar(num1, num2);
            break;
        case '-':
            resultado = restar(num1, num2);
            break;
        case '*':
            resultado = multiplicar(num1, num2);
            break;
        case '/':
            resultado = dividir(num1, num2);
            break;
        default:
            resultado = 'Error';
    }

    document.getElementById('resultado').value = `${operacion} ${num2} = ${resultado}`;
    valorActual = resultado.toString();
    ajustarAltura();  // Ajustar altura tras el cálculo
};
