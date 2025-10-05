let base = parseFloat(prompt("Ingresa la base del terreno en metros"));
let altura = parseFloat(prompt("Ingresa la altura del terreno en metros"));

let area = base * altura;
let perimetro = 2 * (base + altura);

console.log(`El área del terreno es ${area} m², y el perímetro del terreno es ${perimetro} metros`);
