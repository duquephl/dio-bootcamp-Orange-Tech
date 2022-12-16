// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
var a = parseInt(gets());
var N = parseInt(gets());
var soma = 0;
for (var i = 1; i <= N; i++) {
    if (i % a === 0) {
        soma += i;
    }
}
print(soma);
