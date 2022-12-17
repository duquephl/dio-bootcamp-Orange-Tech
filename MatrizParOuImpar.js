// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.
// - ".split(''): transforma a entrada em um array separado por aspas simples

let arr = gets().split('');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {                              
        arr = changePosition(arr, i, 0);
    }
}

print(arr);

function changePosition(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}