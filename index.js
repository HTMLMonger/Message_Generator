'use strict'
//define words object that store all words
let words = {
    adjectives:[ 'adorable', 'attractive', 'beautiful', 'cruel', 'clever', 'tasty','attractive','bald','beautiful','chubby','clean','dazzling','drab','elegant','fancy','flabby','glamorous','gorgeous','handsome','tall','magnificent','muscular','plain','plump','quaint','scruffy','shapely','short','skinny','ugly','unkept','unsightly' ],
    nouns:['cat', 'dog', 'hamster', 'bird', 'rat', 'snake', 'spider', 'horse', 'guinea pig','teacher','doctor','chef','student','pilot','firefighter',
    'lawyer','mechanic','engineer','farmer'] ,
    verbs:['always','usually','often','sometimes','rarely','never','hardly ever','occasionally','seldom','generally','frequently','normally','once','twice']
}

const generateRandoNum = num => {
    return Math.floor(Math.random() * num);
  }

//define variables to hold random words for sentence
let firstWord = words.adjectives[generateRandoNum(words.adjectives.length)];
let secondWord = words.nouns[generateRandoNum(words.nouns.length)];
let thirdWord = words.verbs[generateRandoNum(words.verbs.length)];
let fourthWord = words.adjectives[generateRandoNum(words.adjectives.length)];

//log sentence including random words
console.log(`You are ${firstWord}, but there is a ${secondWord} nearby who thinks he is ${thirdWord} ${fourthWord}.👍`)