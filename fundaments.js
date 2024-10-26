//module1.js
const {inicioSesion, articulos_comprados} = require('./module1.js')

inicioSesion('paul.cabrera@epn.edu.ec','1751431964');
console.log(`Los articulos adquiridos son: ${articulos_comprados}`);

//module2.js
const { login, status } = require('./module2');

login(3); 
console.log(status);

//modulo3.js
import calcular_precio from './module3.js';
console.log(calcular_precio(15.62));

import {calcular_precio} from './module3.js';
console.log(calcular_precio(105.96));
