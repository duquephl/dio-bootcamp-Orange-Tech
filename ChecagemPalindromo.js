
let palavra = gets();
print(checaPalindromo(palavra));

function checaPalindromo(palavra) {
    for (var i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] != palavra[palavra.length - i - 1]) {
            return 'FALSE';
        } else {
            return 'TRUE';
        }
    }
}