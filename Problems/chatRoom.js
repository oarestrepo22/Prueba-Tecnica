const chatRoom = (s) => {
    const wordToArray = s.toLowerCase().split('');

    const wordToCompare = wordToArray.reduce((acc, letter) =>
        acc[acc.length - 1] === letter ? acc : acc + letter
    );

    console.log(wordToCompare);
    return wordToCompare === 'hola' ? 'VERDADERO' : 'FALSO';
};

const S = 'HoLa'; //Verdadero
const S2 = 'hhhhooooollllllaaaaaa'; //Verdadero
const S3 = 'hhhlllllloooollllla'; //False

console.log(chatRoom(S3));
