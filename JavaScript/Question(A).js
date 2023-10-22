// A.	Take a sentence as an input and reverse every word in that sentence. a. Example - This is a sunny day > shiT si a ynnus yad.

const reverseWordsInSentence = (sentense) => {
    const convertIntoArray = sentense.split(' ');
    const reverseAgain = convertIntoArray.map((word) => {
               return word.split('').reverse().join('');
   })
   const output = reverseAgain.join(' ');
   return output;   
}
console.log(reverseWordsInSentence("This is a sunny day"));
