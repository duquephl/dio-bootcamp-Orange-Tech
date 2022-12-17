// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

var string = gets().split('');

switch (string[0]) {
    case '(':
        if (string[1] == ')') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '[':
        if (string[1] == ']') {
            print('true');
        } else {
            print('false');
        }
        break;

    case '{':
        if (string[1] == '}') {
            print('true');
        } else {
            print('false');
        }
        break;

    default:
        print('false');
        break;
}