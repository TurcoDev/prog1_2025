// crea un un array con 2 objetos de usuarios y luego guardalos en un archivo json utilizando metodo sincronico
import fs from 'fs';

const usuarios = [
  { id: 1, nombre: 'Juan', edad: 30 },
  { id: 2, nombre: 'Maria', edad: 25 }
];

fs.writeFileSync('usuarios.json', JSON.stringify(usuarios, null, 2));

// agrega un tercer usuario al archivo json
const nuevoUsuario = { id: 3, nombre: 'Pedro', edad: 28 };
const usuariosExistentes = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
usuariosExistentes.push(nuevoUsuario);
fs.writeFileSync('usuarios.json', JSON.stringify(usuariosExistentes, null, 2));

// luego lee el archivo json y muestra los usuarios en consola
const usuariosLeidos = JSON.parse(fs.readFileSync('usuarios.json', 'utf-8'));
console.log(usuariosLeidos);

