import { Gato } from './gato.mjs';

let gato1 = new Gato(100,100,100);
console.log(gato1.estado());
gato1.alimentar();
console.log(gato1.estado());
gato1.dormir();
console.log(gato1.estado());
gato1.jugar();
console.log(gato1.estado());