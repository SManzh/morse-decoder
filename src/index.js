const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let expr2 = '';
    for (let i=0; i<expr.length; i+=2) {
        if (i%10===0){
            expr2+=' ';
        }
        if (expr[i]==='0') {
            expr2+='';
        } else if ((expr[i]==='1')&& (expr[i+1]==='1')){
            expr2+='-';
        } else if ((expr[i]==='1')&& (expr[i+1]==='0')) {
            expr2+='.';
        } else {
            expr2+=' ';
            i=i+8;
        }
    }

    var words = (expr2).split('  ');
    var letters = words.map((w) => w.split(' '));
    var decoded = [];

    for(var i = 0; i < letters.length; i++){
        decoded[i] = [];
        for(var x = 0; x < letters[i].length; x++){
            if(MORSE_TABLE[letters[i][x]]){
                decoded[i].push(MORSE_TABLE[letters[i][x]] );
            }
        }
    }

  return decoded.map(arr => arr.join('')).join(' ');

}

module.exports = {
    decode
}