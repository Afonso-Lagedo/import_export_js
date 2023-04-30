const funcoes = require ('./aux-functions');

console.log(funcoes);

//console.log(funcoes.gets());

//destruindo objeto exemplo

const pessoa ={
	nome:'Afonso'
};

const nome = pessoa.nome;

//idem já realizando procedimento na importação 

const{ gets, print } = require('./aux-functions');

print(gets());