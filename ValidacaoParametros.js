// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var isValid = function(s) {    
    const stack = []; 

 //TODO: implemente a lógica de caracteres válidos e retorne se a string é valida ou não.
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
        } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;

}