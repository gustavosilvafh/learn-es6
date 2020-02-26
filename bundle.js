"use strict";

var usuario = {
  nome: 'Gustavo',
  idade: 18,
  endereco: {
    cidade: 'Guarapuava',
    estado: 'SP'
  }
};

const {nome, idade, endereco: {cidade} } = usuario;


function mostraUsuario(arrayDeUsuario){
  return `Usuário: ${nome} \n Idade: ${idade} \n Cidade: ${cidade}`;

}

console.log(mostraUsuario(usuario));
