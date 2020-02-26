// REST

const usuario = {nome: 'Gustavo', idade: 18, empresa: 'HalleyCode'}

const { nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

