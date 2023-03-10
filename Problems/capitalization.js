const capitalization = (s) => {
    const firstLetter = s[0].toUpperCase();
    const wordToShow = `${firstLetter}${s.slice(1)}`;
    return wordToShow;
};

const S = 'DatoS';
const S2 = 'lumon';
const S3 = 'anAliticA';

console.log(capitalization(S3));
