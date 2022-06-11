function caesarCipher(s, k) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';

    while (k > 25) {
        k = k - 26;
    }
    for (let i = 0; i < s.length; i++) {
        let letter = s[i].toLowerCase();
        if (!alphabet.includes(letter)) {
            newString += s[i];
        } else {
            let index = alphabet.indexOf(letter) + k;
            if (index > 25) {
                index = Math.abs(26 - index);
            }
            let update = alphabet[index];
            if (s[i] !== letter) {
                newString += update.toUpperCase();
            } else {
                newString += update;
            }
        }
    }
    return newString;
}
